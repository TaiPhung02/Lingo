interface Option {
  imageSrc?: string;
  correct: boolean;
  text: string;
  audioSrc?: string;
}

interface Challenge {
  type: "SELECT" | "ASSIST";
  question: string;
  options: Option[];
}

interface Lesson {
  title: string;
  challenges: Challenge[];
}

interface UnitData {
  unitId: number;
  lessons: Lesson[];
}

export const koreanQuizData: UnitData[] = [
  // Sơ cấp 1
  {
    unitId: 1,
    lessons: [
      {
        title: "Bảng chữ cái Hangeul",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn chữ cái phát âm là 'a'",
            options: [
              {
                imageSrc: "/character/a.svg",
                correct: true,
                text: "ㅏ",
                audioSrc: "/voice_kr/a.mp3",
              },
              {
                imageSrc: "/character/o.svg",
                correct: false,
                text: "ㅗ",
                audioSrc: "/voice_kr/o.mp3",
              },
              {
                imageSrc: "/character/i.svg",
                correct: false,
                text: "ㅣ",
                audioSrc: "/voice_kr/i.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền âm phù hợp với 'i'",
            options: [
              {
                correct: true,
                text: "ㅣ",
                audioSrc: "/voice_kr/i.mp3",
              },
              {
                correct: false,
                text: "ㅏ",
                audioSrc: "/voice_kr/a.mp3",
              },
              {
                correct: false,
                text: "ㅜ",
                audioSrc: "/voice_kr/u.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Âm nào là 'g/k'?",
            options: [
              {
                imageSrc: "/character/g.svg",
                correct: true,
                text: "ㄱ",
                audioSrc: "/voice_kr/g.mp3",
              },
              {
                imageSrc: "/character/n.svg",
                correct: false,
                text: "ㄴ",
                audioSrc: "/voice_kr/n.mp3",
              },
              {
                imageSrc: "/character/d.svg",
                correct: false,
                text: "ㄷ",
                audioSrc: "/voice_kr/d.mp3",
              },
            ],
          },
        ],
      },
      {
        title: "Xin chào và tạm biệt",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn câu có nghĩa là 'Xin chào'",
            options: [
              {
                imageSrc: "/character/hello.svg",
                correct: true,
                text: "안녕하세요",
                audioSrc: "/voice_kr/annyeonghaseyo.mp3",
              },
              {
                imageSrc: "/character/goodbye.svg",
                correct: false,
                text: "안녕히 가세요",
                audioSrc: "/voice_kr/annyeonghi_gaseyo.mp3",
              },
              {
                imageSrc: "/character/thankyou.svg",
                correct: false,
                text: "감사합니다",
                audioSrc: "/voice_kr/gamsahamnida.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền câu nói khi tạm biệt người ở lại",
            options: [
              {
                correct: true,
                text: "안녕히 계세요",
                audioSrc: "/voice_kr/annyeonghi_gyeseyo.mp3",
              },
              {
                correct: false,
                text: "안녕히 가세요",
                audioSrc: "/voice_kr/annyeonghi_gaseyo.mp3",
              },
              {
                correct: false,
                text: "안녕하세요",
                audioSrc: "/voice_kr/annyeonghaseyo.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Chọn câu có nghĩa là 'Cảm ơn'",
            options: [
              {
                imageSrc: "/character/thankyou.svg",
                correct: true,
                text: "감사합니다",
                audioSrc: "/voice_kr/gamsahamnida.mp3",
              },
              {
                imageSrc: "/character/hello.svg",
                correct: false,
                text: "안녕하세요",
                audioSrc: "/voice_kr/annyeonghaseyo.mp3",
              },
              {
                imageSrc: "/character/sorry.svg",
                correct: false,
                text: "죄송합니다",
                audioSrc: "/voice_kr/joesonghamnida.mp3",
              },
            ],
          },
        ],
      },
    ],
  },
  // Sơ cấp 2
  {
    unitId: 2,
    lessons: [
      {
        title: "Tự giới thiệu bản thân",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn câu có nghĩa là 'Tôi là sinh viên'",
            options: [
              {
                imageSrc: "/character/student.svg",
                correct: true,
                text: "저는 학생입니다",
                audioSrc: "/voice_kr/i_am_student.mp3",
              },
              {
                imageSrc: "/character/teacher.svg",
                correct: false,
                text: "저는 선생님입니다",
                audioSrc: "/voice_kr/i_am_teacher.mp3",
              },
              {
                imageSrc: "/character/doctor.svg",
                correct: false,
                text: "저는 의사입니다",
                audioSrc: "/voice_kr/i_am_doctor.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền câu 'Tôi đến từ Việt Nam'",
            options: [
              {
                correct: true,
                text: "저는 베트남에서 왔습니다",
                audioSrc: "/voice_kr/i_am_from_vietnam.mp3",
              },
              {
                correct: false,
                text: "저는 한국에서 왔습니다",
                audioSrc: "/voice_kr/i_am_from_korea.mp3",
              },
              {
                correct: false,
                text: "저는 중국에서 왔습니다",
                audioSrc: "/voice_kr/i_am_from_china.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Câu nào hỏi 'Bạn bao nhiêu tuổi?'",
            options: [
              {
                imageSrc: "/character/age.svg",
                correct: true,
                text: "몇 살이에요?",
                audioSrc: "/voice_kr/how_old_are_you.mp3",
              },
              {
                imageSrc: "/character/name.svg",
                correct: false,
                text: "이름이 뭐예요?",
                audioSrc: "/voice_kr/what_is_your_name.mp3",
              },
              {
                imageSrc: "/character/job.svg",
                correct: false,
                text: "직업이 뭐예요?",
                audioSrc: "/voice_kr/what_is_your_job.mp3",
              },
            ],
          },
        ],
      },
      {
        title: "Đếm số",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn từ nghĩa là '1' (số Hàn)",
            options: [
              {
                imageSrc: "/character/one.svg",
                correct: true,
                text: "하나",
                audioSrc: "/voice_kr/hana.mp3",
              },
              {
                imageSrc: "/character/two.svg",
                correct: false,
                text: "둘",
                audioSrc: "/voice_kr/dul.mp3",
              },
              {
                imageSrc: "/character/three.svg",
                correct: false,
                text: "셋",
                audioSrc: "/voice_kr/set.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền từ nghĩa là '10' (số Hàn)",
            options: [
              {
                correct: true,
                text: "열",
                audioSrc: "/voice_kr/yeol.mp3",
              },
              {
                correct: false,
                text: "아홉",
                audioSrc: "/voice_kr/ahop.mp3",
              },
              {
                correct: false,
                text: "여섯",
                audioSrc: "/voice_kr/yeoseot.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Chọn từ nghĩa là '5' (số Trung)",
            options: [
              {
                imageSrc: "/character/five.svg",
                correct: true,
                text: "오",
                audioSrc: "/voice_kr/o.mp3",
              },
              {
                imageSrc: "/character/six.svg",
                correct: false,
                text: "육",
                audioSrc: "/voice_kr/yuk.mp3",
              },
              {
                imageSrc: "/character/seven.svg",
                correct: false,
                text: "칠",
                audioSrc: "/voice_kr/chil.mp3",
              },
            ],
          },
        ],
      },
    ],
  },
  // Trung cấp 1
  {
    unitId: 3,
    lessons: [
      {
        title: "Mua sắm",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn câu hỏi 'Cái này giá bao nhiêu?'",
            options: [
              {
                imageSrc: "/character/price.svg",
                correct: true,
                text: "이거 얼마예요?",
                audioSrc: "/voice_kr/how_much_is_this.mp3",
              },
              {
                imageSrc: "/character/what.svg",
                correct: false,
                text: "이게 뭐예요?",
                audioSrc: "/voice_kr/what_is_this.mp3",
              },
              {
                imageSrc: "/character/where.svg",
                correct: false,
                text: "어디 있어요?",
                audioSrc: "/voice_kr/where_is_it.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền câu 'Tôi muốn mua cái này'",
            options: [
              {
                correct: true,
                text: "이거 사고 싶어요",
                audioSrc: "/voice_kr/i_want_to_buy_this.mp3",
              },
              {
                correct: false,
                text: "이거 팔고 싶어요",
                audioSrc: "/voice_kr/i_want_to_sell_this.mp3",
              },
              {
                correct: false,
                text: "이거 보고 싶어요",
                audioSrc: "/voice_kr/i_want_to_see_this.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Câu nào nói 'Đắt quá'?",
            options: [
              {
                imageSrc: "/character/expensive.svg",
                correct: true,
                text: "너무 비싸요",
                audioSrc: "/voice_kr/too_expensive.mp3",
              },
              {
                imageSrc: "/character/cheap.svg",
                correct: false,
                text: "싸요",
                audioSrc: "/voice_kr/cheap.mp3",
              },
              {
                imageSrc: "/character/good.svg",
                correct: false,
                text: "좋아요",
                audioSrc: "/voice_kr/good.mp3",
              },
            ],
          },
        ],
      },
      {
        title: "Thời gian và lịch hẹn",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn câu hỏi 'Bây giờ là mấy giờ?'",
            options: [
              {
                imageSrc: "/character/time.svg",
                correct: true,
                text: "지금 몇 시예요?",
                audioSrc: "/voice_kr/what_time_is_it_now.mp3",
              },
              {
                imageSrc: "/character/date.svg",
                correct: false,
                text: "오늘 며칠이에요?",
                audioSrc: "/voice_kr/what_date_is_today.mp3",
              },
              {
                imageSrc: "/character/day.svg",
                correct: false,
                text: "오늘 무슨 요일이에요?",
                audioSrc: "/voice_kr/what_day_is_today.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền câu 'Chúng ta gặp nhau lúc 3 giờ'",
            options: [
              {
                correct: true,
                text: "우리 3시에 만나요",
                audioSrc: "/voice_kr/lets_meet_at_3.mp3",
              },
              {
                correct: false,
                text: "우리 2시에 만나요",
                audioSrc: "/voice_kr/lets_meet_at_2.mp3",
              },
              {
                correct: false,
                text: "우리 내일 만나요",
                audioSrc: "/voice_kr/lets_meet_tomorrow.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Chọn câu có nghĩa là 'Thứ Hai'",
            options: [
              {
                imageSrc: "/character/monday.svg",
                correct: true,
                text: "월요일",
                audioSrc: "/voice_kr/monday.mp3",
              },
              {
                imageSrc: "/character/tuesday.svg",
                correct: false,
                text: "화요일",
                audioSrc: "/voice_kr/tuesday.mp3",
              },
              {
                imageSrc: "/character/wednesday.svg",
                correct: false,
                text: "수요일",
                audioSrc: "/voice_kr/wednesday.mp3",
              },
            ],
          },
        ],
      },
    ],
  },
  // Trung cấp 2
  {
    unitId: 4,
    lessons: [
      {
        title: "Giao thông và chỉ đường",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn câu có nghĩa là 'Đi thẳng'",
            options: [
              {
                imageSrc: "/character/straight.svg",
                correct: true,
                text: "직진하세요",
                audioSrc: "/voice_kr/go_straight.mp3",
              },
              {
                imageSrc: "/character/left.svg",
                correct: false,
                text: "왼쪽으로 가세요",
                audioSrc: "/voice_kr/go_left.mp3",
              },
              {
                imageSrc: "/character/right.svg",
                correct: false,
                text: "오른쪽으로 가세요",
                audioSrc: "/voice_kr/go_right.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền câu 'Bến xe buýt ở đâu?'",
            options: [
              {
                correct: true,
                text: "버스 정류장이 어디에 있어요?",
                audioSrc: "/voice_kr/where_is_the_bus_stop.mp3",
              },
              {
                correct: false,
                text: "지하철역이 어디에 있어요?",
                audioSrc: "/voice_kr/where_is_the_subway_station.mp3",
              },
              {
                correct: false,
                text: "택시 정류장이 어디에 있어요?",
                audioSrc: "/voice_kr/where_is_the_taxi_stand.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Câu nào nói 'Tôi đi bằng xe buýt'?",
            options: [
              {
                imageSrc: "/character/bus.svg",
                correct: true,
                text: "저는 버스로 가요",
                audioSrc: "/voice_kr/i_go_by_bus.mp3",
              },
              {
                imageSrc: "/character/subway.svg",
                correct: false,
                text: "저는 지하철로 가요",
                audioSrc: "/voice_kr/i_go_by_subway.mp3",
              },
              {
                imageSrc: "/character/taxi.svg",
                correct: false,
                text: "저는 택시로 가요",
                audioSrc: "/voice_kr/i_go_by_taxi.mp3",
              },
            ],
          },
        ],
      },
      {
        title: "Thời tiết và mùa",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn câu hỏi 'Thời tiết hôm nay thế nào?'",
            options: [
              {
                imageSrc: "/character/weather.svg",
                correct: true,
                text: "오늘 날씨가 어때요?",
                audioSrc: "/voice_kr/how_is_the_weather_today.mp3",
              },
              {
                imageSrc: "/character/temperature.svg",
                correct: false,
                text: "지금 기온이 몇 도예요?",
                audioSrc: "/voice_kr/what_is_the_temperature_now.mp3",
              },
              {
                imageSrc: "/character/season.svg",
                correct: false,
                text: "지금 무슨 계절이에요?",
                audioSrc: "/voice_kr/what_season_is_it_now.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền câu 'Hôm nay trời nắng'",
            options: [
              {
                correct: true,
                text: "오늘 날씨가 맑아요",
                audioSrc: "/voice_kr/today_is_sunny.mp3",
              },
              {
                correct: false,
                text: "오늘 비가 와요",
                audioSrc: "/voice_kr/today_is_rainy.mp3",
              },
              {
                correct: false,
                text: "오늘 눈이 와요",
                audioSrc: "/voice_kr/today_is_snowy.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Từ nào nghĩa là 'mùa hè'?",
            options: [
              {
                imageSrc: "/character/summer.svg",
                correct: true,
                text: "여름",
                audioSrc: "/voice_kr/summer.mp3",
              },
              {
                imageSrc: "/character/spring.svg",
                correct: false,
                text: "봄",
                audioSrc: "/voice_kr/spring.mp3",
              },
              {
                imageSrc: "/character/winter.svg",
                correct: false,
                text: "겨울",
                audioSrc: "/voice_kr/winter.mp3",
              },
            ],
          },
        ],
      },
    ],
  },
  // Cao cấp 1
  {
    unitId: 5,
    lessons: [
      {
        title: "Sức khỏe và bệnh tật",
        challenges: [
          {
            type: "SELECT",
            question: "Chọn câu nói 'Tôi bị đau đầu'",
            options: [
              {
                imageSrc: "/character/headache.svg",
                correct: true,
                text: "저는 두통이 있어요",
                audioSrc: "/voice_kr/i_have_a_headache.mp3",
              },
              {
                imageSrc: "/character/stomachache.svg",
                correct: false,
                text: "저는 복통이 있어요",
                audioSrc: "/voice_kr/i_have_a_stomachache.mp3",
              },
              {
                imageSrc: "/character/cold.svg",
                correct: false,
                text: "저는 감기에 걸렸어요",
                audioSrc: "/voice_kr/i_have_a_cold.mp3",
              },
            ],
          },
          {
            type: "ASSIST",
            question: "Điền câu 'Tôi cần đi bệnh viện'",
            options: [
              {
                correct: true,
                text: "저는 병원에 가야 해요",
                audioSrc: "/voice_kr/i_need_to_go_to_hospital.mp3",
              },
              {
                correct: false,
                text: "저는 약국에 가야 해요",
                audioSrc: "/voice_kr/i_need_to_go_to_pharmacy.mp3",
              },
              {
                correct: false,
                text: "저는 집에 가야 해요",
                audioSrc: "/voice_kr/i_need_to_go_home.mp3",
              },
            ],
          },
          {
            type: "SELECT",
            question: "Câu nào nói 'Bạn nên nghỉ ngơi'?",
            options: [
              {
                imageSrc: "/character/rest.svg",
                correct: true,
                text: "쉬는 게 좋아요",
                audioSrc: "/voice_kr/you_should_rest.mp3",
              },
              {
                imageSrc: "/character/exercise.svg",
                correct: false,
                text: "운동하는 게 좋아요",
                audioSrc: "/voice_kr/you_should_exercise.mp3",
              },
              {
                imageSrc: "/character/medicine.svg",
                correct: false,
                text: "약을 먹는 게 좋아요",
                audioSrc: "/voice_kr/you_should_take_medicine.mp3",
              },
            ],
          },
        ],
      },
    ],
  },
];
