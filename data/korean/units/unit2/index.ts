// data/korean/units/unit2.ts

import { KoreanQuizUnit } from "@/types/courses";
import { createChallengesFromTemplates } from "@/lib/utils";

const unit2: KoreanQuizUnit = {
  unitId: 2,
  title: "Sơ cấp 1 - Bài 2",
  description: "Làm quen với bảng chữ cái Hangul",
  order: 2,
  lessons: [
    {
      title: "Bảng chữ cái Hangul",
      challenges: createChallengesFromTemplates([
        {
          type: "SELECT",
          question: "Chữ cái nào là nguyên âm cơ bản trong Hangul?",
          correctOption: { text: "ㅏ", audioSuffix: "a" },
          wrongOptions: [
            { text: "ㄱ", audioSuffix: "g" },
            { text: "ㅁ", audioSuffix: "m" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: Chữ cái 'o' trong Hangul là ___",
          correctOption: { text: "ㅗ", audioSuffix: "o" },
          wrongOptions: [
            { text: "ㅜ", audioSuffix: "u" },
            { text: "ㅣ", audioSuffix: "i" },
          ],
        },
        {
          type: "SELECT",
          question: "Chữ cái nào là phụ âm?",
          correctOption: { text: "ㄴ", audioSuffix: "n" },
          wrongOptions: [
            { text: "ㅐ", audioSuffix: "ae" },
            { text: "ㅓ", audioSuffix: "eo" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: Chữ cái 'u' trong Hangul là ___",
          correctOption: { text: "ㅜ", audioSuffix: "u" },
          wrongOptions: [
            { text: "ㅡ", audioSuffix: "eu" },
            { text: "ㅣ", audioSuffix: "i" },
          ],
        },
        {
          type: "SELECT",
          question: "Chữ nào sau đây phát âm là 'm'?",
          correctOption: { text: "ㅁ", audioSuffix: "m" },
          wrongOptions: [
            { text: "ㄹ", audioSuffix: "r" },
            { text: "ㅈ", audioSuffix: "j" },
          ],
        },
        {
          type: "SELECT",
          question: "Cặp ghép nào tạo thành âm 'ma'?",
          correctOption: { text: "ㅁ + ㅏ = 마", audioSuffix: "ma" },
          wrongOptions: [
            { text: "ㅁ + ㅓ = 머", audioSuffix: "meo" },
            { text: "ㅁ + ㅗ = 모", audioSuffix: "mo" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅂ' phát âm là ___",
          correctOption: { text: "b", audioSuffix: "b" },
          wrongOptions: [
            { text: "d", audioSuffix: "d" },
            { text: "m", audioSuffix: "m" },
          ],
        },
        {
          type: "SELECT",
          question: "Ký tự nào là nguyên âm thẳng đứng?",
          correctOption: { text: "ㅣ", audioSuffix: "i" },
          wrongOptions: [
            { text: "ㅡ", audioSuffix: "eu" },
            { text: "ㅜ", audioSuffix: "u" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅊ + ㅏ = ___'",
          correctOption: { text: "차", audioSuffix: "cha" },
          wrongOptions: [
            { text: "자", audioSuffix: "ja" },
            { text: "카", audioSuffix: "ka" },
          ],
        },
        {
          type: "SELECT",
          question: "Phát âm của 'ㅎ' là gì?",
          correctOption: { text: "h", audioSuffix: "h" },
          wrongOptions: [
            { text: "n", audioSuffix: "n" },
            { text: "s", audioSuffix: "s" },
          ],
        },
        {
          type: "SELECT",
          question: "Chữ ghép nào phát âm là 'no'?",
          correctOption: { text: "ㄴ + ㅗ = 노", audioSuffix: "no" },
          wrongOptions: [
            { text: "ㄴ + ㅜ = 누", audioSuffix: "nu" },
            { text: "ㄴ + ㅏ = 나", audioSuffix: "na" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㄱ + ㅜ = ___'",
          correctOption: { text: "구", audioSuffix: "gu" },
          wrongOptions: [
            { text: "고", audioSuffix: "go" },
            { text: "가", audioSuffix: "ga" },
          ],
        },
        {
          type: "SELECT",
          question: "Phụ âm nào có âm gần giống 'ch'?",
          correctOption: { text: "ㅊ", audioSuffix: "ch" },
          wrongOptions: [
            { text: "ㅈ", audioSuffix: "j" },
            { text: "ㅋ", audioSuffix: "k" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅅ' phát âm là ___",
          correctOption: { text: "s", audioSuffix: "s" },
          wrongOptions: [
            { text: "t", audioSuffix: "t" },
            { text: "p", audioSuffix: "p" },
          ],
        },
        {
          type: "SELECT",
          question: "Nguyên âm nào đọc là 'eo'?",
          correctOption: { text: "ㅓ", audioSuffix: "eo" },
          wrongOptions: [
            { text: "ㅗ", audioSuffix: "o" },
            { text: "ㅏ", audioSuffix: "a" },
          ],
        },
        {
          type: "SELECT",
          question: "Tổ hợp nào phát âm là 'ba'?",
          correctOption: { text: "ㅂ + ㅏ = 바", audioSuffix: "ba" },
          wrongOptions: [
            { text: "ㅍ + ㅏ = 파", audioSuffix: "pa" },
            { text: "ㅁ + ㅏ = 마", audioSuffix: "ma" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㄷ' phát âm là ___",
          correctOption: { text: "d", audioSuffix: "d" },
          wrongOptions: [
            { text: "t", audioSuffix: "t" },
            { text: "l", audioSuffix: "l" },
          ],
        },
        {
          type: "SELECT",
          question: "Nguyên âm 'ㅡ' được phát âm là gì?",
          correctOption: { text: "eu", audioSuffix: "eu" },
          wrongOptions: [
            { text: "u", audioSuffix: "u" },
            { text: "i", audioSuffix: "i" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅇ + ㅣ = ___'",
          correctOption: { text: "이", audioSuffix: "i" },
          wrongOptions: [
            { text: "우", audioSuffix: "u" },
            { text: "오", audioSuffix: "o" },
          ],
        },
        {
          type: "SELECT",
          question: "Chữ nào sau đây bắt đầu bằng phụ âm 'ㅈ'?",
          correctOption: { text: "자", audioSuffix: "ja" },
          wrongOptions: [
            { text: "가", audioSuffix: "ga" },
            { text: "나", audioSuffix: "na" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅌ' phát âm là ___",
          correctOption: { text: "t", audioSuffix: "t" },
          wrongOptions: [
            { text: "k", audioSuffix: "k" },
            { text: "p", audioSuffix: "p" },
          ],
        },
        {
          type: "SELECT",
          question: "Phụ âm nào có âm gần giống 'k'?",
          correctOption: { text: "ㅋ", audioSuffix: "k" },
          wrongOptions: [
            { text: "ㅈ", audioSuffix: "j" },
            { text: "ㅎ", audioSuffix: "h" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅍ' phát âm là ___",
          correctOption: { text: "p", audioSuffix: "p" },
          wrongOptions: [
            { text: "b", audioSuffix: "b" },
            { text: "f", audioSuffix: "f" },
          ],
        },
        {
          type: "SELECT",
          question: "Kết hợp nào tạo thành '하' (ha)?",
          correctOption: { text: "ㅎ + ㅏ", audioSuffix: "ha" },
          wrongOptions: [
            { text: "ㅎ + ㅗ", audioSuffix: "ho" },
            { text: "ㅎ + ㅜ", audioSuffix: "hu" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㄹ' phát âm là ___",
          correctOption: { text: "r/l", audioSuffix: "rieul" },
          wrongOptions: [
            { text: "n", audioSuffix: "n" },
            { text: "m", audioSuffix: "m" },
          ],
        },
        {
          type: "SELECT",
          question: "Nguyên âm nào là âm đứng ngang?",
          correctOption: { text: "ㅡ", audioSuffix: "eu" },
          wrongOptions: [
            { text: "ㅏ", audioSuffix: "a" },
            { text: "ㅣ", audioSuffix: "i" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅈ + ㅏ = ___'",
          correctOption: { text: "자", audioSuffix: "ja" },
          wrongOptions: [
            { text: "차", audioSuffix: "cha" },
            { text: "가", audioSuffix: "ga" },
          ],
        },
        {
          type: "SELECT",
          question: "Chữ cái nào không phải là phụ âm?",
          correctOption: { text: "ㅗ", audioSuffix: "o" },
          wrongOptions: [
            { text: "ㄷ", audioSuffix: "d" },
            { text: "ㅂ", audioSuffix: "b" },
          ],
        },
        {
          type: "ASSIST",
          question: "Điền vào chỗ trống: 'ㅣ' phát âm là ___",
          correctOption: { text: "i", audioSuffix: "i" },
          wrongOptions: [
            { text: "u", audioSuffix: "u" },
            { text: "eo", audioSuffix: "eo" },
          ],
        },
        {
          type: "SELECT",
          question: "Chữ ghép nào phát âm là 'seo'?",
          correctOption: { text: "ㅅ + ㅓ = 서", audioSuffix: "seo" },
          wrongOptions: [
            { text: "ㅅ + ㅏ = 사", audioSuffix: "sa" },
            { text: "ㅅ + ㅗ = 소", audioSuffix: "so" },
          ],
        },
      ]),
    },
  ],
};

export default unit2;
