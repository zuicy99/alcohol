import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  SignAlcholSearch,
  getAlcholType,
  getUserRecent,
  nonSignAlcholSearch,
} from "../../api/productApi";
import ProductCard from "../../components/product/ProductCard";
import ProductSidebar from "../../components/product/ProductSidebar";
import ProSearch from "../../components/product/ProSearch";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import {
  GridContainer,
  ProListWrap,
  ProductWrap,
} from "../../styles/product/proWrapCss";

const ProductPage = () => {
  const { isLogin } = useCustomLogin();
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
  const { type, sub, search, MoveToSearch } = useCustomQuery();
  const params = { type, sub, search };

  const mainCategory = `${params.type}`;
  const subCategory = `${params.sub}`;

  const { data: productData } = useQuery({
    queryKey: ["product/list", params],
    queryFn: () => getAlcholType(mainCategory, subCategory),
  });

  // @AREA @COMMENT Side-bar

  const sideParam = params.type;

  // @AREA Search-bar Component

  const searchInitState = {
    searchcontents: "",
  };

  // @AREA Search(검색) 관련
  // API host

  console.log("Result : ", productData);
  const [searchData, setSearchData] = useState(initState);

  // const SearchMutation = useMutation({
  //   mutationFn: search => nonSignAlcholSearch({ search }),
  //   onSuccess: result => {
  //     console.log("axios result :", result);
  //     MoveToSearch(alcoholSearch.searchcontents);
  //     setSearchData(result);
  //   },

  //   onError: () => {},
  // });

  // // 회원용 서치
  // const UserSearchMutation = useMutation({
  //   mutationFn: search => SignAlcholSearch({ search }),
  //   onSuccess: result => {
  //     console.log("jwtAxios result :", result);
  //     MoveToSearch(alcoholSearch.searchcontents);
  //     setSearchData(result);
  //   },
  //   onError: () => {},
  // });

  const [alcoholSearch, setAlcoholSearch] = useState(searchInitState);
  const handleChangeSearch = e => {
    setAlcoholSearch(prevValue => ({
      ...prevValue,
      searchcontents: e.target.value,
    }));
  };
  console.log("ww", alcoholSearch);
  // const handleClickSearch = () => {
  //   SearchMutation.mutate(alcoholSearch);
  // };

  // 토큰있냐 없냐..에 따라 실행..?
  const [searchD, setSearchD] = useState();
  const [searchFlag, setSearchFlag] = useState(false);
  const handleClickSearch = () => {
    // if (isLogin) {
    //   UserSearchMutation.mutate(alcoholSearch);
    // } else {
    //   SearchMutation.mutate(alcoholSearch);
    // }
    setSearchFlag(true);
    MoveToSearch(alcoholSearch.searchcontents);
  };

  const { data: searchDataTest } = useQuery({
    queryFn: () => {
      if (isLogin) {
        console.log("들어가기전 : ", alcoholSearch);
        // console.log("ss:", searchDataTest);
        SignAlcholSearch({ alcoholSearch });

        // setSearchD(searchDataTest);
      } else {
        console.log("들어가기전 : ", alcoholSearch);
        // console.log("ss:", searchDataTest);
        nonSignAlcholSearch({ alcoholSearch });

        // setSearchD(searchDataTest);
      }
    },
    enabled: searchFlag,
  });

  // @AREA  Select(Sort) 관련
  // const selectInitState = {
  //   category: "",
  // };
  // const [select, setSelect] = useState(selectInitState);
  // const handleClickSelect = e => {
  //   setSelect(prevValue => ({
  //     ...prevValue,
  //     // category는 API가 없어서 임의로 넣은 변수
  //     category: e.target.value,
  //   }));
  //   console.log("선택된 카테고리", select);
  // };

  // 최근 검색어

  console.log("result search : ", searchDataTest);

  const { data: recentData, refetch } = useQuery({
    queryKey: [],
    queryFn: () => {
      if (isLogin) {
        getUserRecent();
      }
    },
    enabled: false,
  });

  // const recentData = data;
  // recentData => 일딴 회원기준으로 데이터는 나옴
  console.log("검색어 결과 ", recentData);
  const handleClickRecent = () => {
    console.log("검색바 클릭");
    // setRecentFlag(recnetFlag);
    refetch();
  };

  return (
    <ProductWrap>
      {/* Side-bar Component */}
      <ProductSidebar type={sideParam} />

      {/* Search-bar Component */}
      <ProListWrap>
        <ProSearch
          // @COMMENT Search Props
          onSearchChange={e => handleChangeSearch(e)}
          searchValue={alcoholSearch.searchcontents}
          searchName="searchcontents"
          searchPlaceholder="검색할 주류를 입력해주세요."
          onSearchClick={handleClickSearch}
          // @COMMENT Select Props
          // onSelectChange={e => handleClickSelect(e)}
          // selectValue={select.category}
          onRecentClick={handleClickRecent}
        />
        <div></div>

        {/* Content Component (Card) */}
        <GridContainer>
          {productData?.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}

          {/* Search - Component */}
          {searchDataTest?.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </GridContainer>
      </ProListWrap>
    </ProductWrap>
  );
};

export default ProductPage;
