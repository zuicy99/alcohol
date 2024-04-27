import styled from "@emotion/styled/macro";
import React, { useState } from "react";
import { CardContainer, CardFlex } from "../../styles/main/cardStlye";
import { Common } from "../../styles/CommonCss";
import mainProductData from "../../mock/mainProductData.json";

const initState = [
  {
    id: 0,
    name: "",
    maincategory: "",
    subcategory: "",
    content: "",
    aroma: "",
    taste: "",
    finish: "",
    nation: "",
    picture: "",
  },
];
const CardSet = () => {
  const [newData, setNewData] = useState(initState);
  const mainText = "ORDER-LIST";

  const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    /* gap: 20px; */
    /* flex-wrap: wrap; */
  `;

  return (
    <CardsWrapper>
      {mainProductData.slice(0, 3).map((product, index) => (
        <CardContainer key={index}>
          <a href={product.link}>
            <img
              className="card-img"
              src={`${product.imageSrc}`}
              alt={product.name}
            />
          </a>

          <CardFlex>
            <div className="tagform">
              <img src="./images/star.png" alt="star" />
              <p>{product.rating}</p>
            </div>
          </CardFlex>
          <p className="productNm" style={{ color: Common.color.p900 }}>
            {product.productNm}
          </p>
          <p className="productNm">{product.subinfo}</p>
          <h2 className="price">{product.price}원</h2>
        </CardContainer>
      ))}
    </CardsWrapper>
  );
};

export default CardSet;
