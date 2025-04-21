// units/unit1/lesson5.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson5: Lesson = {
  title: "Địa điểm và Phương hướng",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Từ '집' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "집",
          audioSuffix: "jip",
        },
        wrongOptions: [
          { text: "학교", audioSuffix: "hakgyo" },
          { text: "회사", audioSuffix: "hoesa" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '학교' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "학교",
          audioSuffix: "hakgyo",
        },
        wrongOptions: [
          { text: "집", audioSuffix: "jip" },
          { text: "병원", audioSuffix: "byeongwon" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '회사' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "회사",
          audioSuffix: "hoesa",
        },
        wrongOptions: [
          { text: "학교", audioSuffix: "hakgyo" },
          { text: "식당", audioSuffix: "sikdang" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách hỏi 'Ở đâu?' trong tiếng Hàn.",
        correctOption: {
          text: "어디에 있어요?",
          audioSuffix: "eodie_isseoyo",
        },
        wrongOptions: [
          { text: "무엇이에요?", audioSuffix: "mueosieyo" },
          { text: "언제예요?", audioSuffix: "eonjeyeyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào có nghĩa là 'bên trái'?",
        correctOption: {
          text: "왼쪽",
          audioSuffix: "oenjjok",
        },
        wrongOptions: [
          { text: "오른쪽", audioSuffix: "oreunjjok" },
          { text: "앞", audioSuffix: "ap" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào có nghĩa là 'bên phải'?",
        correctOption: {
          text: "오른쪽",
          audioSuffix: "oreunjjok",
        },
        wrongOptions: [
          { text: "왼쪽", audioSuffix: "oenjjok" },
          { text: "뒤", audioSuffix: "dwi" },
        ],
      },
      {
        type: "SELECT",
        question: "Trợ từ nào được dùng để chỉ vị trí?",
        correctOption: {
          text: "에",
          audioSuffix: "e",
        },
        wrongOptions: [
          { text: "를", audioSuffix: "reul" },
          { text: "이", audioSuffix: "i" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ có nghĩa là 'có' (tồn tại).",
        correctOption: {
          text: "있어요",
          audioSuffix: "isseoyo",
        },
        wrongOptions: [
          { text: "없어요", audioSuffix: "eopsseoyo" },
          { text: "가요", audioSuffix: "gayo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ có nghĩa là 'không có'.",
        correctOption: {
          text: "없어요",
          audioSuffix: "eopsseoyo",
        },
        wrongOptions: [
          { text: "있어요", audioSuffix: "isseoyo" },
          { text: "와요", audioSuffix: "wayo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '병원' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "병원",
          audioSuffix: "byeongwon",
        },
        wrongOptions: [
          { text: "은행", audioSuffix: "eunhaeng" },
          { text: "도서관", audioSuffix: "doseogwan" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '식당' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "식당",
          audioSuffix: "sikdang",
        },
        wrongOptions: [
          { text: "화장실", audioSuffix: "hwajangsil" },
          { text: "공원", audioSuffix: "gongwon" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Nhà ở đâu?'",
        correctOption: {
          text: "집이 어디에 있어요?",
          audioSuffix: "jibi_eodie_isseoyo",
        },
        wrongOptions: [
          { text: "집에 뭐가 있어요?", audioSuffix: "jibe_mwoga_isseoyo" },
          { text: "집이 없어요?", audioSuffix: "jibi_eopsseoyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Trường học ở bên phải.'",
        correctOption: {
          text: "학교가 오른쪽에 있어요.",
          audioSuffix: "hakgyoga_oreunjjoge_isseoyo",
        },
        wrongOptions: [
          {
            text: "학교가 왼쪽에 있어요.",
            audioSuffix: "hakgyoga_oenjjoge_isseoyo",
          },
          { text: "학교가 앞에 있어요.", audioSuffix: "hakgyoga_ape_isseoyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào có nghĩa là 'phía trước'?",
        correctOption: {
          text: "앞",
          audioSuffix: "ap",
        },
        wrongOptions: [
          { text: "뒤", audioSuffix: "dwi" },
          { text: "옆", audioSuffix: "yeop" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào có nghĩa là 'phía sau'?",
        correctOption: {
          text: "뒤",
          audioSuffix: "dwi",
        },
        wrongOptions: [
          { text: "앞", audioSuffix: "ap" },
          { text: "위", audioSuffix: "wi" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '은행' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "은행",
          audioSuffix: "eunhaeng",
        },
        wrongOptions: [
          { text: "병원", audioSuffix: "byeongwon" },
          { text: "약국", audioSuffix: "yakguk" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '도서관' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "도서관",
          audioSuffix: "doseogwan",
        },
        wrongOptions: [
          { text: "우체국", audioSuffix: "ucheguk" },
          { text: "슈퍼마켓", audioSuffix: "syupeomaket" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Công ty không ở đây.'",
        correctOption: {
          text: "회사가 여기에 없어요.",
          audioSuffix: "hoesaga_yeogie_eopsseoyo",
        },
        wrongOptions: [
          {
            text: "회사가 여기에 있어요.",
            audioSuffix: "hoesaga_yeogie_isseoyo",
          },
          {
            text: "회사에 사람이 없어요.",
            audioSuffix: "hoesae_sarami_eopsseoyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Bệnh viện ở đâu?'",
        correctOption: {
          text: "병원이 어디에 있어요?",
          audioSuffix: "byeongwoni_eodie_isseoyo",
        },
        wrongOptions: [
          {
            text: "병원에 누가 있어요?",
            audioSuffix: "byeongwone_nuga_isseoyo",
          },
          { text: "병원이 멀어요?", audioSuffix: "byeongwoni_meoreoyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào có nghĩa là 'bên cạnh'?",
        correctOption: {
          text: "옆",
          audioSuffix: "yeop",
        },
        wrongOptions: [
          { text: "위", audioSuffix: "wi" },
          { text: "아래", audioSuffix: "arae" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào có nghĩa là 'phía trên'?",
        correctOption: {
          text: "위",
          audioSuffix: "wi",
        },
        wrongOptions: [
          { text: "아래", audioSuffix: "arae" },
          { text: "옆", audioSuffix: "yeop" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào có nghĩa là 'phía dưới'?",
        correctOption: {
          text: "아래",
          audioSuffix: "arae",
        },
        wrongOptions: [
          { text: "위", audioSuffix: "wi" },
          { text: "앞", audioSuffix: "ap" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '화장실' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "화장실",
          audioSuffix: "hwajangsil",
        },
        wrongOptions: [
          { text: "식당", audioSuffix: "sikdang" },
          { text: "교실", audioSuffix: "gyosil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '공원' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "공원",
          audioSuffix: "gongwon",
        },
        wrongOptions: [
          { text: "도서관", audioSuffix: "doseogwan" },
          { text: "시장", audioSuffix: "sijang" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Nhà hàng ở bên trái.'",
        correctOption: {
          text: "식당이 왼쪽에 있어요.",
          audioSuffix: "sikdangi_oenjjoge_isseoyo",
        },
        wrongOptions: [
          {
            text: "식당이 오른쪽에 있어요.",
            audioSuffix: "sikdangi_oreunjjoge_isseoyo",
          },
          {
            text: "식당이 근처에 있어요.",
            audioSuffix: "sikdangi_geunchee_isseoyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Ở đâu có ngân hàng?'",
        correctOption: {
          text: "어디에 은행이 있어요?",
          audioSuffix: "eodie_eunhaengi_isseoyo",
        },
        wrongOptions: [
          {
            text: "은행이 어디에 있어요?",
            audioSuffix: "eunhaengi_eodie_isseoyo",
          },
          {
            text: "은행에 누가 있어요?",
            audioSuffix: "eunhaenge_nuga_isseoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '약국' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "약국",
          audioSuffix: "yakguk",
        },
        wrongOptions: [
          { text: "은행", audioSuffix: "eunhaeng" },
          { text: "우체국", audioSuffix: "ucheguk" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '우체국' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "우체국",
          audioSuffix: "ucheguk",
        },
        wrongOptions: [
          { text: "약국", audioSuffix: "yakguk" },
          { text: "시장", audioSuffix: "sijang" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Thư viện ở phía trước.'",
        correctOption: {
          text: "도서관이 앞에 있어요.",
          audioSuffix: "doseogwani_ape_isseoyo",
        },
        wrongOptions: [
          {
            text: "도서관이 뒤에 있어요.",
            audioSuffix: "doseogwani_dwie_isseoyo",
          },
          {
            text: "도서관이 옆에 있어요.",
            audioSuffix: "doseogwani_yeope_isseoyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Nhà vệ sinh ở đâu?'",
        correctOption: {
          text: "화장실이 어디에 있어요?",
          audioSuffix: "hwajangshiri_eodie_isseoyo",
        },
        wrongOptions: [
          {
            text: "화장실에 누가 있어요?",
            audioSuffix: "hwajangshille_nuga_isseoyo",
          },
          { text: "화장실이 커요?", audioSuffix: "hwajangshiri_keoyo" },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson5;
