import React, { useState } from "react";

import styled from "@emotion/styled";
import { CardContainer, CardFlex } from "../../styles/main/cardStlye";
import { Common } from "../../styles/CommonCss";
import { ProCardContainer } from "../../styles/product/proCardCss";
import { Navigate, useNavigate } from "react-router";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <ProCardContainer>
      <a onClick={() => navigate(`/item=${data.code}`)}>
        <img className="card-img" src={data.picture} alt={data.productNm} />
      </a>
      <CardFlex>
        <div className="tagform">
          <img src="./images/star.png" alt="star" />
          <p>{data.ratingaverage}</p>
        </div>
      </CardFlex>
      <p className="productNm" style={{ color: Common.color.p900 }}>
        {data.name}
      </p>
      <p className="productNm">{data.subinfo}</p>
      <h2 className="price">{data.price}원</h2>
    </ProCardContainer>
  );
};
export default ProductCard;
