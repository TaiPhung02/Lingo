import { Lesson } from "@/types/courses";
import { createChallengesFromTemplates } from "@/lib/utils";

const lesson1: Lesson = {
  title: "Xin chào và Giới thiệu",
  challenges: createChallengesFromTemplates([
    // 1. Xin chào và Giới thiệu
    {
      type: "SELECT",
      question: "Chọn câu chào phổ biến trong tiếng Hàn",
      correctOption: {
        text: "안녕하세요 (Annyeonghaseyo)",
        audioSuffix: "annyeonghaseyo",
      },
      wrongOptions: [
        { text: "감사합니다 (Gamsahamnida)", audioSuffix: "gamsahamnida" },
        { text: "잘 자요 (Jal jayo)", audioSuffix: "jal_jayo" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn cách nói 'Tạm biệt' khi bạn ở lại",
      correctOption: {
        text: "안녕히 가세요 (Annyeonghi gaseyo)",
        audioSuffix: "annyeonghi_gaseyo",
      },
      wrongOptions: [
        {
          text: "안녕히 계세요 (Annyeonghi gyeseyo)",
          audioSuffix: "annyeonghi_gyeseyo",
        },
        {
          text: "안녕하세요 (Annyeonghaseyo)",
          audioSuffix: "annyeonghaseyo",
        },
      ],
    },

    // 2. Tự giới thiệu
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '저는 ___ 입니다' (Tôi là ___)",
      correctOption: { text: "학생 (Học sinh)", audioSuffix: "haksaeng" },
      wrongOptions: [
        { text: "교수 (Giáo sư)", audioSuffix: "gyosu" },
        { text: "요리사 (Đầu bếp)", audioSuffix: "yorisa" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu thể hiện bạn là người Việt Nam",
      correctOption: {
        text: "저는 베트남 사람입니다 (Jeoneun beteunam saramimnida)",
        audioSuffix: "jeoneun_beteunam_saramimnida",
      },
      wrongOptions: [
        {
          text: "저는 한국 사람입니다 (Jeoneun hanguk saramimnida)",
          audioSuffix: "jeoneun_hanguk_saramimnida",
        },
        {
          text: "저는 일본 사람입니다 (Jeoneun ilbon saramimnida)",
          audioSuffix: "jeoneun_ilbon_saramimnida",
        },
      ],
    },

    // 3. Hỏi tên người khác
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '이름이 ___?' (Tên bạn là gì?)",
      correctOption: {
        text: "뭐예요 (Mwoyeyo)",
        audioSuffix: "mwoyeyo",
      },
      wrongOptions: [
        { text: "어디예요 (Eodiyeyo)", audioSuffix: "eodiyeyo" },
        { text: "누구예요 (Nuguyeyo)", audioSuffix: "nuguyeyo" },
      ],
    },
    {
      type: "SELECT",
      question: "Câu nào là 'Tên bạn là gì?' trong tiếng Hàn?",
      correctOption: {
        text: "이름이 뭐예요? (Ireumi mwoyeyo?)",
        audioSuffix: "ireumi_mwoyeyo",
      },
      wrongOptions: [
        { text: "어디에 가요? (Eodie gayo?)", audioSuffix: "eodie_gayo" },
        {
          text: "무엇을 해요? (Mueoseul haeyo?)",
          audioSuffix: "mueoseul_haeyo",
        },
      ],
    },

    // 4. Số đếm từ 1 đến 10
    {
      type: "SELECT",
      question: "Số 'một' trong tiếng Hàn là gì?",
      correctOption: { text: "하나 (Hana)", audioSuffix: "hana" },
      wrongOptions: [
        { text: "둘 (Dul)", audioSuffix: "dul" },
        { text: "셋 (Set)", audioSuffix: "set" },
      ],
    },
    {
      type: "SELECT",
      question: "Số 'năm' trong tiếng Hàn là gì?",
      correctOption: { text: "다섯 (Daseot)", audioSuffix: "daseot" },
      wrongOptions: [
        { text: "일곱 (Ilgop)", audioSuffix: "ilgop" },
        { text: "넷 (Net)", audioSuffix: "net" },
      ],
    },
    {
      type: "SELECT",
      question: "Số 'mười' trong tiếng Hàn là gì?",
      correctOption: { text: "열 (Yeol)", audioSuffix: "yeol" },
      wrongOptions: [
        { text: "아홉 (Ahop)", audioSuffix: "ahop" },
        { text: "여덟 (Yeodeol)", audioSuffix: "yeodeol" },
      ],
    },

    // 5. Kết hợp nội dung
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '저는 ___ 사람입니다' (Tôi là người ___)",
      correctOption: {
        text: "베트남 (Việt Nam)",
        audioSuffix: "beteunam",
      },
      wrongOptions: [
        { text: "한국 (Hàn Quốc)", audioSuffix: "hanguk" },
        { text: "중국 (Trung Quốc)", audioSuffix: "junguk" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu thể hiện bạn đến từ Hàn Quốc",
      correctOption: {
        text: "저는 한국에서 왔어요 (Jeoneun hangukeseo wasseoyo)",
        audioSuffix: "jeoneun_hangukeseo_wasseoyo",
      },
      wrongOptions: [
        {
          text: "저는 베트남에서 왔어요",
          audioSuffix: "jeoneun_beteunameseo_wasseoyo",
        },
        {
          text: "저는 중국에서 왔어요",
          audioSuffix: "jeoneun_junggukeseo_wasseoyo",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào số phù hợp: '다섯, 여섯, ___'?",
      correctOption: { text: "일곱 (7)", audioSuffix: "ilgop" },
      wrongOptions: [
        { text: "아홉 (9)", audioSuffix: "ahop" },
        { text: "열 (10)", audioSuffix: "yeol" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn số 'chín' trong tiếng Hàn",
      correctOption: { text: "아홉 (Ahop)", audioSuffix: "ahop" },
      wrongOptions: [
        { text: "여덟 (Yeodeol)", audioSuffix: "yeodeol" },
        { text: "열 (Yeol)", audioSuffix: "yeol" },
      ],
    },
    {
      type: "SELECT",
      question: "Câu nào nghĩa là 'Tôi là học sinh'?",
      correctOption: {
        text: "저는 학생입니다 (Jeoneun haksaengimnida)",
        audioSuffix: "jeoneun_haksaengimnida",
      },
      wrongOptions: [
        { text: "저는 요리사입니다", audioSuffix: "jeoneun_yorisaimnida" },
        {
          text: "저는 회사원입니다",
          audioSuffix: "jeoneun_hoesawonimnida",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào số phù hợp: '하나, ___, 셋'?",
      correctOption: { text: "둘 (2)", audioSuffix: "dul" },
      wrongOptions: [
        { text: "넷 (4)", audioSuffix: "net" },
        { text: "다섯 (5)", audioSuffix: "daseot" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn cách chào tạm biệt khi bạn rời đi:",
      correctOption: {
        text: "안녕히 계세요 (Annyeonghi gyeseyo)",
        audioSuffix: "annyeonghi_gyeseyo",
      },
      wrongOptions: [
        {
          text: "안녕히 가세요 (Annyeonghi gaseyo)",
          audioSuffix: "annyeonghi_gaseyo",
        },
        {
          text: "안녕하세요 (Annyeonghaseyo)",
          audioSuffix: "annyeonghaseyo",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '제 이름은 ___입니다' (Tên tôi là ___)",
      correctOption: {
        text: "민수 (Min-su)",
        audioSuffix: "minsu",
      },
      wrongOptions: [
        {
          text: "서울 (Seoul)",
          audioSuffix: "seoul",
        },
        {
          text: "선생님 (Giáo viên)",
          audioSuffix: "seonsaengnim",
        },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn cách hỏi: 'Bạn là người nước nào?'",
      correctOption: {
        text: "어느 나라 사람이에요? (Eoneu nara saramieyo?)",
        audioSuffix: "eoneu_nara_saramieyo",
      },
      wrongOptions: [
        {
          text: "이름이 뭐예요? (Ireumi mwoyeyo?)",
          audioSuffix: "ireumi_mwoyeyo",
        },
        {
          text: "몇 살이에요? (Myeot sarieyo?)",
          audioSuffix: "myeot_sarieyo",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '저는 ___ 사람이에요' (Tôi là người ___)",
      correctOption: {
        text: "베트남 (Việt Nam)",
        audioSuffix: "beteunam",
      },
      wrongOptions: [
        {
          text: "한국 (Hàn Quốc)",
          audioSuffix: "hanguk",
        },
        {
          text: "일본 (Nhật Bản)",
          audioSuffix: "ilbon",
        },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn số đúng cho '다섯':",
      correctOption: {
        text: "5",
        audioSuffix: "daseot",
      },
      wrongOptions: [
        {
          text: "4",
          audioSuffix: "net",
        },
        {
          text: "6",
          audioSuffix: "yeoseot",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '저는 ___ 살이에요' (Tôi ___ tuổi)",
      correctOption: {
        text: "열다섯 (15)",
        audioSuffix: "yeoldaseot",
      },
      wrongOptions: [
        {
          text: "다섯 (5)",
          audioSuffix: "daseot",
        },
        {
          text: "스물 (20)",
          audioSuffix: "seumul",
        },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn cách nói lịch sự khi giới thiệu bản thân:",
      correctOption: {
        text: "저는 민수입니다 (Tôi là Min-su)",
        audioSuffix: "jeoneun_minsu_imnida",
      },
      wrongOptions: [
        {
          text: "나는 민수야 (Tôi là Min-su - thân mật)",
          audioSuffix: "naneun_minsuya",
        },
        {
          text: "민수예요 (Là Min-su)",
          audioSuffix: "minsuyeyo",
        },
      ],
    },
    {
      type: "ASSIST",
      question:
        "Điền vào chỗ trống: '당신의 ___은 뭐예요?' (___ của bạn là gì?)",
      correctOption: {
        text: "이름 (Tên)",
        audioSuffix: "ireum",
      },
      wrongOptions: [
        {
          text: "나라 (Quốc gia)",
          audioSuffix: "nara",
        },
        {
          text: "직업 (Nghề nghiệp)",
          audioSuffix: "jigeop",
        },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu đúng để nói 'Tôi là học sinh':",
      correctOption: {
        text: "저는 학생입니다",
        audioSuffix: "jeoneun_haksaeng_imnida",
      },
      wrongOptions: [
        {
          text: "저는 학생이예요",
          audioSuffix: "jeoneun_haksaeng_iyeyo",
        },
        {
          text: "나는 학생이에요",
          audioSuffix: "naneun_haksaeng_ieyo",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền số còn thiếu: 하나, 둘, 셋, ___, 다섯",
      correctOption: {
        text: "넷 (4)",
        audioSuffix: "net",
      },
      wrongOptions: [
        {
          text: "여섯 (6)",
          audioSuffix: "yeoseot",
        },
        {
          text: "일곱 (7)",
          audioSuffix: "ilgop",
        },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn cách nói 'Tạm biệt' khi người kia rời đi:",
      correctOption: {
        text: "안녕히 가세요 (Annyeonghi gaseyo)",
        audioSuffix: "annyeonghi_gaseyo",
      },
      wrongOptions: [
        {
          text: "안녕히 계세요 (Annyeonghi gyeseyo)",
          audioSuffix: "annyeonghi_gyeseyo",
        },
        {
          text: "안녕하세요 (Annyeonghaseyo)",
          audioSuffix: "annyeonghaseyo",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '저는 ___이에요' (Tôi là ___)",
      correctOption: {
        text: "학생 (học sinh)",
        audioSuffix: "haksaeng",
      },
      wrongOptions: [
        {
          text: "선생님 (giáo viên)",
          audioSuffix: "seonsaengnim",
        },
        {
          text: "회사원 (nhân viên công ty)",
          audioSuffix: "hoesawon",
        },
      ],
    },
    {
      type: "SELECT",
      question: "Số '9' trong tiếng Hàn là gì?",
      correctOption: {
        text: "아홉 (Ahop)",
        audioSuffix: "ahop",
      },
      wrongOptions: [
        {
          text: "일곱 (Ilgop)",
          audioSuffix: "ilgop",
        },
        {
          text: "열 (Yeol)",
          audioSuffix: "yeol",
        },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền số tiếp theo: 여섯, 일곱, ___",
      correctOption: {
        text: "여덟 (8)",
        audioSuffix: "yeodeol",
      },
      wrongOptions: [
        {
          text: "아홉 (9)",
          audioSuffix: "ahop",
        },
        {
          text: "다섯 (5)",
          audioSuffix: "daseot",
        },
      ],
    },
    {
      type: "SELECT",
      question: "Câu nào có nghĩa là: 'Tên bạn là gì?'",
      correctOption: {
        text: "이름이 뭐예요?",
        audioSuffix: "ireumi_mwoyeyo",
      },
      wrongOptions: [
        {
          text: "어디에 살아요?",
          audioSuffix: "eodie_sarayo",
        },
        {
          text: "무슨 일이에요?",
          audioSuffix: "museun_iriyeyo",
        },
      ],
    },
  ]),
};

export default lesson1;
