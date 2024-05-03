import React from "react";

import { useNavigate } from "react-router";
import { Common } from "../../styles/CommonCss";
import { CardFlex } from "../../styles/main/cardStlye";
import { ProCardContainer } from "../../styles/product/proCardCss";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <ProCardContainer>
      <a onClick={() => navigate(`/item`)}>
        <img
          className="card-img"
          src={product.picture}
          alt={product.productNm}
        />
      </a>
      <CardFlex>
        <div className="tagform">
          <img src="./images/star.png" alt="star" />
          <p>{product.ratingaverage}</p>
        </div>
      </CardFlex>
      <p className="productNm" style={{ color: Common.color.p900 }}>
        {product.name}
      </p>
      <p className="productNm">{product.subinfo}</p>
      <h2 className="price">{product.price}원</h2>
    </ProCardContainer>
  );
};
export default ProductCard;
