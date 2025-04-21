// units/unit1/lesson8.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson8: Lesson = {
  title: "Thực phẩm và Nhà hàng",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Từ '밥' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "밥",
          audioSuffix: "bap",
        },
        wrongOptions: [
          { text: "국", audioSuffix: "guk" },
          { text: "면", audioSuffix: "myeon" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '김치' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "김치",
          audioSuffix: "gimchi",
        },
        wrongOptions: [
          { text: "비빔밥", audioSuffix: "bibimbap" },
          { text: "떡볶이", audioSuffix: "tteokbokki" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Bạn muốn ăn gì?'",
        correctOption: {
          text: "뭐 먹고 싶어요?",
          audioSuffix: "mwo_meokgo_sipeoyo",
        },
        wrongOptions: [
          { text: "뭐 마시고 싶어요?", audioSuffix: "mwo_masigo_sipeoyo" },
          { text: "언제 먹고 싶어요?", audioSuffix: "eonje_meokgo_sipeoyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '맛있어요' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "맛있어요",
          audioSuffix: "masisseoyo",
        },
        wrongOptions: [
          { text: "맛없어요", audioSuffix: "maseopseoyo" },
          { text: "매워요", audioSuffix: "maewoyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Món này cay quá!'",
        correctOption: {
          text: "이 음식은 너무 매워요!",
          audioSuffix: "i_eumsigeun_neomu_maewoyo",
        },
        wrongOptions: [
          {
            text: "이 음식은 너무 짜요!",
            audioSuffix: "i_eumsigeun_neomu_jjayo",
          },
          {
            text: "이 음식은 너무 달아요!",
            audioSuffix: "i_eumsigeun_neomu_darayo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '물' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "물",
          audioSuffix: "mul",
        },
        wrongOptions: [
          { text: "주스", audioSuffix: "juseu" },
          { text: "커피", audioSuffix: "keopi" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi thích món Hàn Quốc.'",
        correctOption: {
          text: "저는 한국 음식을 좋아해요.",
          audioSuffix: "jeoneun_hanguk_eumsigeul_joahaeyo",
        },
        wrongOptions: [
          {
            text: "저는 한국 음식을 싫어해요.",
            audioSuffix: "jeoneun_hanguk_eumsigeul_silheohaeyo",
          },
          {
            text: "저는 일본 음식을 좋아해요.",
            audioSuffix: "jeoneun_ilbon_eumsigeul_joahaeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '싫어해요' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "싫어해요",
          audioSuffix: "silheohaeyo",
        },
        wrongOptions: [
          { text: "좋아해요", audioSuffix: "joahaeyo" },
          { text: "괜찮아요", audioSuffix: "gwaenchanayo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Món này bao nhiêu tiền?'",
        correctOption: {
          text: "이것은 얼마예요?",
          audioSuffix: "igeoson_eolmayeyo",
        },
        wrongOptions: [
          {
            text: "이것은 어떻게 먹어요?",
            audioSuffix: "igeoson_eotteoke_meogeoyo",
          },
          { text: "이것은 무엇이에요?", audioSuffix: "igeoson_mueosieyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '비빔밥' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "비빔밥",
          audioSuffix: "bibimbap",
        },
        wrongOptions: [
          { text: "불고기", audioSuffix: "bulgogi" },
          { text: "김밥", audioSuffix: "gimbap" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '불고기' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "불고기",
          audioSuffix: "bulgogi",
        },
        wrongOptions: [
          { text: "비빔밥", audioSuffix: "bibimbap" },
          { text: "떡볶이", audioSuffix: "tteokbokki" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi muốn uống nước.'",
        correctOption: {
          text: "물 마시고 싶어요.",
          audioSuffix: "mul_masigo_sipeoyo",
        },
        wrongOptions: [
          { text: "커피 마시고 싶어요.", audioSuffix: "keopi_masigo_sipeoyo" },
          { text: "물 먹고 싶어요.", audioSuffix: "mul_meokgo_sipeoyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '매워요' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "매워요",
          audioSuffix: "maewoyo",
        },
        wrongOptions: [
          { text: "짜요", audioSuffix: "jjayo" },
          { text: "달아요", audioSuffix: "darayo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '달아요' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "달아요",
          audioSuffix: "darayo",
        },
        wrongOptions: [
          { text: "매워요", audioSuffix: "maewoyo" },
          { text: "짜요", audioSuffix: "jjayo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '짜요' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "짜요",
          audioSuffix: "jjayo",
        },
        wrongOptions: [
          { text: "달아요", audioSuffix: "darayo" },
          { text: "매워요", audioSuffix: "maewoyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cho tôi thực đơn.'",
        correctOption: {
          text: "메뉴 주세요.",
          audioSuffix: "menyu_juseyo",
        },
        wrongOptions: [
          { text: "계산서 주세요.", audioSuffix: "gyesanseo_juseyo" },
          { text: "물 주세요.", audioSuffix: "mul_juseyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Món này ngon quá!'",
        correctOption: {
          text: "이 음식이 정말 맛있어요!",
          audioSuffix: "i_eumsigi_jeongmal_masisseoyo",
        },
        wrongOptions: [
          {
            text: "이 음식이 정말 맛없어요!",
            audioSuffix: "i_eumsigi_jeongmal_maseopseoyo",
          },
          {
            text: "이 음식이 정말 비싸요!",
            audioSuffix: "i_eumsigi_jeongmal_bissayo",
          },
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
          { text: "카페", audioSuffix: "kape" },
          { text: "마트", audioSuffix: "mateu" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi muốn đặt món này.'",
        correctOption: {
          text: "이것을 주문하고 싶어요.",
          audioSuffix: "igeoseul_jumunhago_sipeoyo",
        },
        wrongOptions: [
          {
            text: "이것을 추천해 주세요.",
            audioSuffix: "igeoseul_chucheonhae_juseyo",
          },
          {
            text: "이것을 만들고 싶어요.",
            audioSuffix: "igeoseul_mandeulgo_sipeoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '수저' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "수저",
          audioSuffix: "sujeo",
        },
        wrongOptions: [
          { text: "젓가락", audioSuffix: "jeotgarak" },
          { text: "포크", audioSuffix: "pokeu" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cho tôi tính tiền.'",
        correctOption: {
          text: "계산해 주세요.",
          audioSuffix: "gyesanhae_juseyo",
        },
        wrongOptions: [
          { text: "메뉴 주세요.", audioSuffix: "menyu_juseyo" },
          { text: "물 주세요.", audioSuffix: "mul_juseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '떡볶이' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "떡볶이",
          audioSuffix: "tteokbokki",
        },
        wrongOptions: [
          { text: "김밥", audioSuffix: "gimbap" },
          { text: "삼겹살", audioSuffix: "samgyeopsal" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '삼겹살' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "삼겹살",
          audioSuffix: "samgyeopsal",
        },
        wrongOptions: [
          { text: "떡볶이", audioSuffix: "tteokbokki" },
          { text: "김밥", audioSuffix: "gimbap" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Ở đây có món chay không?'",
        correctOption: {
          text: "여기에 채식 메뉴가 있어요?",
          audioSuffix: "yeogie_chaesik_menyuga_isseoyo",
        },
        wrongOptions: [
          {
            text: "여기에 매운 음식이 있어요?",
            audioSuffix: "yeogie_maeun_eumsigi_isseoyo",
          },
          {
            text: "여기에 한국 음식이 있어요?",
            audioSuffix: "yeogie_hanguk_eumsigi_isseoyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi không ăn được đồ cay.'",
        correctOption: {
          text: "저는 매운 음식을 못 먹어요.",
          audioSuffix: "jeoneun_maeun_eumsigeul_mot_meogeoyo",
        },
        wrongOptions: [
          {
            text: "저는 매운 음식을 좋아해요.",
            audioSuffix: "jeoneun_maeun_eumsigeul_joahaeyo",
          },
          {
            text: "저는 단 음식을 못 먹어요.",
            audioSuffix: "jeoneun_dan_eumsigeul_mot_meogeoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '주문하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "주문하다",
          audioSuffix: "jumunhada",
        },
        wrongOptions: [
          { text: "계산하다", audioSuffix: "gyesanhada" },
          { text: "추천하다", audioSuffix: "chucheonhada" },
        ],
      },
      {
        type: "ASSIST",
        question:
          "Nghe và chọn cách nói 'Bạn có đề xuất món đặc biệt nào không?'",
        correctOption: {
          text: "특별한 메뉴를 추천해 주세요.",
          audioSuffix: "teukbyeolhan_menyureul_chucheonhae_juseyo",
        },
        wrongOptions: [
          {
            text: "가장 인기 있는 메뉴가 뭐예요?",
            audioSuffix: "gajang_ingi_inneun_menyuga_mwoyeyo",
          },
          { text: "매운 음식이 있어요?", audioSuffix: "maeun_eumsigi_isseoyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '공기밥' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "공기밥",
          audioSuffix: "gonggibap",
        },
        wrongOptions: [
          { text: "볶음밥", audioSuffix: "bokkeumbap" },
          { text: "김밥", audioSuffix: "gimbap" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Xin thêm cơm.'",
        correctOption: {
          text: "밥 더 주세요.",
          audioSuffix: "bap_deo_juseyo",
        },
        wrongOptions: [
          { text: "물 더 주세요.", audioSuffix: "mul_deo_juseyo" },
          { text: "반찬 더 주세요.", audioSuffix: "banchan_deo_juseyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '반찬' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "반찬",
          audioSuffix: "banchan",
        },
        wrongOptions: [
          { text: "국", audioSuffix: "guk" },
          { text: "밥", audioSuffix: "bap" },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson8;
