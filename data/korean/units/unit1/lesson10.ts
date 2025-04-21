// units/unit1/lesson10.ts

import { createChallengesFromTemplates } from "@/lib/utils";
import { Lesson } from "@/types/courses";

const lesson10: Lesson = {
  title: "Hoạt động hàng ngày",
  challenges: createChallengesFromTemplates(
    [
      {
        type: "SELECT",
        question: "Từ '일어나다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "일어나다",
          audioSuffix: "ireonada",
        },
        wrongOptions: [
          { text: "자다", audioSuffix: "jada" },
          { text: "씻다", audioSuffix: "ssitda" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '씻다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "씻다",
          audioSuffix: "ssitda",
        },
        wrongOptions: [
          { text: "일어나다", audioSuffix: "ireonada" },
          { text: "먹다", audioSuffix: "meokda" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi thức dậy lúc 7 giờ sáng.'",
        correctOption: {
          text: "저는 아침 7시에 일어나요.",
          audioSuffix: "jeoneun_achim_ilgopsie_ireonayo",
        },
        wrongOptions: [
          {
            text: "저는 아침 8시에 일어나요.",
            audioSuffix: "jeoneun_achim_yeodeolpsie_ireonayo",
          },
          {
            text: "저는 아침 7시에 자요.",
            audioSuffix: "jeoneun_achim_ilgopsie_jayo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '아침을 먹다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "아침을 먹다",
          audioSuffix: "achimeul_meokda",
        },
        wrongOptions: [
          { text: "점심을 먹다", audioSuffix: "jeongsimeul_meokda" },
          { text: "저녁을 먹다", audioSuffix: "jeonyeogeul_meokda" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '학교에 가다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "학교에 가다",
          audioSuffix: "hakgyoe_gada",
        },
        wrongOptions: [
          { text: "회사에 가다", audioSuffix: "hoesae_gada" },
          { text: "집에 가다", audioSuffix: "jibe_gada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi đi làm bằng xe buýt.'",
        correctOption: {
          text: "저는 버스로 회사에 가요.",
          audioSuffix: "jeoneun_beoseuro_hoesae_gayo",
        },
        wrongOptions: [
          {
            text: "저는 지하철로 회사에 가요.",
            audioSuffix: "jeoneun_jihacheoro_hoesae_gayo",
          },
          {
            text: "저는 버스로 학교에 가요.",
            audioSuffix: "jeoneun_beoseuro_hakgyoe_gayo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '공부하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "공부하다",
          audioSuffix: "gongbuhada",
        },
        wrongOptions: [
          { text: "일하다", audioSuffix: "ilhada" },
          { text: "운동하다", audioSuffix: "undonghada" },
        ],
      },
      {
        type: "SELECT",
        question: "Trợ từ '-을/를' trong tiếng Hàn được dùng để làm gì?",
        correctOption: {
          text: "-을/를",
          audioSuffix: "eul_reul",
        },
        wrongOptions: [
          { text: "-이/가", audioSuffix: "i_ga" },
          { text: "-에/에서", audioSuffix: "e_eseo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi đọc sách mỗi ngày.'",
        correctOption: {
          text: "저는 매일 책을 읽어요.",
          audioSuffix: "jeoneun_maeil_chaegeul_ilgeoyo",
        },
        wrongOptions: [
          {
            text: "저는 가끔 책을 읽어요.",
            audioSuffix: "jeoneun_gakkeum_chaegeul_ilgeoyo",
          },
          {
            text: "저는 매일 신문을 읽어요.",
            audioSuffix: "jeoneun_maeil_sinmuneul_ilgeoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '자다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "자다",
          audioSuffix: "jada",
        },
        wrongOptions: [
          { text: "일어나다", audioSuffix: "ireonada" },
          { text: "씻다", audioSuffix: "ssitda" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '텔레비전을 보다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "텔레비전을 보다",
          audioSuffix: "tellebijoneul_boda",
        },
        wrongOptions: [
          { text: "라디오를 듣다", audioSuffix: "radioreul_deutda" },
          { text: "신문을 읽다", audioSuffix: "sinmuneul_ilkda" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi thường xem TV sau bữa tối.'",
        correctOption: {
          text: "저는 저녁 식사 후에 자주 텔레비전을 봐요.",
          audioSuffix: "jeoneun_jeonyeok_siksa_hue_jaju_tellebijoneul_bwayo",
        },
        wrongOptions: [
          {
            text: "저는 저녁 식사 전에 자주 텔레비전을 봐요.",
            audioSuffix:
              "jeoneun_jeonyeok_siksa_jeone_jaju_tellebijoneul_bwayo",
          },
          {
            text: "저는 저녁 식사 후에 가끔 텔레비전을 봐요.",
            audioSuffix:
              "jeoneun_jeonyeok_siksa_hue_gakkeum_tellebijoneul_bwayo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '운동하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "운동하다",
          audioSuffix: "undonghada",
        },
        wrongOptions: [
          { text: "요리하다", audioSuffix: "yorihada" },
          { text: "쇼핑하다", audioSuffix: "syopinghada" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '요리하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "요리하다",
          audioSuffix: "yorihada",
        },
        wrongOptions: [
          { text: "운동하다", audioSuffix: "undonghada" },
          { text: "청소하다", audioSuffix: "cheongsohada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi nấu ăn vào cuối tuần.'",
        correctOption: {
          text: "저는 주말에 요리해요.",
          audioSuffix: "jeoneun_jumare_yorihaeyo",
        },
        wrongOptions: [
          {
            text: "저는 평일에 요리해요.",
            audioSuffix: "jeoneun_pyeongnire_yorihaeyo",
          },
          {
            text: "저는 주말에 청소해요.",
            audioSuffix: "jeoneun_jumare_cheongsohaeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '청소하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "청소하다",
          audioSuffix: "cheongsohada",
        },
        wrongOptions: [
          { text: "요리하다", audioSuffix: "yorihada" },
          { text: "빨래하다", audioSuffix: "ppallaehada" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '자주' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "자주",
          audioSuffix: "jaju",
        },
        wrongOptions: [
          { text: "가끔", audioSuffix: "gakkeum" },
          { text: "항상", audioSuffix: "hangsang" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '가끔' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "가끔",
          audioSuffix: "gakkeum",
        },
        wrongOptions: [
          { text: "자주", audioSuffix: "jaju" },
          { text: "전혀", audioSuffix: "jeonhyeo" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Đôi khi tôi đi bơi.'",
        correctOption: {
          text: "저는 가끔 수영해요.",
          audioSuffix: "jeoneun_gakkeum_suyeonghaeyo",
        },
        wrongOptions: [
          {
            text: "저는 자주 수영해요.",
            audioSuffix: "jeoneun_jaju_suyeonghaeyo",
          },
          {
            text: "저는 가끔 테니스를 쳐요.",
            audioSuffix: "jeoneun_gakkeum_teniseureul_chyeoyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '전에' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "전에",
          audioSuffix: "jeone",
        },
        wrongOptions: [
          { text: "후에", audioSuffix: "hue" },
          { text: "동안", audioSuffix: "dongan" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '후에' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "후에",
          audioSuffix: "hue",
        },
        wrongOptions: [
          { text: "전에", audioSuffix: "jeone" },
          { text: "동안", audioSuffix: "dongan" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi tắm trước khi đi ngủ.'",
        correctOption: {
          text: "저는 자기 전에 샤워해요.",
          audioSuffix: "jeoneun_jagi_jeone_syawohaeyoyo",
        },
        wrongOptions: [
          {
            text: "저는 자기 후에 샤워해요.",
            audioSuffix: "jeoneun_jagi_hue_syawohaeyo",
          },
          {
            text: "저는 일어나기 전에 샤워해요.",
            audioSuffix: "jeoneun_ireonagi_jeone_syawohaeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '컴퓨터를 하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "컴퓨터를 하다",
          audioSuffix: "keompyuteoreul_hada",
        },
        wrongOptions: [
          { text: "텔레비전을 보다", audioSuffix: "tellebijoneul_boda" },
          { text: "책을 읽다", audioSuffix: "chaegeul_ilkda" },
        ],
      },
      {
        type: "ASSIST",
        question:
          "Nghe và chọn cách nói 'Tôi thường kiểm tra email sau khi thức dậy.'",
        correctOption: {
          text: "저는 일어난 후에 자주 이메일을 확인해요.",
          audioSuffix: "jeoneun_ireonan_hue_jaju_imeireul_hwaginhaeyo",
        },
        wrongOptions: [
          {
            text: "저는 일어나기 전에 자주 이메일을 확인해요.",
            audioSuffix: "jeoneun_ireonagi_jeone_jaju_imeireul_hwaginhaeyo",
          },
          {
            text: "저는 일어난 후에 가끔 이메일을 확인해요.",
            audioSuffix: "jeoneun_ireonan_hue_gakkeum_imeireul_hwaginhaeyo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '이를 닦다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "이를 닦다",
          audioSuffix: "ireul_dakda",
        },
        wrongOptions: [
          { text: "얼굴을 씻다", audioSuffix: "eolgureul_ssitda" },
          { text: "머리를 감다", audioSuffix: "meorireul_gamda" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '머리를 감다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "머리를 감다",
          audioSuffix: "meorireul_gamda",
        },
        wrongOptions: [
          { text: "이를 닦다", audioSuffix: "ireul_dakda" },
          { text: "샤워하다", audioSuffix: "syawohada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi đánh răng sau khi ăn sáng.'",
        correctOption: {
          text: "저는 아침을 먹은 후에 이를 닦아요.",
          audioSuffix: "jeoneun_achimeul_meogeun_hue_ireul_dakkayo",
        },
        wrongOptions: [
          {
            text: "저는 아침을 먹기 전에 이를 닦아요.",
            audioSuffix: "jeoneun_achimeul_meokgi_jeone_ireul_dakkayo",
          },
          {
            text: "저는 아침을 먹은 후에 머리를 감아요.",
            audioSuffix: "jeoneun_achimeul_meogeun_hue_meorireul_gamayo",
          },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '출근하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "출근하다",
          audioSuffix: "chulgeunhada",
        },
        wrongOptions: [
          { text: "퇴근하다", audioSuffix: "toegeunhada" },
          { text: "등교하다", audioSuffix: "deunggyohada" },
        ],
      },
      {
        type: "SELECT",
        question: "Từ '퇴근하다' trong tiếng Hàn có nghĩa là gì?",
        correctOption: {
          text: "퇴근하다",
          audioSuffix: "toegeunhada",
        },
        wrongOptions: [
          { text: "출근하다", audioSuffix: "chulgeunhada" },
          { text: "하교하다", audioSuffix: "hagyohada" },
        ],
      },
      {
        type: "ASSIST",
        question: "Nghe và chọn cách nói 'Tôi đi làm lúc 8 giờ sáng.'",
        correctOption: {
          text: "저는 아침 8시에 출근해요.",
          audioSuffix: "jeoneun_achim_yeodeolpsie_chulgeunhaeyo",
        },
        wrongOptions: [
          {
            text: "저는 아침 9시에 출근해요.",
            audioSuffix: "jeoneun_achim_ahopsie_chulgeunhaeyo",
          },
          {
            text: "저는 아침 8시에 등교해요.",
            audioSuffix: "jeoneun_achim_yeodeolpsie_deunggyohaeyo",
          },
        ],
      },
    ],
    "voice_kr"
  ),
};

export default lesson10;
