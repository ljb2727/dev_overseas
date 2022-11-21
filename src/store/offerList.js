import Hangul from "hangul-js";

const offerList = [
  {
    id: "1",
    label: "도쿄11 윈저파크 컨트리클럽",
    price: 1200,
    personal: true,
    country: "일본",
    region: "이바라키",
    img: [
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2014/0407/20140407183403668060.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "e1",
    label: "중궈어어",
    price: 1200,
    personal: false,
    country: "중국",
    region: "중국1",
    img: [
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2014/0407/20140407183403668060.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "e2",
    label: "태국",
    price: 1200,
    personal: false,
    country: "태국",
    region: "태국 어쩌구",
    img: ["https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg"],
    thumbnail:
      "https://image.xgolf.com/file/2014/0407/20140407183403668060.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "e3",
    label: "필리핀",
    price: 1200,
    personal: false,
    country: "필리핀",
    region: "ㅇㄹㄹ",
    img: [
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2014/0407/20140407183403668060.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "e4",
    label: "베트남",
    price: 1200,
    personal: true,
    country: "베트남",
    region: "베 ㅔ",
    img: ["https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg"],
    thumbnail:
      "https://image.xgolf.com/file/2014/0407/20140407183403668060.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "2",
    label: "퍼시픽 블루 골프 리조트2",
    price: 800,
    personal: false,
    country: "일본",
    region: "오이타",
    img: [
      "https://image.xgolf.com/file/2022/1021/2022102153058641leesy.jpg/dims/resize/311x161",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2014/0326/20140326171854602098.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "a2",
    label: "퍼시픽 블루 골프 리조트",
    price: 800,
    personal: true,
    country: "중국",
    region: "오이타",
    img: [
      "https://image.xgolf.com/file/2022/1021/2022102153058641leesy.jpg/dims/resize/311x161",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2014/0326/20140326171854602098.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "a3",
    label: "태국 분양",
    price: 800,
    personal: false,
    country: "태국",
    region: "오이타",
    img: [
      "https://image.xgolf.com/file/2022/1021/2022102153058641leesy.jpg/dims/resize/311x161",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2014/0326/20140326171854602098.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "3",
    label: "후지야 호텔 회원권",
    price: 1300,
    personal: false,
    country: "일본",
    region: "사이타마",
    img: [
      "https://image.xgolf.com/file/2022/0926/2022092632412461leesy.jpg/dims/resize/311x161",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2016/1111/20161111095054627090.jpg/dims/resize/330x330",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "4",
    label: "HK치구사 컨트리클럽",
    price: 1100,
    personal: true,
    country: "일본",
    region: "가고시마",
    img: [
      "https://image.xgolf.com/file/2014/0407/20140407183403668060.jpg/dims/resize/330x330",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "5",
    label: "조양 컨트리클럽",
    price: 1100,
    personal: true,
    country: "일본",
    region: "후쿠오카",
    img: [
      "https://image.xgolf.com/file/2014/0326/20140326171854602098.jpg/dims/resize/330x330",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2022/1021/2022102153058641leesy.jpg/dims/resize/311x161",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "6",
    label: "테스트3 ",
    price: 1100,
    personal: true,
    country: "일본",
    region: "후쿠오카",
    img: [
      "https://image.xgolf.com/file/2016/1111/20161111095054627090.jpg/dims/resize/330x330",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2022/0926/2022092632412461leesy.jpg/dims/resize/311x161",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "7",
    label: "테스트 중국",
    price: 1100,
    personal: true,
    country: "중국",
    region: "머시기",
    img: [
      "https://image.xgolf.com/file/2016/1111/20161111095054627090.jpg/dims/resize/330x330",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2022/0926/2022092632412461leesy.jpg/dims/resize/311x161",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "8",
    label: "테스트 태국 ",
    price: 1100,
    personal: true,
    country: "태국",
    region: "사와디카",
    img: [
      "https://image.xgolf.com/file/2016/1111/20161111095054627090.jpg/dims/resize/330x330",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2022/0926/2022092632412461leesy.jpg/dims/resize/311x161",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "9",
    label: "테스트 필리핀",
    price: 1100,
    personal: true,
    country: "필리핀",
    region: "고고",
    img: [
      "https://image.xgolf.com/file/2016/1111/20161111095054627090.jpg/dims/resize/330x330",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2022/0926/2022092632412461leesy.jpg/dims/resize/311x161",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
  {
    id: "10",
    label: "테스트 ",
    price: 1100,
    personal: true,
    country: "말레이시아",
    region: "ㅇㄹㄹ",
    img: [
      "https://image.xgolf.com/file/2016/1111/20161111095054627090.jpg/dims/resize/330x330",
    ],
    thumbnail:
      "https://image.xgolf.com/file/2022/0926/2022092632412461leesy.jpg/dims/resize/311x161",
    date: "2022.10.19",
    info: {
      골프장정보: `1. 규모 : 18홀 72파 6,999야드 등<br/>
        2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑 등<br/>
        3. 위치 : 나리타 공항에서 1시간 10분 등
        `,
      회원권정보: `1. 입회금 (VAT포함)<br/>
          (1) GOLD (기명1인+무기명1인) 880만원<br/>
          (2) VIP (기명1인+무기명3인) 1,320만원<br/>
          (3) VVIP (기명2인+무기명6인) 1,870만원<br/>
        2. 특징 : 평생 회원, 연회비 없음, 양도/양수 가능`,
      등록자: ["김케이", "010-1234-5678"],
    },
  },
];

offerList.map((e) => (e.chosung = Hangul.disassemble(e.label).join("")));
offerList.map((e) => (e.commaPrice = Number(e.price).toLocaleString("ko-KR")));

export default offerList;
