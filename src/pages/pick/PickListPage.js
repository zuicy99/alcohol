import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import {
  GridContainer,
  ProListWrap,
  ProductWrap,
} from "../../styles/product/proWrapCss";

import { PB30 } from "../../styles/basic";
import { MarginB40 } from "../../styles/common/reviewProductCss";
import { HeaderNavWrap } from "../../styles/product/proNavCss";
const initState = [
  {
    code: 3,
    name: "",
    picture: "",
    price: 45000,
    ratingaverage: 0,
  },
];
const ProductPickPage = ({ titleTest, apiFunction }) => {
  const [pickData, setPickData] = useState([initState]);

  useEffect(() => {
    apiFunction({
      successFn: data => {
        setPickData(data); // 성공 시 데이터 설정
      },
      failFn: data => {
        alert("상품불러오기 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 상품불러오기 시도");
      },
    });
  }, []);
  return (
    <ProductWrap>
      <ProListWrap>
        <HeaderNavWrap>
          <PB30>{titleTest}</PB30>
        </HeaderNavWrap>
        <MarginB40 />
        <MarginB40 />

        <GridContainer>
          {pickData.map(product => (
            <ProductCard key={product.code} data={product} />
          ))}
        </GridContainer>
      </ProListWrap>
    </ProductWrap>
  );
};

export default ProductPickPage;
