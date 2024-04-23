import React, { useState } from "react";
import { MainWrap } from "../../styles/main/mainCss";
import styled from "@emotion/styled/macro";
import { Common } from "../../styles/CommonCss";
import Count from "../../components/basic/Count";

const DetailedItemPage = () => {
  const [count, setCount] = useState(1);
  const ItemWrap = styled.div`
    padding: 120px;
    /* border-top: 1px solid; */
  `;
  const ItemContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between; /* 수정: .ItemContent에 적용 */
    img {
      width: 500px;
      height: 500px;
    }
    .information {
      padding-top: 20px;
      width: 500px;
      height: 500px;
      border-top: 1px solid ${Common.color.p700};
      border-bottom: 1px solid ${Common.color.p700};
    }
    .starRev {
      padding: 20px 0 20px 0;
      img {
        width: 19px;
        height: 15px;
      }
      a {
        margin-left: 10px;
        font-size: 13px;
        color: ${Common.color.p400};
        text-decoration: underline;
      }
    }
    .info {
      padding: 20px 0 20px 0;
      display: flex;
      gap: 50px;
      font-size: 16px;
      color: ${Common.color.p600};

      li {
        padding: 10px 0 10px 0;
      }
    }
    .count {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid ${Common.color.p800};
      .product-name {
        width: 300px;
      }
      p {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .pay-button {
      position: relative;
      display: flex;
      justify-content: space-between;
    }
  `;

  const BigButton = styled.button`
    width: 240px;
    height: 49px;
  `;

  return (
    <ItemWrap>
      <ItemContent>
        <img src={process.env.PUBLIC_URL + "/images/moon.jpg"} />
        <div className="information">
          <h1>나는 술을 좋아하는 고라니 1set</h1>
          <div className="starRev">
            <img src={process.env.PUBLIC_URL + "/images/star.png"} />
            <img src={process.env.PUBLIC_URL + "/images/star.png"} />
            <img src={process.env.PUBLIC_URL + "/images/star.png"} />
            <img src={process.env.PUBLIC_URL + "/images/star.png"} />
            <a href="#리뷰">?리뷰더보기</a>
          </div>
          <h1>34,000원</h1>
          <div className="info">
            <ul>
              <li>상품소개</li>
              <li>주종</li>
              <li>도수</li>
              <li>배송정보</li>
            </ul>
            <ul>
              <li>쌀쌀한 겨울에 들이키면 새끼고라니가 될 수 있다</li>
              <li>화이트 와인</li>
              <li>12%</li>
              <li>배송관련 설명가가가각가가가가각</li>
            </ul>
          </div>
          {/* <Count /> */}
          <div className="count">
            <p className="product-name">[픽업]나는 술을 좋아하는 고라slsssss</p>
            <Count name="productCnt" setCount={setCount} count={count} />
            <p>49,000 원</p>
          </div>
          <div className="pay-button">
            <BigButton>장바구니 담기</BigButton>
            <BigButton>바로 구매하기</BigButton>
          </div>
        </div>
      </ItemContent>
    </ItemWrap>
  );
};

export default DetailedItemPage;
