import React, { useState } from "react";
import SideBt from "../../components/product/SideBt";
import SideTitle from "../../components/product/SideTitle";
import mainProductData from "../../mock/mainProductData.json";
import ProductCard from "../../components/product/ProductCard";
import { SideBar } from "../../styles/product/sideBarCss";
import {
  GridContainer,
  ProListWrap,
  ProductWrap,
} from "../../styles/product/proWrapCss";
import styled from "@emotion/styled/macro";
import { Common } from "../../styles/CommonCss";

const ProductPage = () => {
  const [activeSide, setActiveSide] = useState(0);
  const handleClick = sidenId => {
    setActiveSide(sidenId);
    console.log("선택된 사이드바", sidenId);
  };

  const ProSearch = styled.div`
    .search-wrap {
      position: relative;
      display: flex;
      width: 100%;
      height: 50px;
      border: 1px solid ${Common.color.f900};
      border-radius: 10px;
      align-items: center;
      margin-bottom: 80px;
      .line {
        width: 1px;
        height: 100%;
        background: ${Common.color.f900};
        /* margin-right: 20px; */
      }
      select {
        border: none;
        width: 160px;
        padding: 8px 24px 8px 8px; /* 오른쪽에 내림 버튼을 위한 공간 추가 */
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("./images/down.svg");
        background-repeat: no-repeat;
        background-position: right 8px center; /* 내림 버튼 아이콘을 오른쪽에 위치 */
        cursor: pointer;
        font-size: 16px;
      }
    }
    .search-info {
      position: relative;
      display: flex;
      width: 85%;
      input {
        border: none;
        width: 92%;
        font-size: 16px;
        margin-left: 30px;
      }
    }

    .search-bt {
      /* position: absolute; */
      position: relative;
      /* top: -5px;
      left: 15px; */
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
  return (
    <ProductWrap>
      <SideBar>
        <SideTitle sideTitle="WHISKEY" />
        <hr />
        <div className="side-nav">
          <SideBt
            sidenNm="ALL"
            sidenId={0}
            active={activeSide === 0} // 고유 숫자와 비교
            onClick={() => handleClick(0)} // 고유 숫자 전달
          />
          <SideBt
            sidenNm="분류1"
            sidenId={1}
            active={activeSide === 1}
            onClick={() => handleClick(1)}
          />
          <SideBt
            sidenNm="분류2"
            sidenId={2}
            active={activeSide === 2}
            onClick={() => handleClick(2)}
          />
        </div>
      </SideBar>
      <ProListWrap>
        <ProSearch>
          <div className="search-wrap">
            <div className="search-info">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="search-word"
              ></input>
              <button className="search-bt">
                <img src="./images/search.png" />
              </button>
            </div>
            <div className="line"></div>
            <select>
              <option value="인기순">인기순</option>
              <option value="높은 가격순">높은 가격순</option>
              <option value="낮은 가격순">낮은 가격순</option>
            </select>
          </div>
        </ProSearch>
        <GridContainer>
          {mainProductData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </GridContainer>
      </ProListWrap>
    </ProductWrap>
  );
};

export default ProductPage;
