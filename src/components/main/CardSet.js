import styled from "@emotion/styled/macro";
import React, { useEffect, useState } from "react";
import { CardContainer, CardFlex } from "../../styles/main/cardStlye";
import { Common } from "../../styles/CommonCss";
import mainProductData from "../../mock/mainProductData.json";
import { getMostProduct } from "../../api/mainApi";

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
const CardSet = ({ data }) => {
  // const [newData, setNewData] = useState(initState);
  // const mainText = "ORDER-LIST";

  const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const newData = data ? data.slice(0, 3) : [];
  return (
    <CardsWrapper>
      {newData.map((product, index) => (
        <CardContainer key={index}>
          <a href={product.code}>
            <img
              className="card-img"
              src={`${product.picture}`}
              alt={product.picture}
            />
          </a>

          <CardFlex>
            <div className="tagform">
              <img src="./images/star.png" alt="star" />
              {/* <p>{product.rating}</p> */}
            </div>
          </CardFlex>
          <p className="productNm" style={{ color: Common.color.p900 }}>
            {product.name}
          </p>
          <p className="productNm">{product.content}</p>
          <h2 className="price">{product.price}원</h2>
        </CardContainer>
      ))}
    </CardsWrapper>
  );
};

export default CardSet;
