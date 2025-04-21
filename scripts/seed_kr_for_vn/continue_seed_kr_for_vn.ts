import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";
import { eq, inArray } from "drizzle-orm";

import { generateAudio, audioFileExists } from "../../lib/audio";

import * as schema from "../../db/schema";
import { koreanQuizData } from "./korean_quiz_data";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database with Korean for Vietnamese speakers");

    // Kiểm tra và tạo thư mục cho audio files
    const publicDir = path.join(process.cwd(), "public");
    const voiceDir = path.join(publicDir, "voice_kr");

    if (!fs.existsSync(voiceDir)) {
      fs.mkdirSync(voiceDir, { recursive: true });
    }

    // Thu thập và tạo audio files nếu cần
    const audioFilesToGenerate = new Map<string, string>();

    for (const unit of koreanQuizData) {
      for (const lesson of unit.lessons) {
        for (const challenge of lesson.challenges) {
          for (const option of challenge.options) {
            if (option.audioSrc) {
              const audioPath = option.audioSrc;
              const fileName = audioPath
                .replace("/voice_kr/", "")
                .replace(".mp3", "");

              if (
                !audioFileExists(audioPath) &&
                !audioFilesToGenerate.has(fileName)
              ) {
                audioFilesToGenerate.set(fileName, option.text);
              }
            }
          }
        }
      }
    }

    // Tạo audio files nếu cần
    if (audioFilesToGenerate.size > 0) {
      console.log(
        `Generating ${audioFilesToGenerate.size} missing audio files...`
      );

      for (const [fileName, text] of audioFilesToGenerate.entries()) {
        console.log(`Generating audio for: ${fileName} - "${text}"`);

        const voiceNames = ["Anna Kim", "Bin"];
        const randomVoice =
          voiceNames[Math.floor(Math.random() * voiceNames.length)];

        await generateAudio(text, fileName, randomVoice);

        // Thêm độ trễ để tránh quá tải API
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    // ----- PHẦN NÀY ĐÃ ĐƯỢC SỬA ĐỔI -----

    // Kiểm tra xem course có tồn tại chưa, nếu chưa thì thêm mới
    const existingCourses = await db.select().from(schema.courses);
    const existingCourseIds = existingCourses.map((course) => course.id);

    const coursesToInsert = [
      {
        id: 1,
        title: "English",
        imageSrc: "/en.svg",
      },
      {
        id: 2,
        title: "Vietnamese",
        imageSrc: "/vn.svg",
      },
      {
        id: 3,
        title: "Korean",
        imageSrc: "/kr.svg",
      },
      {
        id: 4,
        title: "Chinese",
        imageSrc: "/cn.svg",
      },
    ].filter((course) => !existingCourseIds.includes(course.id));

    if (coursesToInsert.length > 0) {
      await db.insert(schema.courses).values(coursesToInsert);
      console.log(`Inserted ${coursesToInsert.length} new courses`);
    }

    // Lấy danh sách unit hiện có cho khóa học tiếng Hàn
    const existingUnits = await db
      .select()
      .from(schema.units)
      .where(eq(schema.units.courseId, 3)); // Korean course

    const existingUnitIds = existingUnits.map((unit) => unit.id);

    // Danh sách các unit cần thêm mới
    const unitsToInsert = [
      {
        id: 1,
        courseId: 3, // Korean
        title: "Sơ cấp 1",
        description: "Bắt đầu học tiếng Hàn cơ bản",
        order: 1,
      },
      {
        id: 2,
        courseId: 3, // Korean
        title: "Sơ cấp 2",
        description: "Tiếp tục học tiếng Hàn cơ bản",
        order: 2,
      },
      {
        id: 3,
        courseId: 3, // Korean
        title: "Trung cấp 1",
        description: "Học tiếng Hàn trung cấp",
        order: 3,
      },
      {
        id: 4,
        courseId: 3, // Korean
        title: "Trung cấp 2",
        description: "Tiếp tục học tiếng Hàn trung cấp",
        order: 4,
      },
      {
        id: 5,
        courseId: 3, // Korean
        title: "Cao cấp 1",
        description: "Học tiếng Hàn cao cấp",
        order: 5,
      },
      {
        id: 6,
        courseId: 3, // Korean
        title: "Cao cấp 2",
        description: "Tiếp tục học tiếng Hàn cao cấp",
        order: 6,
      },
    ].filter((unit) => !existingUnitIds.includes(unit.id));

    if (unitsToInsert.length > 0) {
      await db.insert(schema.units).values(unitsToInsert);
      console.log(`Inserted ${unitsToInsert.length} new units`);
    }

    // Lấy danh sách lesson hiện có
    const existingLessons = await db.select().from(schema.lessons);
    const existingLessonIdsByUnit = new Map<number, number[]>();

    existingLessons.forEach((lesson) => {
      if (!existingLessonIdsByUnit.has(lesson.unitId)) {
        existingLessonIdsByUnit.set(lesson.unitId, []);
      }
      existingLessonIdsByUnit.get(lesson.unitId)!.push(lesson.id);
    });

    // Lấy ID lesson cao nhất hiện tại để tránh trùng lặp ID khi thêm mới
    const maxLessonId =
      existingLessons.length > 0
        ? Math.max(...existingLessons.map((l) => l.id))
        : 0;

    // Lấy danh sách challenge hiện có
    const existingChallenges = await db.select().from(schema.challenges);
    const maxChallengeId =
      existingChallenges.length > 0
        ? Math.max(...existingChallenges.map((c) => c.id))
        : 0;

    let lessonId = maxLessonId + 1;
    let challengeId = maxChallengeId + 1;
    let totalNewLessons = 0;
    let totalNewChallenges = 0;

    // Thêm các lesson và challenge mới
    for (const unit of koreanQuizData) {
      // Bỏ qua nếu unit không tồn tại
      if (
        !existingUnitIds.includes(unit.unitId) &&
        !unitsToInsert.some((u) => u.id === unit.unitId)
      ) {
        continue;
      }

      const existingLessonIds = existingLessonIdsByUnit.get(unit.unitId) || [];

      for (let i = 0; i < unit.lessons.length; i++) {
        const lesson = unit.lessons[i];

        // Kiểm tra xem lesson đã tồn tại trong unit này chưa (dựa trên title và order)
        const lessonExists = existingLessons.some(
          (l) =>
            l.unitId === unit.unitId &&
            l.title === lesson.title &&
            l.order === i + 1
        );

        if (!lessonExists) {
          // Thêm lesson mới
          await db.insert(schema.lessons).values({
            id: lessonId,
            unitId: unit.unitId,
            title: lesson.title,
            order: i + 1,
          });

          totalNewLessons++;

          // Thêm challenges cho lesson mới
          for (let j = 0; j < lesson.challenges.length; j++) {
            const challenge = lesson.challenges[j];

            await db.insert(schema.challenges).values({
              id: challengeId,
              lessonId: lessonId,
              type: challenge.type,
              order: j + 1,
              question: challenge.question,
            });

            // Thêm options cho challenge mới
            const optionsToInsert = challenge.options.map((option) => ({
              challengeId: challengeId,
              imageSrc: option.imageSrc || null,
              correct: option.correct,
              text: option.text,
              audioSrc: option.audioSrc || null,
            }));

            await db.insert(schema.challengeOptions).values(optionsToInsert);

            challengeId++;
            totalNewChallenges++;
          }

          lessonId++;
        }
      }
    }

    console.log(
      `Added ${totalNewLessons} new lessons and ${totalNewChallenges} new challenges`
    );
    console.log(
      "Korean for Vietnamese speakers seeding complete without affecting user progress"
    );
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to seed the database with Korean for Vietnamese content"
    );
  }
};

main();
