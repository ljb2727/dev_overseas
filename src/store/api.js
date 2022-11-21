import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeOffer, setJsonLoading, setFavoriteList } from "store/index.js";
import { useParams, useNavigate } from "react-router-dom";

import NowLoading from "components/common/NowLoading";

function GetData() {


  const dispatch = useDispatch();
  const [offers, setOffers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [storeFavorites, setStoreFavorites] = useState(null);

  // 리스트 받아서 넘기기
  useEffect(() => {
    if (offers !== null) {
      dispatch(changeOffer(offers));
      dispatch(setJsonLoading({ type: true }));
    }
  }, [offers]);

  // 즐겨찾기 받아서 넘기기
  useEffect(() => {
    if (storeFavorites !== null) {
      dispatch(setFavoriteList(storeFavorites));
      dispatch(setJsonLoading({ type: true }));
      console.log(storeFavorites);
    }
  }, [storeFavorites]);

  useEffect(() => {
    const getOfferList = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setOffers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));
        const response = await axios

          // .get("https://phpup.xgolf.com/outtour/item_list.php")
          // .then((response) => {
          //   setOffers(response.data.offerList);
          // });
          //

          .get("https://phpup.xgolf.com/outtour/item_list.php?user_id="+user_array.memb_id)
          .then((response) => {
            //console.log(response);
            //console.log("데이터 가져온다.");
            setOffers(response.data.offerList);
          });



      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getOfferList();

    // 즐겨찾기 받아서 store에 넘김
    const getFavorites = async () => {
      try {
        setError(null);
        setOffers(null);
        setLoading(true);
        const response = await axios
          .get("https://phpup.xgolf.com/outtour/item_list.php")
          .then((response) => {
            setStoreFavorites(response.data.favoriteLists);
          });
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getFavorites();
  }, []);

  if (loading) return <NowLoading />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!offers) return null;
}

export { GetData };
