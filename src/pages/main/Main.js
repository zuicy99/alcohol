import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../api/config";
import { getMostProduct } from "../../api/mainApi";
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
  // const [mostData, setMostData] = useState(initState);
  const [mostData, setMostData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const prefix = `${SERVER_URL}/alcohol`;
  // useEffect를 사용하여 데이터를 가져옴

  // 데이터를 가져오는 비동기 함수 정의
  const fetchData1 = async () => {
    // 데이터 가져오는 로직
    const data = await fetch(`${prefix}/most`);
    const jsonData = await data.json();
    setMostData(jsonData);
  };

  const successFn = data => {
    console.log("successFn : ", data);
    setMostData(data);
    // setServerData(Array(data.products.length).fill(false));
  };
  const failFn = data => {
    console.log("failFn : ", data);
    alert("failFn : 데이터 호출에 실패하였습니다.");
  };

  const errorFn = data => {
    console.log("errorFn : ", data);
    alert("서버상태 불안정 그래서, 데모테스트했음.");
    setMostData(data);
    // setServerData(Array(data.products.length).fill(false));
  };
  useEffect(() => {
    fetchData1();
  }, []);
  const fetchData = () => {
    getMostProduct({
      successFn,
      failFn,
      errorFn,
    });
  };
  useEffect(() => {
    fetchData1();
    // fetchData2();
    // fetchData3();
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
          href="/pick?main=메인카테1"
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
        <CardSet data={mostData} />
      </div>
      <div style={{ padding: "30px 0" }}>
        <MainTitle mainText="신제품 출시" />
        <CardSet />
      </div>
      <div style={{ padding: "30px 0" }}>
        <MainTitle mainText="HOT 인기제품" />
        <CardSet />
      </div>
    </MainWrap>
  );
};

export default Main;
