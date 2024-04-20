import styled from "@emotion/styled/macro";
import React from "react";
import { Common } from "../../styles/CommonCss";
import CardSet from "../../components/main/CardSet";
import MainTitle from "../../components/main/MainTitle";

const Main = () => {
  const mainText1 = "오늘의 추천술";
  const mainText2 = "신제품 출시";
  const mainText3 = "HOT 인기제품";

  const MainWrap = styled.div`
    position: relative;

    /* width: 100%; */

    .main-header {
      position: relative;
      /* display: flex; */
      min-height: 300px;
      width: 100%;
      text-align: center;
      font-size: 50px;
      font-weight: 600;
      padding: 80px 20px;
    }
    .search-wrap {
      position: relative;
      display: flex;
      width: 592px;
      margin: 0 auto;
      /* height: 52px; */
      border: 1px solid ${Common.color.f900};
      border-radius: 5px;
      justify-content: center;
      align-items: center;
    }
    .search-word {
      position: relative;
      width: 500px;
      height: 52px;
      right: 20px;
      border: none;
      /* border: 1px solid ${Common.color.f900}; */
      border-radius: 5px;
      /* font-size: 30px; */
      font-size: 20px;
      /* margin-right: 20px; */
    }
    .search-word::placeholder {
    }
    .search-bt {
      /* position: absolute; */
      position: relative;
      top: -5px;
      left: 15px;
      background-repeat: no-repeat;
      cursor: pointer;
      border: none;
      background-color: transparent;
      background-position: center;
      img {
        width: 25px;
        height: auto;
      }
    }
  `;
  const PickUpCard = styled.div`
    position: relative;
    /* margin: 0 auto; */
    /* justify-content: space-between; */
    justify-content: center;
    gap: 80px;
    display: flex;
    padding: 80px;
    a {
      width: 516px;
      height: 290px;
      background-color: ${Common.color.p000};
      border-radius: 20px;
    }
    .pickCard {
      padding: 50px;
      b {
        font-size: 50px;
      }
      p {
        font-size: 20px;
        font-weight: bold;
        margin-top: 15px;
      }
    }
  `;
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
            ></input>
            <button className="search-bt">
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
        <a href="/픽업" style={{ background: Common.color.f900 }}>
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
        <MainTitle mainText={mainText1} />
        <CardSet />
      </div>
      <div style={{ padding: "30px 0" }}>
        <MainTitle mainText={mainText2} />
        <CardSet />
      </div>
      <div style={{ padding: "30px 0" }}>
        <MainTitle mainText={mainText3} />
        <CardSet />
      </div>
    </MainWrap>
  );
};

export default Main;
