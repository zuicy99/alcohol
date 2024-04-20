import styled from "@emotion/styled/macro";
import React from "react";
import { CardContainer, CardFlex } from "../../styles/main/cardStlye";

const CardSet = () => {
  return (
    <CardContainer>
      <img
        className="card-img"
        src=""
        // src={`/pic/${product.iproduct}/${product.repPic}`}
        // src={`${API_SERVER_HOST}/pic/${product.iproduct}/${product.repPic}`}
        // src={`${API_SERVER_HOST}/pic/product/${product.iproduct}/${product.repPic}`}
        // alt={product.repPic}
        // onClick={onselet}
        // onClick={() => iproductNavi(`/item/${product.iproduct}?page=1`)}
      />

      <CardFlex>
        <div className="tagform">
          <img src="./images/heart.png"></img>
        </div>

        <div className="review">
          <p>리뷰</p>
        </div>
      </CardFlex>
      <p className="productNm">햄프씨드가 들어간 마마스팜 프리미엄...</p>
      <h2 className="price">5000원</h2>
    </CardContainer>
  );
};

export default CardSet;
