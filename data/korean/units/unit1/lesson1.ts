import { Lesson } from "@/types/courses";
import { createChallengesFromTemplates } from "@/lib/utils";

const lesson1: Lesson = {
  title: "Xin chào và Giới thiệu",
  challenges: createChallengesFromTemplates([
    // 1. Chào hỏi cơ bản
    {
      type: "SELECT",
      question: "Chọn câu chào phổ biến trong tiếng Hàn",
      correctOption: {
        text: "안녕하세요",
        audioSuffix: "annyeonghaseyo",
      },
      wrongOptions: [
        { text: "감사합니다", audioSuffix: "gamsahamnida" },
        { text: "실례합니다", audioSuffix: "sillyehamnida" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '___ 하세요' (Câu chào phổ biến)",
      correctOption: {
        text: "안녕",
        audioSuffix: "annyeong",
      },
      wrongOptions: [
        { text: "잘", audioSuffix: "jal" },
        { text: "잘가", audioSuffix: "jalga" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu 'Tạm biệt' khi bạn rời đi",
      correctOption: {
        text: "안녕히 계세요",
        audioSuffix: "annyeonghi_gyeseyo",
      },
      wrongOptions: [
        { text: "안녕히 가세요", audioSuffix: "annyeonghi_gaseyo" },
        { text: "잘 자요", audioSuffix: "jal_jayo" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu 'Tạm biệt' khi người khác rời đi",
      correctOption: {
        text: "안녕히 가세요",
        audioSuffix: "annyeonghi_gaseyo",
      },
      wrongOptions: [
        { text: "안녕히 계세요", audioSuffix: "annyeonghi_gyeseyo" },
        { text: "안녕히 주무세요", audioSuffix: "annyeonghi_jumuseyo" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '안녕히 ___ ' (Hãy ở lại bình an)",
      correctOption: {
        text: "계세요",
        audioSuffix: "gyeseyo",
      },
      wrongOptions: [
        { text: "가세요", audioSuffix: "gaseyo" },
        { text: "오세요", audioSuffix: "oseyo" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu chào buổi sáng trong tiếng Hàn",
      correctOption: {
        text: "좋은 아침이에요",
        audioSuffix: "joeun_achimieyo",
      },
      wrongOptions: [
        { text: "좋은 밤이에요", audioSuffix: "joeun_bamieyo" },
        { text: "좋은 하루 되세요", audioSuffix: "joeun_haru_doeseyo" },
      ],
    },

    // 2. Tự giới thiệu
    {
      type: "SELECT",
      question: "Chọn cách giới thiệu 'Tên tôi là Min'",
      correctOption: {
        text: "제 이름은 민입니다",
        audioSuffix: "je_ireumeun_minimnida",
      },
      wrongOptions: [
        { text: "제 나이는 민입니다", audioSuffix: "je_naineun_minimnida" },
        { text: "제 친구는 민입니다", audioSuffix: "je_chinguneun_minimnida" },
      ],
    },
    {
      type: "ASSIST",
      question:
        "Điền vào chỗ trống: '___ 이름은 영호입니다' (Tên tôi là Young-ho)",
      correctOption: {
        text: "제",
        audioSuffix: "je",
      },
      wrongOptions: [
        { text: "너", audioSuffix: "neo" },
        { text: "그", audioSuffix: "geu" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu 'Tôi là học sinh'",
      correctOption: {
        text: "저는 학생입니다",
        audioSuffix: "jeoneun_haksaengimnida",
      },
      wrongOptions: [
        {
          text: "저는 선생님입니다",
          audioSuffix: "jeoneun_seonsaengnimimnida",
        },
        { text: "저는 의사입니다", audioSuffix: "jeoneun_uisaimnida" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '저는 ___ 입니다' (Tôi là giáo viên)",
      correctOption: {
        text: "선생님",
        audioSuffix: "seonsaengnim",
      },
      wrongOptions: [
        { text: "학생", audioSuffix: "haksaeng" },
        { text: "회사원", audioSuffix: "hoesawon" },
      ],
    },

    // 3. Hỏi tên người khác
    {
      type: "SELECT",
      question: "Chọn câu hỏi 'Tên bạn là gì?'",
      correctOption: {
        text: "이름이 뭐예요?",
        audioSuffix: "ireumi_mwoyeyo",
      },
      wrongOptions: [
        { text: "나이가 어떻게 되요?", audioSuffix: "naiga_eotteoke_doeyo" },
        { text: "어디 살아요?", audioSuffix: "eodi_sarayo" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '이름이 ___ ?' (Tên là gì?)",
      correctOption: {
        text: "뭐예요",
        audioSuffix: "mwoyeyo",
      },
      wrongOptions: [
        { text: "누구예요", audioSuffix: "nuguyeyo" },
        { text: "어디예요", audioSuffix: "eodiyeyo" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu 'Tên của bạn là Ji-woo phải không?'",
      correctOption: {
        text: "이름이 지우예요?",
        audioSuffix: "ireumi_jiwooyeyo",
      },
      wrongOptions: [
        { text: "이름이 민호예요?", audioSuffix: "ireumi_minhoyeyo" },
        { text: "지우가 맞아요?", audioSuffix: "jiwooga_majayo" },
      ],
    },

    // 4. Quốc tịch
    {
      type: "SELECT",
      question: "Chọn câu 'Tôi là người Việt Nam'",
      correctOption: {
        text: "저는 베트남 사람입니다",
        audioSuffix: "jeoneun_beteunam_saramimnida",
      },
      wrongOptions: [
        {
          text: "저는 한국 사람입니다",
          audioSuffix: "jeoneun_hanguk_saramimnida",
        },
        {
          text: "저는 중국 사람입니다",
          audioSuffix: "jeoneun_jungguk_saramimnida",
        },
      ],
    },
    {
      type: "ASSIST",
      question:
        "Điền vào chỗ trống: '저는 ___ 사람입니다' (Tôi là người Hàn Quốc)",
      correctOption: {
        text: "한국",
        audioSuffix: "hanguk",
      },
      wrongOptions: [
        { text: "일본", audioSuffix: "ilbon" },
        { text: "미국", audioSuffix: "miguk" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu hỏi 'Bạn là người nước nào?'",
      correctOption: {
        text: "어느 나라 사람이에요?",
        audioSuffix: "eoneu_nara_saramieyo",
      },
      wrongOptions: [
        { text: "어디에서 왔어요?", audioSuffix: "eodieseo_wasseoyo" },
        { text: "국적이 어디예요?", audioSuffix: "gukjeogi_eodiyeyo" },
      ],
    },
    {
      type: "ASSIST",
      question:
        "Điền vào chỗ trống: '저는 베트남에서 ___ 어요' (Tôi đến từ Việt Nam)",
      correctOption: {
        text: "왔",
        audioSuffix: "wat",
      },
      wrongOptions: [
        { text: "갔", audioSuffix: "gat" },
        { text: "살", audioSuffix: "sal" },
      ],
    },

    // 5. Số đếm cơ bản
    {
      type: "SELECT",
      question: "Chọn số 'một' trong tiếng Hàn",
      correctOption: {
        text: "하나",
        audioSuffix: "hana",
      },
      wrongOptions: [
        { text: "둘", audioSuffix: "dul" },
        { text: "셋", audioSuffix: "set" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '___, 둘, 셋, 넷, 다섯' (Số đầu tiên)",
      correctOption: {
        text: "하나",
        audioSuffix: "hana",
      },
      wrongOptions: [
        { text: "영", audioSuffix: "yeong" },
        { text: "공", audioSuffix: "gong" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn số 'năm' trong tiếng Hàn",
      correctOption: {
        text: "다섯",
        audioSuffix: "daseot",
      },
      wrongOptions: [
        { text: "넷", audioSuffix: "net" },
        { text: "여섯", audioSuffix: "yeoseot" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn số 'bảy' trong tiếng Hàn",
      correctOption: {
        text: "일곱",
        audioSuffix: "ilgop",
      },
      wrongOptions: [
        { text: "여섯", audioSuffix: "yeoseot" },
        { text: "여덟", audioSuffix: "yeodeol" },
      ],
    },
    {
      type: "ASSIST",
      question:
        "Điền vào chỗ trống: '여섯, ___, 여덟, 아홉, 열' (Số tiếp theo)",
      correctOption: {
        text: "일곱",
        audioSuffix: "ilgop",
      },
      wrongOptions: [
        { text: "다섯", audioSuffix: "daseot" },
        { text: "넷", audioSuffix: "net" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn số 'mười' trong tiếng Hàn",
      correctOption: {
        text: "열",
        audioSuffix: "yeol",
      },
      wrongOptions: [
        { text: "아홉", audioSuffix: "ahop" },
        { text: "열한", audioSuffix: "yeolhan" },
      ],
    },

    // 6. Câu hỏi và câu chào bổ sung
    {
      type: "SELECT",
      question: "Chọn câu 'Rất vui được gặp bạn'",
      correctOption: {
        text: "만나서 반갑습니다",
        audioSuffix: "mannaseo_bangapseumnida",
      },
      wrongOptions: [
        { text: "또 만나요", audioSuffix: "tto_mannayo" },
        { text: "처음 뵙겠습니다", audioSuffix: "cheoeum_boepgesseumnida" },
      ],
    },
    {
      type: "ASSIST",
      question:
        "Điền vào chỗ trống: '만나서 ___ 습니다' (Rất vui được gặp bạn)",
      correctOption: {
        text: "반갑",
        audioSuffix: "bangap",
      },
      wrongOptions: [
        { text: "기쁘", audioSuffix: "gippeu" },
        { text: "즐겁", audioSuffix: "jeulgeop" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn câu hỏi 'Khỏe không?'",
      correctOption: {
        text: "잘 지내요?",
        audioSuffix: "jal_jinaeyo",
      },
      wrongOptions: [
        { text: "어디 가요?", audioSuffix: "eodi_gayo" },
        { text: "뭐 해요?", audioSuffix: "mwo_haeyo" },
      ],
    },
    {
      type: "SELECT",
      question: "Chọn cách nói 'Cảm ơn' trong tiếng Hàn",
      correctOption: {
        text: "감사합니다",
        audioSuffix: "gamsahamnida",
      },
      wrongOptions: [
        { text: "죄송합니다", audioSuffix: "joesonghamnida" },
        { text: "괜찮습니다", audioSuffix: "gwaenchanseumnida" },
      ],
    },
    {
      type: "ASSIST",
      question: "Điền vào chỗ trống: '___ 합니다' (Cảm ơn)",
      correctOption: {
        text: "감사",
        audioSuffix: "gamsa",
      },
      wrongOptions: [
        { text: "미안", audioSuffix: "mian" },
        { text: "환영", audioSuffix: "hwanyeong" },
      ],
    },
  ]),
};

export default lesson1;
