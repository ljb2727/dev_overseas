import { configureStore, createSlice } from "@reduxjs/toolkit";
import Hangul from "hangul-js";

let offer = createSlice({
  name: "offerList",
  //initialState: offerList,
  initialState: [],
  reducers: {
    changeOffer(state, action) {
      const payload = action.payload;
      console.log(payload);
      payload.map((e) => (e.chosung = Hangul.disassemble(e.label).join("")));
      payload.map(
        (e) => (e.commaPrice = Number(e.price).toLocaleString("ko-KR"))
      );
      return payload;
    },
  },
});

let defaultImage = createSlice({
  name: "defaultImage",
  initialState: {
    thumbnail: [
      "https://image.xgolf.com/file/2022/1109/202211096061821ljb2727.jpg",
    ],
    detail: [
      "https://image.xgolf.com/file/2022/1109/202211096061823ljb2727.jpg",
    ],
  },
});

let favoriteList = createSlice({
  name: "favoriteList",
  initialState: [],
  reducers: {
    setFavoriteList(state, action) {
      return action.payload;
    },
  },
});

let jsonLoading = createSlice({
  name: "jsonLoading",
  //initialState: offerList,
  initialState: false,
  reducers: {
    setJsonLoading(state, action) {
      return action.payload.type;
    },
  },
});

let tabArray = createSlice({
  name: "tabArray",
  initialState: {
    mainTabArray: ["분양", "개인"],
    subTabArray: [
      "일본",
      "중국",
      "태국",
      "필리핀",
      "베트남",
      "말레이시아",
      "테스트1",
      "테스트2",
    ],
  },
});

export default configureStore({
  reducer: {
    offer: offer.reducer,
    tabArray: tabArray.reducer,
    jsonLoading: jsonLoading.reducer,
    defaultImage: defaultImage.reducer,
    favoriteList: favoriteList.reducer,
  },
});

export let { changeOffer } = offer.actions;
export let { setJsonLoading } = jsonLoading.actions;
export let { setFavoriteList } = favoriteList.actions;
