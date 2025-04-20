import { Lesson } from "@/types/courses";
import { createChallengesFromTemplates } from "@/lib/utils";

const lesson2: Lesson = {
  title: "Bảng chữ cái Hangul",
  challenges: createChallengesFromTemplates([
    // 1. Nguyên âm cơ bản
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
      question: "Nguyên âm nào được phát âm là 'eo'?",
      correctOption: { text: "ㅓ", audioSuffix: "eo" },
      wrongOptions: [
        { text: "ㅗ", audioSuffix: "o" },
        { text: "ㅏ", audioSuffix: "a" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: Chữ cái 'u' trong Hangul là ___",
      correctOption: { text: "ㅜ", audioSuffix: "u" },
      wrongOptions: [
        { text: "ㅡ", audioSuffix: "eu" },
        { text: "ㅗ", audioSuffix: "o" },
      ],
    },
    {
      type: "SELECT",
      question: "Nguyên âm 'ㅡ' được phát âm là gì?",
      correctOption: { text: "eu", audioSuffix: "eu" },
      wrongOptions: [
        { text: "u", audioSuffix: "u" },
        { text: "o", audioSuffix: "o" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: Nguyên âm thẳng đứng trong Hangul là ___",
      correctOption: { text: "ㅣ", audioSuffix: "i" },
      wrongOptions: [
        { text: "ㅡ", audioSuffix: "eu" },
        { text: "ㅜ", audioSuffix: "u" },
      ],
    },

    // 2. Phụ âm cơ bản
    {
      type: "SELECT",
      question: "Chữ cái nào là phụ âm trong Hangul?",
      correctOption: { text: "ㄴ", audioSuffix: "n" },
      wrongOptions: [
        { text: "ㅐ", audioSuffix: "ae" },
        { text: "ㅓ", audioSuffix: "eo" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㄱ' phát âm là ___",
      correctOption: { text: "g/k", audioSuffix: "giyeok" },
      wrongOptions: [
        { text: "d/t", audioSuffix: "digeut" },
        { text: "b/p", audioSuffix: "bieup" },
      ],
    },
    {
      type: "SELECT",
      question: "Phụ âm nào phát âm là 'm'?",
      correctOption: { text: "ㅁ", audioSuffix: "m" },
      wrongOptions: [
        { text: "ㄹ", audioSuffix: "r_l" },
        { text: "ㅈ", audioSuffix: "j" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㄷ' phát âm là ___",
      correctOption: { text: "d/t", audioSuffix: "digeut" },
      wrongOptions: [
        { text: "g/k", audioSuffix: "giyeok" },
        { text: "r/l", audioSuffix: "rieul" },
      ],
    },
    {
      type: "SELECT",
      question: "Phụ âm 'ㄹ' phát âm gần với âm nào trong tiếng Việt?",
      correctOption: { text: "r/l", audioSuffix: "rieul" },
      wrongOptions: [
        { text: "n", audioSuffix: "nieun" },
        { text: "m", audioSuffix: "mieum" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㅂ' phát âm là ___",
      correctOption: { text: "b/p", audioSuffix: "bieup" },
      wrongOptions: [
        { text: "d/t", audioSuffix: "digeut" },
        { text: "j", audioSuffix: "jieut" },
      ],
    },

    // 3. Phụ âm nâng cao
    {
      type: "SELECT",
      question: "Phụ âm nào phát âm là 's'?",
      correctOption: { text: "ㅅ", audioSuffix: "s" },
      wrongOptions: [
        { text: "ㅈ", audioSuffix: "j" },
        { text: "ㅊ", audioSuffix: "ch" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㅇ' ở đầu từ phát âm là ___",
      correctOption: { text: "im lặng", audioSuffix: "silent" },
      wrongOptions: [
        { text: "ng", audioSuffix: "ng" },
        { text: "y", audioSuffix: "y" },
      ],
    },
    {
      type: "SELECT",
      question: "Phụ âm nào phát âm là 'j/ch'?",
      correctOption: { text: "ㅈ", audioSuffix: "j" },
      wrongOptions: [
        { text: "ㅅ", audioSuffix: "s" },
        { text: "ㅎ", audioSuffix: "h" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㅊ' phát âm là ___",
      correctOption: { text: "ch", audioSuffix: "ch" },
      wrongOptions: [
        { text: "j", audioSuffix: "j" },
        { text: "k", audioSuffix: "k" },
      ],
    },
    {
      type: "SELECT",
      question: "Phụ âm nào là phiên bản mạnh của 'k'?",
      correctOption: { text: "ㅋ", audioSuffix: "k" },
      wrongOptions: [
        { text: "ㄱ", audioSuffix: "g" },
        { text: "ㅌ", audioSuffix: "t" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㅌ' phát âm là ___",
      correctOption: { text: "t", audioSuffix: "t" },
      wrongOptions: [
        { text: "p", audioSuffix: "p" },
        { text: "k", audioSuffix: "k" },
      ],
    },

    // 4. Cách ghép vần
    {
      type: "SELECT",
      question: "Kết hợp nào tạo thành chữ 'ga'?",
      correctOption: { text: "ㄱ + ㅏ = 가", audioSuffix: "ga" },
      wrongOptions: [
        { text: "ㄱ + ㅓ = 거", audioSuffix: "geo" },
        { text: "ㄴ + ㅏ = 나", audioSuffix: "na" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㄴ + ㅏ = ___'",
      correctOption: { text: "나", audioSuffix: "na" },
      wrongOptions: [
        { text: "마", audioSuffix: "ma" },
        { text: "라", audioSuffix: "ra" },
      ],
    },
    {
      type: "SELECT",
      question: "Chữ '서' được tạo thành từ những âm nào?",
      correctOption: { text: "ㅅ + ㅓ", audioSuffix: "seo" },
      wrongOptions: [
        { text: "ㅅ + ㅗ", audioSuffix: "so" },
        { text: "ㅅ + ㅜ", audioSuffix: "su" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㅁ + ㅜ = ___'",
      correctOption: { text: "무", audioSuffix: "mu" },
      wrongOptions: [
        { text: "모", audioSuffix: "mo" },
        { text: "마", audioSuffix: "ma" },
      ],
    },
    {
      type: "SELECT",
      question: "Kết hợp nào tạo thành chữ 'ho'?",
      correctOption: { text: "ㅎ + ㅗ = 호", audioSuffix: "ho" },
      wrongOptions: [
        { text: "ㅎ + ㅜ = 후", audioSuffix: "hu" },
        { text: "ㅎ + ㅏ = 하", audioSuffix: "ha" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: 'ㅈ + ㅗ = ___'",
      correctOption: { text: "조", audioSuffix: "jo" },
      wrongOptions: [
        { text: "저", audioSuffix: "jeo" },
        { text: "자", audioSuffix: "ja" },
      ],
    },

    // 5. Thực hành đọc và viết
    {
      type: "SELECT",
      question: "Chữ nào được đọc là 'i'?",
      correctOption: { text: "이", audioSuffix: "i" },
      wrongOptions: [
        { text: "어", audioSuffix: "eo" },
        { text: "우", audioSuffix: "u" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '___' đọc là 'ne'",
      correctOption: { text: "네", audioSuffix: "ne" },
      wrongOptions: [
        { text: "내", audioSuffix: "nae" },
        { text: "노", audioSuffix: "no" },
      ],
    },
    {
      type: "SELECT",
      question: "Âm thanh nào đọc là 'mi'?",
      correctOption: { text: "미", audioSuffix: "mi" },
      wrongOptions: [
        { text: "마", audioSuffix: "ma" },
        { text: "무", audioSuffix: "mu" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '___' đọc là 'bu'",
      correctOption: { text: "부", audioSuffix: "bu" },
      wrongOptions: [
        { text: "바", audioSuffix: "ba" },
        { text: "비", audioSuffix: "bi" },
      ],
    },
    {
      type: "SELECT",
      question: "Từ nào được đọc là 'hana' (một)?",
      correctOption: { text: "하나", audioSuffix: "hana" },
      wrongOptions: [
        { text: "하마", audioSuffix: "hama" },
        { text: "하다", audioSuffix: "hada" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '안녕하___' (annyeonghaseyo - xin chào)",
      correctOption: { text: "세요", audioSuffix: "seyo" },
      wrongOptions: [
        { text: "시오", audioSuffix: "sio" },
        { text: "사요", audioSuffix: "sayo" },
      ],
    },
  ]),
};

export default lesson2;
