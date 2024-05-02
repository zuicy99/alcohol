import React, { useEffect, useState } from "react";
import ProSearch from "../../components/product/ProSearch";
import ProductCard from "../../components/product/ProductCard";
import mainProductData from "../../mock/mainProductData.json";
import {
  GridContainer,
  ProListWrap,
  ProductWrap,
} from "../../styles/product/proWrapCss";

import HeaderNavPull from "../../components/basic/HeaderNavPull";
import { PB30 } from "../../styles/basic";
import { MarginB40 } from "../../styles/common/reviewProductCss";
import { HeaderNavWrap } from "../../styles/product/proNavCss";

const ProductPickPage = () => {
  const [selecteOption, setSelecteOption] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleOption = e => {
    const newValue = parseInt(e.target.value);
    setSelecteOption(prevState => newValue);
    console.log("글씨", newValue);
  };
  const handleSearchText = e => {
    setSearchText(e.target.value);
    // console.log("검색어 입력", searchText);
  };

  // 검색 버튼 클릭시 처리
  const handleClickSubmit = e => {
    e.preventDefault();
    setSearchText("");
    // setSelecteOption(0);

    // 사용자는 검색을 했다.
    // fetchData();
    console.log("나 돋보기 버튼", searchText, selecteOption);
  };

  useEffect(() => {
    // console.log("검색어,정렬", searchText, selecteOption);
  }, [searchText, selecteOption]);

  return (
    <ProductWrap>
      <ProListWrap>
        <HeaderNavWrap>
          <PB30>픽업배송</PB30>
        </HeaderNavWrap>
        <MarginB40 />
        <HeaderNavPull />
        <MarginB40 />
        {/* 검색어, 정렬 */}
        <ProSearch
          selecteOption={selecteOption}
          onChangeOption={handleOption}
          searchText={searchText}
          onSearchText={handleSearchText}
          onSubmit={handleClickSubmit}
        />
        <GridContainer>
          {mainProductData.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </GridContainer>
      </ProListWrap>
    </ProductWrap>
  );
};

export default ProductPickPage;
