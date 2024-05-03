import React from "react";

import { useNavigate } from "react-router";
import { Common } from "../../styles/CommonCss";
import { CardFlex } from "../../styles/main/cardStlye";
import { ProCardContainer } from "../../styles/product/proCardCss";

const ProductCard = ({ data }) => {
  console.log("받은 데이터", data);
  const navigate = useNavigate();
  return (
    <ProCardContainer>
      <a onClick={() => navigate(`/item`)}>
        <img className="card-img" src={data?.picture} alt={data?.productNm} />
      </a>
      <CardFlex>
        <div className="tagform">
          <img src={process.env.PUBLIC_URL + `/images/star.png`} alt="star" />
          <p>{data?.ratingaverage}</p>
        </div>
      </CardFlex>
      <p className="productNm" style={{ color: Common.color.p900 }}>
        {data?.name}
      </p>
      {/* <p className="productNm">{product?.subinfo}</p> */}
      <h2 className="price">{data?.price}원</h2>
    </ProCardContainer>
  );
};
export default ProductCard;
