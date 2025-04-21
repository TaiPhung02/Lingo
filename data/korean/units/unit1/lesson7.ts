// units/unit1/lesson7.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson7: Lesson = {
  title: "Thời gian và Lịch",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Từ '월요일' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "월요일",
          audioSuffix: "woryoil",
        },
        wrongOptions: [
          { text: "화요일", audioSuffix: "hwayoil" },
          { text: "금요일", audioSuffix: "geumyoil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '화요일' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "화요일",
          audioSuffix: "hwayoil",
        },
        wrongOptions: [
          { text: "수요일", audioSuffix: "suyoil" },
          { text: "월요일", audioSuffix: "woryoil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '수요일' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "수요일",
          audioSuffix: "suyoil",
        },
        wrongOptions: [
          { text: "목요일", audioSuffix: "mogyoil" },
          { text: "화요일", audioSuffix: "hwayoil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '목요일' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "목요일",
          audioSuffix: "mogyoil",
        },
        wrongOptions: [
          { text: "수요일", audioSuffix: "suyoil" },
          { text: "금요일", audioSuffix: "geumyoil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '금요일' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "금요일",
          audioSuffix: "geumyoil",
        },
        wrongOptions: [
          { text: "목요일", audioSuffix: "mogyoil" },
          { text: "토요일", audioSuffix: "toyoil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '토요일' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "토요일",
          audioSuffix: "toyoil",
        },
        wrongOptions: [
          { text: "금요일", audioSuffix: "geumyoil" },
          { text: "일요일", audioSuffix: "iryoil" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '일요일' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "일요일",
          audioSuffix: "iryoil",
        },
        wrongOptions: [
          { text: "토요일", audioSuffix: "toyoil" },
          { text: "월요일", audioSuffix: "woryoil" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách hỏi 'Mấy giờ rồi?' trong tiếng Hàn.",
        correctOption: {
          text: "몇 시예요?",
          audioSuffix: "myeot_siyeyo",
        },
        wrongOptions: [
          {
            text: "지금 몇 시간이에요?",
            audioSuffix: "jigeum_myeot_siganieyo",
          },
          {
            text: "시간이 어떻게 돼요?",
            audioSuffix: "sigani_eotteoke_dwaeyo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Bây giờ là 2 giờ.'",
        correctOption: {
          text: "지금 두 시예요.",
          audioSuffix: "jigeum_du_siyeyo",
        },
        wrongOptions: [
          { text: "지금 세 시예요.", audioSuffix: "jigeum_se_siyeyo" },
          { text: "지금 한 시예요.", audioSuffix: "jigeum_han_siyeyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '1월' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "1월",
          audioSuffix: "irwol",
        },
        wrongOptions: [
          { text: "2월", audioSuffix: "iwol" },
          { text: "3월", audioSuffix: "samwol" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '봄' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "봄",
          audioSuffix: "bom",
        },
        wrongOptions: [
          { text: "여름", audioSuffix: "yeoreum" },
          { text: "가을", audioSuffix: "gaeul" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '여름' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "여름",
          audioSuffix: "yeoreum",
        },
        wrongOptions: [
          { text: "봄", audioSuffix: "bom" },
          { text: "겨울", audioSuffix: "gyeoul" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '가을' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "가을",
          audioSuffix: "gaeul",
        },
        wrongOptions: [
          { text: "여름", audioSuffix: "yeoreum" },
          { text: "겨울", audioSuffix: "gyeoul" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '겨울' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "겨울",
          audioSuffix: "gyeoul",
        },
        wrongOptions: [
          { text: "봄", audioSuffix: "bom" },
          { text: "가을", audioSuffix: "gaeul" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Hôm nay là thứ mấy?'",
        correctOption: {
          text: "오늘은 무슨 요일이에요?",
          audioSuffix: "oneureun_museun_yoirieyo",
        },
        wrongOptions: [
          {
            text: "내일은 무슨 요일이에요?",
            audioSuffix: "naeireun_museun_yoirieyo",
          },
          { text: "오늘은 며칠이에요?", audioSuffix: "oneureun_myeochirieyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Vào mùa hè, trời rất nóng.'",
        correctOption: {
          text: "여름에는 날씨가 아주 더워요.",
          audioSuffix: "yeoreumeneun_nalssiga_aju_deoweoyo",
        },
        wrongOptions: [
          {
            text: "겨울에는 날씨가 아주 추워요.",
            audioSuffix: "gyeoureeneun_nalssiga_aju_chuwoyo",
          },
          {
            text: "여름에는 비가 많이 와요.",
            audioSuffix: "yeoreumeneun_biga_mani_wayo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Trợ từ nào được dùng để chỉ thời gian trong tiếng Hàn?",
        correctOption: {
          text: "에",
          audioSuffix: "e",
        },
        wrongOptions: [
          { text: "를", audioSuffix: "reul" },
          { text: "에서", audioSuffix: "eseo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '오전' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "오전",
          audioSuffix: "ojeon",
        },
        wrongOptions: [
          { text: "오후", audioSuffix: "ohu" },
          { text: "저녁", audioSuffix: "jeonyeok" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '오후' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "오후",
          audioSuffix: "ohu",
        },
        wrongOptions: [
          { text: "오전", audioSuffix: "ojeon" },
          { text: "아침", audioSuffix: "achim" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Thứ hai tôi đi học.'",
        correctOption: {
          text: "월요일에 학교에 가요.",
          audioSuffix: "woryoire_hakgyoe_gayo",
        },
        wrongOptions: [
          {
            text: "월요일에 회사에 가요.",
            audioSuffix: "woryoire_hoesae_gayo",
          },
          {
            text: "화요일에 학교에 가요.",
            audioSuffix: "hwayoire_hakgyoe_gayo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Mấy giờ bạn ăn trưa?'",
        correctOption: {
          text: "몇 시에 점심을 먹어요?",
          audioSuffix: "myeot_sie_jeongsimeul_meogeoyo",
        },
        wrongOptions: [
          {
            text: "몇 시에 저녁을 먹어요?",
            audioSuffix: "myeot_sie_jeonyeogeul_meogeoyo",
          },
          {
            text: "몇 시에 아침을 먹어요?",
            audioSuffix: "myeot_sie_achimeul_meogeoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '아침' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "아침",
          audioSuffix: "achim",
        },
        wrongOptions: [
          { text: "점심", audioSuffix: "jeongsim" },
          { text: "저녁", audioSuffix: "jeonyeok" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '점심' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "점심",
          audioSuffix: "jeongsim",
        },
        wrongOptions: [
          { text: "아침", audioSuffix: "achim" },
          { text: "저녁", audioSuffix: "jeonyeok" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '저녁' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "저녁",
          audioSuffix: "jeonyeok",
        },
        wrongOptions: [
          { text: "아침", audioSuffix: "achim" },
          { text: "점심", audioSuffix: "jeongsim" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói '3 giờ 30 phút.'",
        correctOption: {
          text: "세 시 삼십 분이에요.",
          audioSuffix: "se_si_samsip_bunieyo",
        },
        wrongOptions: [
          { text: "네 시 삼십 분이에요.", audioSuffix: "ne_si_samsip_bunieyo" },
          { text: "세 시 십오 분이에요.", audioSuffix: "se_si_sibo_bunieyo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tháng 4 là mùa xuân.'",
        correctOption: {
          text: "4월은 봄이에요.",
          audioSuffix: "sawoireun_bomieyo",
        },
        wrongOptions: [
          { text: "4월은 여름이에요.", audioSuffix: "sawoireun_yeoreumieyo" },
          { text: "5월은 봄이에요.", audioSuffix: "owoireun_bomieyo" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '분' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "분",
          audioSuffix: "bun",
        },
        wrongOptions: [
          { text: "시", audioSuffix: "si" },
          { text: "초", audioSuffix: "cho" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '시간' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "시간",
          audioSuffix: "sigan",
        },
        wrongOptions: [
          { text: "분", audioSuffix: "bun" },
          { text: "날짜", audioSuffix: "naljja" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Cuối tuần bạn làm gì?'",
        correctOption: {
          text: "주말에 뭐 해요?",
          audioSuffix: "jumare_mwo_haeyo",
        },
        wrongOptions: [
          { text: "주말에 어디에 가요?", audioSuffix: "jumare_eodie_gayo" },
          {
            text: "주말에 누구를 만나요?",
            audioSuffix: "jumare_nugurul_mannayo",
          },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi có hẹn vào thứ sáu.'",
        correctOption: {
          text: "금요일에 약속이 있어요.",
          audioSuffix: "geumyoire_yakssogi_isseoyo",
        },
        wrongOptions: [
          {
            text: "목요일에 약속이 있어요.",
            audioSuffix: "mogyoire_yakssogi_isseoyo",
          },
          {
            text: "금요일에 시간이 없어요.",
            audioSuffix: "geumyoire_sigani_eopsseoyo",
          },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson7;
