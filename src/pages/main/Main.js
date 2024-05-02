import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  getMostProduct,
  getNewProduct,
  getRandProduct,
} from "../../api/mainApi";
import CardSet from "../../components/main/CardSet";
import MainTitle from "../../components/main/MainTitle";
import { Common } from "../../styles/CommonCss";
import { MainWrap } from "../../styles/main/mainCss";
import { PickUpCard } from "../../styles/main/pickupCardCss";

const initState = [
  {
    code: 0,
    name: "",
    maincategory: "",
    subcategory: "",
    content: "",
    aroma: "",
    taste: "",
    finish: "",
    nation: "",
    picture: "",
    price: 0,
  },
];

const Main = () => {
  const navigate = useNavigate();
  // const [mostData, setMostData] = useState(initState);
  const [mostData, setMostData] = useState([]);
  const [newdata, setNewData] = useState([]);
  const [randdata, setRandData] = useState([]);

  useEffect(() => {
    getRandProduct({
      successFn: data => {
        setRandData(data); // 성공 시 데이터 설정
      },
      failFn: data => {
        alert("most 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 most 시도");
      },
    });
  }, []);

  useEffect(() => {
    getMostProduct({
      successFn: data => {
        setMostData(data); // 성공 시 데이터 설정
      },
      failFn: data => {
        alert("most 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 most 시도");
      },
    });
  }, []);

  useEffect(() => {
    getNewProduct({
      successFn: data => {
        setNewData(data); // 성공 시 데이터 설정
      },
      failFn: data => {
        alert("most 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 most 시도");
      },
    });
  }, []);

  return (
    <MainWrap>
      <div className="main-header">
        <p>ALCHOHOL HOLIC</p>
        <div
          style={{
            display: "flex",
            position: "relative",
            marginTop: "35px",
          }}
        >
          <div className="search-wrap">
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              className="search-word"
              // onChange={handleSearchText}
            ></input>
            <button
              className="search-bt"
              // onClick={handleClickSubmit}
            >
              <img src="./images/search.png" />
            </button>
          </div>
        </div>
        {/* <input type="button" className="search-bt" /> */}
      </div>
      <img src="./images/banner.svg"></img>
      <PickUpCard>
        <a href="/배달" style={{ background: Common.color.p200 }}>
          <div className="pickCard">
            <b>배달 & 배송</b>
            <p>자택 배달 & 배송 서비스</p>
          </div>
        </a>
        <a
          onClick={() => navigate(`/pick`)}
          style={{
            background: Common.color.f900,
            color: `${Common.color.p000}`,
          }}
        >
          <div className="pickCard">
            <b>매장픽업</b>
            <p>
              주변 매장 & 편의점
              <br />
              예약 및 픽업
            </p>
          </div>
        </a>
      </PickUpCard>
      <div style={{ padding: "30px 0" }}>
        <MainTitle mainText="오늘의 추천술" />
        <CardSet data={randdata} />
      </div>
      <div style={{ padding: "30px 0" }}>
        <MainTitle mainText="신제품 출시" />
        <CardSet data={newdata} />
      </div>
      <div style={{ padding: "30px 0" }}>
        <MainTitle mainText="HOT 인기제품" />
        <CardSet data={mostData} />
      </div>
    </MainWrap>
  );
};

export default Main;
