import { KoreanQuizUnit } from "@/types/courses";
import fs from 'fs';
import path from 'path';

// Đường dẫn đến thư mục hiện tại
const currentDir = __dirname;

// Đọc tất cả các file trong thư mục
const lessonFiles = fs.readdirSync(currentDir)
  .filter(file => /^lesson\d+\.ts$/.test(file))
  .sort((a, b) => {
    const matchA = a.match(/lesson(\d+)/);
    const matchB = b.match(/lesson(\d+)/);
    
    const numA = matchA ? parseInt(matchA[1]) : 0;
    const numB = matchB ? parseInt(matchB[1]) : 0;
    
    return numA - numB;
  });

// Import tất cả các lesson
const lessons = lessonFiles.map(file => {
  // Loại bỏ phần mở rộng .ts để import
  const fileName = file.replace('.ts', '');
  // Dynamic import sẽ không hoạt động ở đây vì nó là async
  // Sử dụng require thay thế
  return require(path.join(currentDir, fileName)).default;
});

const unit1: KoreanQuizUnit = {
  unitId: 1,
  title: "Sơ cấp 1",
  description: "Chào hỏi, giới thiệu, và biểu đạt cơ bản",
  order: 1,
  lessons,
};

export default unit1;