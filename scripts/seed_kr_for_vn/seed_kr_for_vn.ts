import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../../db/schema";
import { koreanQuizData } from "./korean_quiz_data";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database with Korean for Vietnamese speakers");

    // Clean up existing data
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    // Insert courses
    await db.insert(schema.courses).values([
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
    ]);

    // Insert units for Korean course
    const units = [
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
    ];

    await db.insert(schema.units).values(units);

    // Insert lessons, challenges, and options from korean_quiz_data
    let lessonId = 1;
    let challengeId = 1;

    for (const unit of koreanQuizData) {
      for (let i = 0; i < unit.lessons.length; i++) {
        const lesson = unit.lessons[i];

        // Insert lesson
        await db.insert(schema.lessons).values({
          id: lessonId,
          unitId: unit.unitId,
          title: lesson.title,
          order: i + 1,
        });

        // Insert challenges for this lesson
        for (let j = 0; j < lesson.challenges.length; j++) {
          const challenge = lesson.challenges[j];

          // Insert challenge
          await db.insert(schema.challenges).values({
            id: challengeId,
            lessonId: lessonId,
            type: challenge.type,
            order: j + 1,
            question: challenge.question,
          });

          // Insert challenge options
          const optionsToInsert = challenge.options.map((option) => ({
            challengeId: challengeId,
            imageSrc: option.imageSrc || null,
            correct: option.correct,
            text: option.text,
            audioSrc: option.audioSrc || null,
          }));

          await db.insert(schema.challengeOptions).values(optionsToInsert);

          challengeId++;
        }

        lessonId++;
      }
    }

    console.log("Korean for Vietnamese speakers seeding complete");
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to seed the database with Korean for Vietnamese content"
    );
  }
};

main();
