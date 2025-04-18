import { KoreanQuizUnit } from "@/types/courses";
import lesson1 from "./lesson1";
import lesson2 from "./lesson2";

const unit1: KoreanQuizUnit = {
  unitId: 1,
  title: "Sơ cấp 1",
  description: "Chào hỏi, giới thiệu, và biểu đạt cơ bản",
  order: 1,
  lessons: [lesson1, lesson2],
};

export default unit1;
