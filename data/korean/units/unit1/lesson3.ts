// units/unit1/lesson3.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson3: Lesson = {
  title: "Hỏi thăm và Câu nói lịch sự",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Câu hỏi 'Bạn khỏe không?' trong tiếng Hàn là gì?",
        correctOption: {
          text: "어떻게 지내세요?",
          audioSuffix: "eotteoke_jinaeseyo",
        },
        wrongOptions: [
          { text: "안녕하세요", audioSuffix: "annyeonghaseyo" },
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu 'Cảm ơn' trong tiếng Hàn là gì?",
        correctOption: {
          text: "감사합니다",
          audioSuffix: "gamsahamnida",
        },
        wrongOptions: [
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
          { text: "천만에요", audioSuffix: "cheonmaneyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu 'Xin lỗi' trong tiếng Hàn là gì?",
        correctOption: {
          text: "죄송합니다",
          audioSuffix: "joesonghamnida",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "안녕하세요", audioSuffix: "annyeonghaseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu 'Không có gì' trong tiếng Hàn là gì?",
        correctOption: {
          text: "천만에요",
          audioSuffix: "cheonmaneyo",
        },
        wrongOptions: [
          { text: "네", audioSuffix: "ne" },
          { text: "아니요", audioSuffix: "aniyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Chọn từ đúng cho 'Vâng'",
        correctOption: {
          text: "네",
          audioSuffix: "ne",
        },
        wrongOptions: [
          { text: "아니요", audioSuffix: "aniyo" },
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
        ],
      },
      {
        type: "SELECT",
        question: "Chọn từ đúng cho 'Không'",
        correctOption: {
          text: "아니요",
          audioSuffix: "aniyo",
        },
        wrongOptions: [
          { text: "네", audioSuffix: "ne" },
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu nói thể hiện lời cảm ơn.",
        correctOption: {
          text: "감사합니다",
          audioSuffix: "gamsahamnida",
        },
        wrongOptions: [
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
          { text: "천만에요", audioSuffix: "cheonmaneyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu nói lịch sự để hỏi thăm sức khỏe.",
        correctOption: {
          text: "어떻게 지내세요?",
          audioSuffix: "eotteoke_jinaeseyo",
        },
        wrongOptions: [
          { text: "안녕히 계세요", audioSuffix: "annyeonghi_gyeseyo" },
          { text: "안녕하세요", audioSuffix: "annyeonghaseyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu thể hiện sự xin lỗi.",
        correctOption: {
          text: "죄송합니다",
          audioSuffix: "joesonghamnida",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "네", audioSuffix: "ne" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu trả lời cho lời cảm ơn.",
        correctOption: {
          text: "천만에요",
          audioSuffix: "cheonmaneyo",
        },
        wrongOptions: [
          { text: "네", audioSuffix: "ne" },
          { text: "안녕히 가세요", audioSuffix: "annyeonghi_gaseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Nếu ai đó nói '감사합니다', bạn sẽ trả lời?",
        correctOption: {
          text: "천만에요",
          audioSuffix: "cheonmaneyo",
        },
        wrongOptions: [
          { text: "아니요", audioSuffix: "aniyo" },
          { text: "어떻게 지내세요?", audioSuffix: "eotteoke_jinaeseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu nào dưới đây KHÔNG phải là lời cảm ơn?",
        correctOption: {
          text: "죄송합니다",
          audioSuffix: "joesonghamnida",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "고맙습니다", audioSuffix: "gomapseumnida" },
        ],
      },
      {
        type: "SELECT",
        question: "Bạn nên nói gì khi gây ra lỗi?",
        correctOption: {
          text: "죄송합니다",
          audioSuffix: "joesonghamnida",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "어떻게 지내세요?", audioSuffix: "eotteoke_jinaeseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu trả lời lịch sự cho 'Bạn khỏe không?' là?",
        correctOption: {
          text: "네, 잘 지내요",
          audioSuffix: "ne_jal_jinaeyo",
        },
        wrongOptions: [
          { text: "안녕하세요", audioSuffix: "annyeonghaseyo" },
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu nào là 'Xin lỗi' trang trọng nhất?",
        correctOption: {
          text: "죄송합니다",
          audioSuffix: "joesonghamnida",
        },
        wrongOptions: [
          { text: "미안해요", audioSuffix: "mianhaeyo" },
          { text: "미안해", audioSuffix: "mianhae" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn nghĩa của '네'",
        correctOption: {
          text: "Vâng/Đúng vậy",
          audioSuffix: "ne",
        },
        wrongOptions: [
          { text: "Không", audioSuffix: "aniyo" },
          { text: "Xin lỗi", audioSuffix: "joesonghamnida" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn nghĩa của '아니요'",
        correctOption: {
          text: "Không",
          audioSuffix: "aniyo",
        },
        wrongOptions: [
          { text: "Vâng", audioSuffix: "ne" },
          { text: "Cảm ơn", audioSuffix: "gamsahamnida" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu đáp lại khi được cảm ơn.",
        correctOption: {
          text: "천만에요",
          audioSuffix: "cheonmaneyo",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn lời hỏi thăm sức khỏe.",
        correctOption: {
          text: "어떻게 지내세요?",
          audioSuffix: "eotteoke_jinaeseyo",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "안녕하세요", audioSuffix: "annyeonghaseyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn lời đáp trang trọng cho lời xin lỗi.",
        correctOption: {
          text: "괜찮습니다",
          audioSuffix: "gwaenchanseumnida",
        },
        wrongOptions: [
          { text: "천만에요", audioSuffix: "cheonmaneyo" },
          { text: "네", audioSuffix: "ne" },
        ],
      },
      {
        type: "SELECT",
        question: "Câu nào bạn dùng để bày tỏ biết ơn?",
        correctOption: {
          text: "감사합니다",
          audioSuffix: "gamsahamnida",
        },
        wrongOptions: [
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
          { text: "어떻게 지내세요?", audioSuffix: "eotteoke_jinaeseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Bạn sẽ dùng câu nào khi tạm biệt người ở lại?",
        correctOption: {
          text: "안녕히 계세요",
          audioSuffix: "annyeonghi_gyeseyo",
        },
        wrongOptions: [
          { text: "안녕히 가세요", audioSuffix: "annyeonghi_gaseyo" },
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn từ thể hiện sự lịch sự.",
        correctOption: {
          text: "감사합니다",
          audioSuffix: "gamsahamnida",
        },
        wrongOptions: [
          { text: "야!", audioSuffix: "ya" },
          { text: "뭐?", audioSuffix: "mwo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu KHÔNG phù hợp trong hoàn cảnh trang trọng.",
        correctOption: {
          text: "야!",
          audioSuffix: "ya",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
        ],
      },
      {
        type: "SELECT",
        question: "Khi nghe thấy '감사합니다', bạn nên đáp lại bằng?",
        correctOption: {
          text: "천만에요",
          audioSuffix: "cheonmaneyo",
        },
        wrongOptions: [
          { text: "네", audioSuffix: "ne" },
          { text: "어떻게 지내세요?", audioSuffix: "eotteoke_jinaeseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Bạn sẽ dùng câu nào khi tạm biệt người ra về?",
        correctOption: {
          text: "안녕히 가세요",
          audioSuffix: "annyeonghi_gaseyo",
        },
        wrongOptions: [
          { text: "안녕히 계세요", audioSuffix: "annyeonghi_gyeseyo" },
          { text: "죄송합니다", audioSuffix: "joesonghamnida" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách hỏi thăm lịch sự nhất.",
        correctOption: {
          text: "어떻게 지내십니까?",
          audioSuffix: "eotteoke_jinaeshipnikka",
        },
        wrongOptions: [
          { text: "어떻게 지내?", audioSuffix: "eotteoke_jinae" },
          { text: "어떻게 지내요?", audioSuffix: "eotteoke_jinaeyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Đâu KHÔNG phải là câu chào hỏi trong tiếng Hàn?",
        correctOption: {
          text: "감사합니다",
          audioSuffix: "gamsahamnida",
        },
        wrongOptions: [
          { text: "안녕하세요", audioSuffix: "annyeonghaseyo" },
          { text: "어떻게 지내세요?", audioSuffix: "eotteoke_jinaeseyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cảm ơn' thân mật.",
        correctOption: {
          text: "고마워",
          audioSuffix: "gomawo",
        },
        wrongOptions: [
          { text: "감사합니다", audioSuffix: "gamsahamnida" },
          { text: "고맙습니다", audioSuffix: "gomapseumnida" },
        ],
      },
      {
        type: "SELECT",
        question: "Cách nói 'Không sao đâu' sau khi ai đó xin lỗi là?",
        correctOption: {
          text: "괜찮아요",
          audioSuffix: "gwaenchanhayo",
        },
        wrongOptions: [
          { text: "천만에요", audioSuffix: "cheonmaneyo" },
          { text: "네", audioSuffix: "ne" },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson3;