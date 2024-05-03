import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getAlcholType } from "../../api/productApi";
import ProductCard from "../../components/product/ProductCard";
import ProductSidebar from "../../components/product/ProductSidebar";
import ProSearch from "../../components/product/ProSearch";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import mainProductData from "../../mock/mainProductData.json";
import {
  GridContainer,
  ProListWrap,
  ProductWrap,
} from "../../styles/product/proWrapCss";

const ProductPage = () => {
  // side => Param의 숫자인거임
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const side = parseInt(queryParams.get("side"));

  const navigate = useNavigate();

  const [activeSide, setActiveSide] = useState(side);
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

  const handleClick = sideId => {
    setActiveSide(sideId);
    console.log("선택된 사이드바", sideId);
    // query도 바껴야함 지금 안바뀜
    navigate(`/product?side=${sideId}`);
  };

  // 검색 버튼 클릭시 처리
  const handleClickSubmit = e => {
    e.preventDefault();
    setSearchText("");
    // fetchData();
    console.log("나 돋보기 버튼", searchText, selecteOption);
  };

  useEffect(() => {
    console.log("검색어,정렬", searchText, selecteOption);
    setActiveSide(side);
  }, [searchText, selecteOption, side]);

  // @AREA  이 부분은 테스트용
  const initState = [
    {
      code: 0,
      name: "",
      price: 0,
      ratingaverage: 0,
      picture: "",
    },
  ];
  const { type, sub, MoveToType } = useCustomQuery();
  const params = { type, sub };

  const mainCategory = `${params.type}`;
  const subCategory = `${params.sub}`;

  const { data } = useQuery({
    queryKey: ["product/list", params],
    queryFn: () => getAlcholType(mainCategory, subCategory),
  });

  const productData = data || initState;
  console.log("R data :", productData);

  // @COMMENT TEST CONSOLE
  console.log("param : ", type);
  console.log("mainCategory : ", mainCategory);
  // console.log("Response data : ", serverData);

  // @AREA 여기까지

  // @AREA @COMMENT Side-bar

  /*
  1. type 을 검색한다.
  2. type = "위스키" 라면?
  3. sidebar에 함수를 전달한다. 특정인자를 위스키
  */
  const sideParam = params.type;
  console.log("sidebar -parameter", sideParam);

  // @AREA 여기까지

  return (
    <ProductWrap>
      <ProductSidebar type={sideParam} />

      {/* <SideBar>
        <SideTitle sideTitle="WHISKEY" />
        <hr />
        <div className="side-nav">
          {console.log(`activeSide ${activeSide}`)}
          <SideBt
            sidenNm="ALL"
            sideId={1}
            active={activeSide === 1} // 고유 숫자와 비교
            onClick={() => handleClick(1)} // 고유 숫자 전달
          />
          <SideBt
            sidenNm="싱글몰트"
            sideId={2}
            active={activeSide === 2}
            onClick={() => handleClick(2)}
          />
          <SideBt
            sidenNm="블렌디드"
            sideId={3}
            active={activeSide === 3}
            onClick={() => handleClick(3)}
          />
          <SideBt
            sidenNm="버번"
            sideId={4}
            active={activeSide === 4}
            onClick={() => handleClick(4)}
          />
        </div>
      </SideBar> */}
      <ProListWrap>
        {/* 검색어, 정렬 */}
        <ProSearch
          selecteOption={selecteOption}
          onChangeOption={handleOption}
          searchText={searchText}
          onSearchText={handleSearchText}
          onSubmit={handleClickSubmit}
        />
        <GridContainer>
          {/* {mainProductData.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))} */}
          {/* API 호출 */}
          {productData?.map(product => (
            <ProductCard key={product.code} data={product} />
          ))}
        </GridContainer>
      </ProListWrap>
    </ProductWrap>
  );
};

export default ProductPage;
