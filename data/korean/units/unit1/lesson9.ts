// units/unit1/lesson9.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson9: Lesson = {
  title: "Ngoại hình và Tính cách",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Từ '키가 크다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "키가 크다",
          audioSuffix: "kiga_keuda",
        },
        wrongOptions: [
          { text: "키가 작다", audioSuffix: "kiga_jakda" },
          { text: "뚱뚱하다", audioSuffix: "ttungttunghada" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '마르다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "마르다",
          audioSuffix: "mareuda",
        },
        wrongOptions: [
          { text: "뚱뚱하다", audioSuffix: "ttungttunghada" },
          { text: "통통하다", audioSuffix: "tongtonghada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách mô tả 'Anh ấy rất cao.'",
        correctOption: {
          text: "그는 키가 아주 커요.",
          audioSuffix: "geuneun_kiga_aju_keoyo",
        },
        wrongOptions: [
          {
            text: "그는 키가 아주 작아요.",
            audioSuffix: "geuneun_kiga_aju_jagayo",
          },
          {
            text: "그는 머리가 아주 길어요.",
            audioSuffix: "geuneun_meoriga_aju_gireoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '뚱뚱하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "뚱뚱하다",
          audioSuffix: "ttungttunghada",
        },
        wrongOptions: [
          { text: "마르다", audioSuffix: "mareuda" },
          { text: "날씬하다", audioSuffix: "nalssinhada" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '날씬하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "날씬하다",
          audioSuffix: "nalssinhada",
        },
        wrongOptions: [
          { text: "뚱뚱하다", audioSuffix: "ttungttunghada" },
          { text: "키가 크다", audioSuffix: "kiga_keuda" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cô ấy gầy hơn tôi.'",
        correctOption: {
          text: "그녀는 저보다 마른 편이에요.",
          audioSuffix: "geunyeoneun_jeoboda_mareun_pyeonieyo",
        },
        wrongOptions: [
          {
            text: "그녀는 저보다 뚱뚱해요.",
            audioSuffix: "geunyeoneun_jeoboda_ttungttunghaeyo",
          },
          {
            text: "그녀는 저보다 키가 커요.",
            audioSuffix: "geunyeoneun_jeoboda_kiga_keoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '친절하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "친절하다",
          audioSuffix: "chinjeolhada",
        },
        wrongOptions: [
          { text: "불친절하다", audioSuffix: "bulchinjeolhada" },
          { text: "활발하다", audioSuffix: "hwalbalhada" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '활발하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "활발하다",
          audioSuffix: "hwalbalhada",
        },
        wrongOptions: [
          { text: "조용하다", audioSuffix: "joyonghada" },
          { text: "소심하다", audioSuffix: "sosimhada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Bạn tôi rất hoạt bát.'",
        correctOption: {
          text: "제 친구는 아주 활발해요.",
          audioSuffix: "je_chinguneun_aju_hwalbalhaeyo",
        },
        wrongOptions: [
          {
            text: "제 친구는 아주 조용해요.",
            audioSuffix: "je_chinguneun_aju_joyonghaeyo",
          },
          {
            text: "제 친구는 아주 소심해요.",
            audioSuffix: "je_chinguneun_aju_sosimhaeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '똑똑하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "똑똑하다",
          audioSuffix: "ttokttokada",
        },
        wrongOptions: [
          { text: "바보같다", audioSuffix: "babogatta" },
          { text: "게으르다", audioSuffix: "geeureda" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '부지런하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "부지런하다",
          audioSuffix: "bujireonhada",
        },
        wrongOptions: [
          { text: "게으르다", audioSuffix: "geeureda" },
          { text: "소심하다", audioSuffix: "sosimhada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Chị tôi thông minh hơn tôi.'",
        correctOption: {
          text: "제 누나는 저보다 더 똑똑해요.",
          audioSuffix: "je_nunaneun_jeoboda_deo_ttokttokaeyo",
        },
        wrongOptions: [
          {
            text: "제 누나는 저보다 덜 똑똑해요.",
            audioSuffix: "je_nunaneun_jeoboda_deol_ttokttokaeyo",
          },
          {
            text: "제 누나는 저보다 더 부지런해요.",
            audioSuffix: "je_nunaneun_jeoboda_deo_bujireonhaeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '빨간색' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "빨간색",
          audioSuffix: "ppalgansaek",
        },
        wrongOptions: [
          { text: "파란색", audioSuffix: "paransaek" },
          { text: "노란색", audioSuffix: "noransaek" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '파란색' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "파란색",
          audioSuffix: "paransaek",
        },
        wrongOptions: [
          { text: "빨간색", audioSuffix: "ppalgansaek" },
          { text: "검은색", audioSuffix: "geomeunsaek" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '노란색' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "노란색",
          audioSuffix: "noransaek",
        },
        wrongOptions: [
          { text: "파란색", audioSuffix: "paransaek" },
          { text: "흰색", audioSuffix: "huinsaek" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi thích màu xanh lá cây.'",
        correctOption: {
          text: "저는 초록색을 좋아해요.",
          audioSuffix: "jeoneun_choroksaegeul_joahaeyo",
        },
        wrongOptions: [
          {
            text: "저는 빨간색을 좋아해요.",
            audioSuffix: "jeoneun_ppalgansaegeul_joahaeyo",
          },
          {
            text: "저는 파란색을 좋아해요.",
            audioSuffix: "jeoneun_paransaegeul_joahaeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '셔츠' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "셔츠",
          audioSuffix: "syeocheu",
        },
        wrongOptions: [
          { text: "바지", audioSuffix: "baji" },
          { text: "치마", audioSuffix: "chima" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '바지' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "바지",
          audioSuffix: "baji",
        },
        wrongOptions: [
          { text: "셔츠", audioSuffix: "syeocheu" },
          { text: "치마", audioSuffix: "chima" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '치마' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "치마",
          audioSuffix: "chima",
        },
        wrongOptions: [
          { text: "바지", audioSuffix: "baji" },
          { text: "셔츠", audioSuffix: "syeocheu" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Áo sơ mi màu xanh rất đẹp.'",
        correctOption: {
          text: "파란색 셔츠가 아주 예뻐요.",
          audioSuffix: "paransaek_syeocheuga_aju_yeppeeoyo",
        },
        wrongOptions: [
          {
            text: "빨간색 셔츠가 아주 예뻐요.",
            audioSuffix: "ppalgansaek_syeocheuga_aju_yeppeeoyo",
          },
          {
            text: "파란색 바지가 아주 예뻐요.",
            audioSuffix: "paransaek_bajiga_aju_yeppeeoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '안경' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "안경",
          audioSuffix: "angyeong",
        },
        wrongOptions: [
          { text: "모자", audioSuffix: "moja" },
          { text: "신발", audioSuffix: "sinbal" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '모자' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "모자",
          audioSuffix: "moja",
        },
        wrongOptions: [
          { text: "안경", audioSuffix: "angyeong" },
          { text: "장갑", audioSuffix: "janggap" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn câu 'Tôi đang tìm đôi giày màu đen.'",
        correctOption: {
          text: "저는 검은색 신발을 찾고 있어요.",
          audioSuffix: "jeoneun_geomeunsaek_sinbareul_chatgo_isseoyo",
        },
        wrongOptions: [
          {
            text: "저는 흰색 신발을 찾고 있어요.",
            audioSuffix: "jeoneun_huinsaek_sinbareul_chatgo_isseoyo",
          },
          {
            text: "저는 검은색 모자를 찾고 있어요.",
            audioSuffix: "jeoneun_geomeunsaek_mojareur_chatgo_isseoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '조용하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "조용하다",
          audioSuffix: "joyonghada",
        },
        wrongOptions: [
          { text: "시끄럽다", audioSuffix: "sikkeureobda" },
          { text: "활발하다", audioSuffix: "hwalbalhada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Em gái tôi dễ thương hơn tôi.'",
        correctOption: {
          text: "제 여동생은 저보다 더 귀여워요.",
          audioSuffix: "je_yeodongsaengeun_jeoboda_deo_gwiyeowoyo",
        },
        wrongOptions: [
          {
            text: "제 여동생은 저보다 덜 귀여워요.",
            audioSuffix: "je_yeodongsaengeun_jeoboda_deol_gwiyeowoyo",
          },
          {
            text: "제 오빠는 저보다 더 귀여워요.",
            audioSuffix: "je_oppaneun_jeoboda_deo_gwiyeowoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '머리카락' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "머리카락",
          audioSuffix: "meorikarak",
        },
        wrongOptions: [
          { text: "눈썹", audioSuffix: "nunsseop" },
          { text: "수염", audioSuffix: "suyeom" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cô ấy có mái tóc dài và đen.'",
        correctOption: {
          text: "그녀는 긴 검은 머리카락이 있어요.",
          audioSuffix: "geunyeoneun_gin_geomeun_meorikaragi_isseoyo",
        },
        wrongOptions: [
          {
            text: "그녀는 짧은 검은 머리카락이 있어요.",
            audioSuffix: "geunyeoneun_jjalbeun_geomeun_meorikaragi_isseoyo",
          },
          {
            text: "그녀는 긴 갈색 머리카락이 있어요.",
            audioSuffix: "geunyeoneun_gin_galsaek_meorikaragi_isseoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '예쁘다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "예쁘다",
          audioSuffix: "yeppeuda",
        },
        wrongOptions: [
          { text: "못생기다", audioSuffix: "motsaenggida" },
          { text: "키가 크다", audioSuffix: "kiga_keuda" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cô ấy mặc váy màu đỏ.'",
        correctOption: {
          text: "그녀는 빨간색 치마를 입고 있어요.",
          audioSuffix: "geunyeoneun_ppalgansaek_chimareul_ipgo_isseoyo",
        },
        wrongOptions: [
          {
            text: "그녀는 빨간색 바지를 입고 있어요.",
            audioSuffix: "geunyeoneun_ppalgansaek_bajireul_ipgo_isseoyo",
          },
          {
            text: "그녀는 파란색 치마를 입고 있어요.",
            audioSuffix: "geunyeoneun_paransaek_chimareul_ipgo_isseoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '귀엽다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "귀엽다",
          audioSuffix: "gwiyeopda",
        },
        wrongOptions: [
          { text: "무섭다", audioSuffix: "museopda" },
          { text: "섹시하다", audioSuffix: "seksihada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách hỏi 'Chiếc áo khoác này có màu gì?'",
        correctOption: {
          text: "이 재킷은 무슨 색이에요?",
          audioSuffix: "i_jaekiseun_museun_saegieyo",
        },
        wrongOptions: [
          {
            text: "이 셔츠는 무슨 색이에요?",
            audioSuffix: "i_syeocheuneun_museun_saegieyo",
          },
          { text: "이 재킷은 얼마예요?", audioSuffix: "i_jaekiseun_eolmayeyo" },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson9;
