// units/unit1/lesson4.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson4: Lesson = {
  title: "Đồ vật hàng ngày và Từ chỉ định",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Câu 'Đây là gì?' trong tiếng Hàn là gì?",
        correctOption: {
          text: "이것은 뭐예요?",
          audioSuffix: "igeoseun_mwoyeyo",
        },
        wrongOptions: [
          { text: "저것은 뭐예요?", audioSuffix: "jeogeoseun_mwoyeyo" },
          { text: "그것은 뭐예요?", audioSuffix: "geugeoseun_mwoyeyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào dùng để chỉ vật ở gần người nói?",
        correctOption: {
          text: "이",
          audioSuffix: "i",
        },
        wrongOptions: [
          { text: "그", audioSuffix: "geu" },
          { text: "저", audioSuffix: "jeo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào dùng để chỉ vật ở gần người nghe?",
        correctOption: {
          text: "그",
          audioSuffix: "geu",
        },
        wrongOptions: [
          { text: "이", audioSuffix: "i" },
          { text: "저", audioSuffix: "jeo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ nào dùng để chỉ vật ở xa cả người nói và người nghe?",
        correctOption: {
          text: "저",
          audioSuffix: "jeo",
        },
        wrongOptions: [
          { text: "이", audioSuffix: "i" },
          { text: "그", audioSuffix: "geu" },
        ],
      },
      {
        type: "SELECT",
        question: "Trợ từ chủ ngữ cho từ kết thúc bằng nguyên âm là?",
        correctOption: {
          text: "가",
          audioSuffix: "ga",
        },
        wrongOptions: [
          { text: "이", audioSuffix: "i" },
          { text: "은", audioSuffix: "eun" },
        ],
      },
      {
        type: "SELECT",
        question: "Trợ từ chủ ngữ cho từ kết thúc bằng phụ âm là?",
        correctOption: {
          text: "이",
          audioSuffix: "i",
        },
        wrongOptions: [
          { text: "가", audioSuffix: "ga" },
          { text: "는", audioSuffix: "neun" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn đồ vật thường dùng trong lớp học.",
        correctOption: {
          text: "연필",
          audioSuffix: "yeonpil",
        },
        wrongOptions: [
          { text: "가방", audioSuffix: "gabang" },
          { text: "열쇠", audioSuffix: "yeolsoe" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn đồ dùng cá nhân.",
        correctOption: {
          text: "지갑",
          audioSuffix: "jigap",
        },
        wrongOptions: [
          { text: "책상", audioSuffix: "chaeksang" },
          { text: "의자", audioSuffix: "uija" },
        ],
      },
      {
        type: "SELECT",
        question: "Tiếng Hàn của từ 'bút' là gì?",
        correctOption: {
          text: "펜",
          audioSuffix: "pen",
        },
        wrongOptions: [
          { text: "책", audioSuffix: "chaek" },
          { text: "공책", audioSuffix: "gongchaek" },
        ],
      },
      {
        type: "SELECT",
        question: "Tiếng Hàn của từ 'sách' là gì?",
        correctOption: {
          text: "책",
          audioSuffix: "chaek",
        },
        wrongOptions: [
          { text: "연필", audioSuffix: "yeonpil" },
          { text: "지우개", audioSuffix: "jiugae" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Đó là gì?'",
        correctOption: {
          text: "그것은 뭐예요?",
          audioSuffix: "geugeoseun_mwoyeyo",
        },
        wrongOptions: [
          { text: "이것은 뭐예요?", audioSuffix: "igeoseun_mwoyeyo" },
          { text: "저것은 뭐예요?", audioSuffix: "jeogeoseun_mwoyeyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Kia là gì?'",
        correctOption: {
          text: "저것은 뭐예요?",
          audioSuffix: "jeogeoseun_mwoyeyo",
        },
        wrongOptions: [
          { text: "이것은 뭐예요?", audioSuffix: "igeoseun_mwoyeyo" },
          { text: "그것은 뭐예요?", audioSuffix: "geugeoseun_mwoyeyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Cách nói 'cái bàn' trong tiếng Hàn là?",
        correctOption: {
          text: "책상",
          audioSuffix: "chaeksang",
        },
        wrongOptions: [
          { text: "의자", audioSuffix: "uija" },
          { text: "창문", audioSuffix: "changmun" },
        ],
      },
      {
        type: "SELECT",
        question: "Cách nói 'cái ghế' trong tiếng Hàn là?",
        correctOption: {
          text: "의자",
          audioSuffix: "uija",
        },
        wrongOptions: [
          { text: "책상", audioSuffix: "chaeksang" },
          { text: "문", audioSuffix: "mun" },
        ],
      },
      {
        type: "SELECT",
        question: "Cái này ở gần tôi, tôi nên dùng từ nào?",
        correctOption: {
          text: "이것",
          audioSuffix: "igeot",
        },
        wrongOptions: [
          { text: "그것", audioSuffix: "geugeot" },
          { text: "저것", audioSuffix: "jeogeot" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu nào đúng về vật ở xa cả người nói và người nghe?",
        correctOption: {
          text: "저것은 책이에요",
          audioSuffix: "jeogeoseun_chaegieyo",
        },
        wrongOptions: [
          { text: "이것은 책이에요", audioSuffix: "igeoseun_chaegieyo" },
          { text: "그것은 책이에요", audioSuffix: "geugeoseun_chaegieyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ chỉ 'cái túi'.",
        correctOption: {
          text: "가방",
          audioSuffix: "gabang",
        },
        wrongOptions: [
          { text: "지갑", audioSuffix: "jigap" },
          { text: "열쇠", audioSuffix: "yeolsoe" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ chỉ 'chìa khóa'.",
        correctOption: {
          text: "열쇠",
          audioSuffix: "yeolsoe",
        },
        wrongOptions: [
          { text: "휴대폰", audioSuffix: "hyudaepon" },
          { text: "지갑", audioSuffix: "jigap" },
        ],
      },
      {
        type: "SELECT",
        question: "Cách nói 'cái ví' trong tiếng Hàn là?",
        correctOption: {
          text: "지갑",
          audioSuffix: "jigap",
        },
        wrongOptions: [
          { text: "가방", audioSuffix: "gabang" },
          { text: "열쇠", audioSuffix: "yeolsoe" },
        ],
      },
      {
        type: "SELECT",
        question: "Cách nói 'điện thoại di động' trong tiếng Hàn là?",
        correctOption: {
          text: "휴대폰",
          audioSuffix: "hyudaepon",
        },
        wrongOptions: [
          { text: "컴퓨터", audioSuffix: "keompyuteo" },
          { text: "지갑", audioSuffix: "jigap" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ chỉ 'cái cửa sổ'.",
        correctOption: {
          text: "창문",
          audioSuffix: "changmun",
        },
        wrongOptions: [
          { text: "문", audioSuffix: "mun" },
          { text: "책상", audioSuffix: "chaeksang" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ chỉ 'cái cửa'.",
        correctOption: {
          text: "문",
          audioSuffix: "mun",
        },
        wrongOptions: [
          { text: "창문", audioSuffix: "changmun" },
          { text: "의자", audioSuffix: "uija" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ 'vở ghi' trong tiếng Hàn là gì?",
        correctOption: {
          text: "공책",
          audioSuffix: "gongchaek",
        },
        wrongOptions: [
          { text: "책", audioSuffix: "chaek" },
          { text: "연필", audioSuffix: "yeonpil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ 'cục tẩy' trong tiếng Hàn là gì?",
        correctOption: {
          text: "지우개",
          audioSuffix: "jiugae",
        },
        wrongOptions: [
          { text: "연필", audioSuffix: "yeonpil" },
          { text: "펜", audioSuffix: "pen" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu phù hợp với hình ảnh 'bàn gần bạn'.",
        correctOption: {
          text: "그 책상은 뭐예요?",
          audioSuffix: "geu_chaeksangeun_mwoyeyo",
        },
        wrongOptions: [
          { text: "이 책상은 뭐예요?", audioSuffix: "i_chaeksangeun_mwoyeyo" },
          {
            text: "저 책상은 뭐예요?",
            audioSuffix: "jeo_chaeksangeun_mwoyeyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ chỉ 'bút chì'.",
        correctOption: {
          text: "연필",
          audioSuffix: "yeonpil",
        },
        wrongOptions: [
          { text: "펜", audioSuffix: "pen" },
          { text: "지우개", audioSuffix: "jiugae" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ 'máy tính' trong tiếng Hàn là gì?",
        correctOption: {
          text: "컴퓨터",
          audioSuffix: "keompyuteo",
        },
        wrongOptions: [
          { text: "휴대폰", audioSuffix: "hyudaepon" },
          { text: "텔레비전", audioSuffix: "tellebijeon" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ 'tivi' trong tiếng Hàn là gì?",
        correctOption: {
          text: "텔레비전",
          audioSuffix: "tellebijeon",
        },
        wrongOptions: [
          { text: "컴퓨터", audioSuffix: "keompyuteo" },
          { text: "휴대폰", audioSuffix: "hyudaepon" },
        ],
      },
      {
        type: "SELECT",
        question: "Bạn thêm trợ từ nào vào '의자'?",
        correctOption: {
          text: "가",
          audioSuffix: "ga",
        },
        wrongOptions: [
          { text: "이", audioSuffix: "i" },
          { text: "를", audioSuffix: "reul" },
        ],
      },
      {
        type: "SELECT",
        question: "Bạn thêm trợ từ nào vào '책상'?",
        correctOption: {
          text: "이",
          audioSuffix: "i",
        },
        wrongOptions: [
          { text: "가", audioSuffix: "ga" },
          { text: "을", audioSuffix: "eul" },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson4;
