// units/unit1/lesson6.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson6: Lesson = {
  title: "Gia đình và Mối quan hệ",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Từ tiếng Hàn '가족' có nghĩa là gì?",
        correctOption: {
          text: "가족",
          audioSuffix: "gajok",
        },
        wrongOptions: [
          { text: "친구", audioSuffix: "chingu" },
          { text: "회사", audioSuffix: "hoesa" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ tiếng Hàn '어머니' có nghĩa là gì?",
        correctOption: {
          text: "어머니",
          audioSuffix: "eomeoni",
        },
        wrongOptions: [
          { text: "아버지", audioSuffix: "abeoji" },
          { text: "언니", audioSuffix: "eonni" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ tiếng Hàn '아버지' có nghĩa là gì?",
        correctOption: {
          text: "아버지",
          audioSuffix: "abeoji",
        },
        wrongOptions: [
          { text: "오빠", audioSuffix: "oppa" },
          { text: "어머니", audioSuffix: "eomeoni" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'anh trai' (đối với nữ nói).",
        correctOption: {
          text: "오빠",
          audioSuffix: "oppa",
        },
        wrongOptions: [
          { text: "형", audioSuffix: "hyeong" },
          { text: "남동생", audioSuffix: "namdongsaeng" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'anh trai' (đối với nam nói).",
        correctOption: {
          text: "형",
          audioSuffix: "hyeong",
        },
        wrongOptions: [
          { text: "오빠", audioSuffix: "oppa" },
          { text: "남동생", audioSuffix: "namdongsaeng" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '누나' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "누나",
          audioSuffix: "nuna",
        },
        wrongOptions: [
          { text: "언니", audioSuffix: "eonni" },
          { text: "여동생", audioSuffix: "yeodongsaeng" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '언니' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "언니",
          audioSuffix: "eonni",
        },
        wrongOptions: [
          { text: "누나", audioSuffix: "nuna" },
          { text: "여동생", audioSuffix: "yeodongsaeng" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'em trai'.",
        correctOption: {
          text: "남동생",
          audioSuffix: "namdongsaeng",
        },
        wrongOptions: [
          { text: "형", audioSuffix: "hyeong" },
          { text: "오빠", audioSuffix: "oppa" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'em gái'.",
        correctOption: {
          text: "여동생",
          audioSuffix: "yeodongsaeng",
        },
        wrongOptions: [
          { text: "언니", audioSuffix: "eonni" },
          { text: "누나", audioSuffix: "nuna" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ tiếng Hàn '할아버지' có nghĩa là gì?",
        correctOption: {
          text: "할아버지",
          audioSuffix: "harabeoji",
        },
        wrongOptions: [
          { text: "할머니", audioSuffix: "halmeoni" },
          { text: "삼촌", audioSuffix: "samchon" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ tiếng Hàn '할머니' có nghĩa là gì?",
        correctOption: {
          text: "할머니",
          audioSuffix: "halmeoni",
        },
        wrongOptions: [
          { text: "할아버지", audioSuffix: "harabeoji" },
          { text: "이모", audioSuffix: "imo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn đại từ sở hữu 'của tôi' trong tiếng Hàn.",
        correctOption: {
          text: "제",
          audioSuffix: "je",
        },
        wrongOptions: [
          { text: "너의", audioSuffix: "neoui" },
          { text: "그의", audioSuffix: "geuui" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn đại từ sở hữu 'của bạn' trong tiếng Hàn.",
        correctOption: {
          text: "너의",
          audioSuffix: "neoui",
        },
        wrongOptions: [
          { text: "제", audioSuffix: "je" },
          { text: "저의", audioSuffix: "jeoui" },
        ],
      },
      {
        type: "SELECT",
        question: "Trợ từ nào được dùng để chỉ sở hữu trong tiếng Hàn?",
        correctOption: {
          text: "의",
          audioSuffix: "ui",
        },
        wrongOptions: [
          { text: "에", audioSuffix: "e" },
          { text: "을", audioSuffix: "eul" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '삼촌' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "삼촌",
          audioSuffix: "samchon",
        },
        wrongOptions: [
          { text: "이모", audioSuffix: "imo" },
          { text: "고모", audioSuffix: "gomo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '이모' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "이모",
          audioSuffix: "imo",
        },
        wrongOptions: [
          { text: "삼촌", audioSuffix: "samchon" },
          { text: "고모부", audioSuffix: "gomobu" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Đây là gia đình tôi.'",
        correctOption: {
          text: "이것은 제 가족이에요.",
          audioSuffix: "igeoseun_je_gajogieoyo",
        },
        wrongOptions: [
          {
            text: "저는 가족이 있어요.",
            audioSuffix: "jeoneun_gajogi_isseoyo",
          },
          {
            text: "가족이 어디에 있어요?",
            audioSuffix: "gajogi_eodie_isseoyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Đó là bố tôi.'",
        correctOption: {
          text: "저분은 제 아버지예요.",
          audioSuffix: "jeobun_je_abeojiyeyo",
        },
        wrongOptions: [
          {
            text: "저분은 제 어머니예요.",
            audioSuffix: "jeobun_je_eomeoniyeyo",
          },
          { text: "저분은 제 형이에요.", audioSuffix: "jeobun_je_hyeongieyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '고모' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "고모",
          audioSuffix: "gomo",
        },
        wrongOptions: [
          { text: "이모", audioSuffix: "imo" },
          { text: "숙모", audioSuffix: "sukmo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '남편' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "남편",
          audioSuffix: "namphyeon",
        },
        wrongOptions: [
          { text: "아내", audioSuffix: "anae" },
          { text: "아들", audioSuffix: "adeul" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '아내' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "아내",
          audioSuffix: "anae",
        },
        wrongOptions: [
          { text: "남편", audioSuffix: "namphyeon" },
          { text: "딸", audioSuffix: "ttal" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Min-ho là con trai tôi.'",
        correctOption: {
          text: "민호는 제 아들이에요.",
          audioSuffix: "minhoneun_je_adeurieyo",
        },
        wrongOptions: [
          {
            text: "민호는 제 형이에요.",
            audioSuffix: "minhoneun_je_hyeongieyo",
          },
          {
            text: "민호는 제 남동생이에요.",
            audioSuffix: "minhoneun_je_namdongsaengieyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Ji-eun là em gái tôi.'",
        correctOption: {
          text: "지은이는 제 여동생이에요.",
          audioSuffix: "jieunieun_je_yeodongsaengieyo",
        },
        wrongOptions: [
          {
            text: "지은이는 제 언니예요.",
            audioSuffix: "jieunieun_je_eonniyeyo",
          },
          {
            text: "지은이는 제 누나예요.",
            audioSuffix: "jieunieun_je_nunayeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '아들' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "아들",
          audioSuffix: "adeul",
        },
        wrongOptions: [
          { text: "딸", audioSuffix: "ttal" },
          { text: "조카", audioSuffix: "joka" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '딸' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "딸",
          audioSuffix: "ttal",
        },
        wrongOptions: [
          { text: "아들", audioSuffix: "adeul" },
          { text: "남편", audioSuffix: "namphyeon" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Bạn có anh trai không?'",
        correctOption: {
          text: "형이 있어요?",
          audioSuffix: "hyeongi_isseoyo",
        },
        wrongOptions: [
          { text: "형이 누구예요?", audioSuffix: "hyeongi_nuguyeyo" },
          { text: "형이 어디에 있어요?", audioSuffix: "hyeongi_eodie_isseoyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi có hai em gái.'",
        correctOption: {
          text: "저는 여동생이 둘 있어요.",
          audioSuffix: "jeoneun_yeodongsaengi_dul_isseoyo",
        },
        wrongOptions: [
          {
            text: "저는 여동생이 없어요.",
            audioSuffix: "jeoneun_yeodongsaengi_eopsseoyo",
          },
          {
            text: "저는 여동생이 한 명 있어요.",
            audioSuffix: "jeoneun_yeodongsaengi_han_myeong_isseoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '조카' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "조카",
          audioSuffix: "joka",
        },
        wrongOptions: [
          { text: "사촌", audioSuffix: "sachon" },
          { text: "손자", audioSuffix: "sonja" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '사촌' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "사촌",
          audioSuffix: "sachon",
        },
        wrongOptions: [
          { text: "조카", audioSuffix: "joka" },
          { text: "손녀", audioSuffix: "sonnyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cô ấy là chị gái của tôi.'",
        correctOption: {
          text: "그녀는 제 언니예요.",
          audioSuffix: "geunyeoneun_je_eonniyeyo",
        },
        wrongOptions: [
          {
            text: "그녀는 제 여동생이에요.",
            audioSuffix: "geunyeoneun_je_yeodongsaengieyo",
          },
          {
            text: "그녀는 제 누나예요.",
            audioSuffix: "geunyeoneun_je_nunayeyo",
          },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson6;
