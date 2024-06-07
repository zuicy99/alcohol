import React, { useEffect, useState } from "react";
import { getWishList } from "../../api/wishListApi";
import ReviewBt from "../../components/mypage/ReviewBt";
import WishCard from "../../components/product/WishCard";
import { PB20 } from "../../styles/basic";
import { MarginB10, MarginB20 } from "../../styles/common/reviewProductCss";
import { GridContainer } from "../../styles/product/proWrapCss";
import { InfoWrap } from "../order/OrderPage";

const WishListPage = () => {
  const [wishListData, setWishListData] = useState([]);
  const [activeNavBt, setActiveNavBt] = useState(1);
  useEffect(() => {
    getWishList({
      successFn: data => {
        setWishListData(data); // 성공 시 데이터 설정
      },
      failFn: data => {
        alert("상품불러오기 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 상품불러오기 시도");
      },
    });
  }, []);

  const fetchData = () => {
    getWishList({
      successFn: data => {
        setWishListData(data); // 성공 시 데이터 설정
      },
      failFn: data => {
        alert("상품불러오기 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 상품불러오기 시도");
      },
    });
  };
  return (
    <div>
      <InfoWrap>
        <MarginB10 />
        <PB20>위시리스트</PB20>
        <MarginB20 />
        <div>
          <ReviewBt btName="위시리스트" reBtId={1} active={activeNavBt === 1} />
        </div>
        <hr />
        <MarginB20 />
        <GridContainer>
          {wishListData.map(product => (
            <WishCard
              key={product.code}
              data={product}
              refreshData={fetchData}
            />
          ))}
        </GridContainer>
      </InfoWrap>
    </div>
  );
};

export default WishListPage;
