import styled from "@emotion/styled/macro";
import React, { useState } from "react";
import Count from "../../components/basic/Count";
import { P16, P20, P30 } from "../../styles/basic";
import { Common } from "../../styles/CommonCss";

import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { GoCartModal, GoMapModal } from "../../components/detail/GoCart";
import { ProductItemData } from "../../mock/ProductitemData";

import { useQuery } from "react-query";
import { getDetail } from "../../api/productApi";
import { postWish } from "../../api/wishListApi";
import { placeState } from "../../atom/placeState";
import { stockState } from "../../atom/stockState";
import {
  BigButton,
  HeartButton,
  ItemContent,
  ItemWrap,
  TotalAmount,
} from "../../styles/common/reviewProductCss";
import { StarRev } from "../../styles/common/StarCss";

export const items1 = ["1", "2", "3"];
export const items2 = ["a", "b", "c"];
const DetailedItemPage = () => {
  const navigate = useNavigate();
  const productItem = ProductItemData[0];
  const selectedPlace = useRecoilValue(placeState);
  const selectedStockNum = useRecoilValue(stockState);
  const [count, setCount] = useState(1);
  const [isHeartChecked, setHeartChecked] = useState(1);

  const [isMapModalOpen, setMapModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // 모달관련
  const handleOpenMapModal = () => {
    setMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setMapModalOpen(false);
  };

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  const handleHeartButtonClick = () => {
    const newValue = !isHeartChecked ? 0 : 1;
    setHeartChecked(!isHeartChecked);
    // console.log("하트클리이이이잉익", newValue);
    alert("찜목록 추가");
  };

  const AA = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
    /* justify-content: space-between; */
  `;

  // @AREA

  const { code } = useParams();
  // console.log("params ", code);

  const detailParam = {
    code: Number(code),
  };
  console.log(detailParam);

  const initState = [
    {
      code: 0,
      name: "",
      ratingaverage: 0,
      price: 0,
      maincategory: "",
      subcategory: "",
      content: "",
      aroma: "",
      taste: "",
      finish: "",
      nation: "",
      picture: "",
      reviewcacount: 0,
    },
  ];

  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getDetail({ code }),
  });

  const serverData = data || initState;
  // console.log("response", serverData[0].name);

  const starImages = Array.from(
    { length: serverData[0].ratingaverage },
    (_, index) => (
      <img
        key={index}
        src={process.env.PUBLIC_URL + "/images/star.png"}
        alt="star"
      />
    ),
  );

  const taste = serverData[0].taste;
  const tasteArray = taste.split(", ");

  console.log("array : ", tasteArray);
  const categoryArray = [
    `${serverData[0].maincategory}`,
    `${serverData[0].subcategory}`,
  ];

  // -------------------찜목록 추가 기능 start ---------------------------
  const fetchData = () => {
    // console.log("상품 코드 제발 찜추가:", detailParam.code);

    postWish({
      code: {
        code: detailParam.code,
      },
      successFn,
      failFn,
      errorFn: data => {
        alert("서버상태 불안정 다음에 상품불러오기 시도");
      },
    });
  };
  const successFn = data => {
    alert("찜목록 추가");
  };
  const failFn = data => {
    alert("failFn : 데이터 호출에 실패하였습니다.");
  };

  const totalPrice = serverData[0]?.price * count;
  const addComma = price => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };
  const formattedPrice = addComma(totalPrice);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // console.log("stock num : ", selectedStockNum);

  // {
  //   "alcoholcode": 1,
  //   "marketname": "포도대구동성로점",
  //   "amount": 1,
  //   "delivery": "Delivery"
  // }

  // {
  //   "alcoholcode": 1,
  //   "marketname": "배럴앤드리프",
  //   "amount": 1,
  //   "delivery": "Delivery"
  // }

  const [delivery, setDelivery] = useState("PickUp");
  const handleChangeDelivery = e => {
    setDelivery(e.target.value);
  };

  // -------------------찜목록 추가 기능 end ---------------------------

  const postCard = {
    alcoholcode: detailParam?.code,
    marketname: selectedPlace,
    amount: count,
    delivery: delivery,
    // stock: selectedStockNum,
    // amount: count,
    // price: serverData[0].price,
  };

  // ------------------------ console.log ------------------------------------
  console.log("코드냐 ? :", detailParam);
  console.log("딜러버리냐 ? :", delivery);
  // -------------------------------------------------------------------------

  return (
    <ItemWrap>
      <ItemContent>
        <img src={serverData[0].picture} />
        <div className="information">
          <AA>
            <h1>{serverData[0]?.name}</h1>
            <HeartButton
              checked={isHeartChecked}
              onClick={() => {
                fetchData();
                handleHeartButtonClick();
              }}
            >
              <img
                src={
                  isHeartChecked
                    ? process.env.PUBLIC_URL + "/images/heartOff.svg"
                    : process.env.PUBLIC_URL + "/images/heartOn.svg"
                }
                alt="heart"
                className="heart-icon"
                style={{ cursor: "pointer" }}
              />
            </HeartButton>
          </AA>

          <P16 style={{ color: `${Common.color.p600}` }}>
            {productItem.introduction}
          </P16>
          <div className="starRev">
            <StarRev>{starImages}</StarRev>
            <a href="#리뷰">리뷰더보기</a>
          </div>
          <h1>{serverData[0].price}원</h1>
          <div className="line" />

          <GoMapModal />
          <div className="info">
            <ul>
              <li>선택된 판매처</li>
              <li>배송정보</li>
            </ul>
            <ul>
              {serverData ? (
                <li>{selectedPlace}</li>
              ) : (
                <li>판매처를 선택해주세요</li>
              )}

              <li>
                <select
                  style={{
                    width: "150px",
                    height: "28px",
                    border: `1px solid ${Common.color.p300}`,
                    color: `${Common.color.p600}`,
                    fontSize: "16px",
                    // borderRadius: "5px",
                  }}
                  onChange={handleChangeDelivery}
                  value={delivery}
                >
                  <option value="PickUp">픽업</option>
                  <option value="Delivery">배송</option>
                </select>
              </li>
            </ul>
          </div>
          {/* <Count /> */}
          <div className="count">
            <p className="product-name">
              [{delivery}]{serverData[0].name}
            </p>
            <Count name="productCnt" setCount={setCount} count={count} />
            <p>{serverData[0].price}원</p>
          </div>
          <div className="line" />
          <TotalAmount>
            <P20>총 상품금액</P20>
            <P30 style={{ color: `${Common.color.f900}`, fontWeight: "bold" }}>
              {formattedPrice}원
            </P30>
          </TotalAmount>
          <div className="pay-button">
            <GoCartModal postcard={postCard} />

            <BigButton
              onClick={() => navigate(`/pay`)}
              style={{
                background: `${Common.color.f900}`,
                border: `1px solid ${Common.color.p000}`,
                color: `${Common.color.p000}`,
              }}
            >
              바로 구매하기
            </BigButton>
          </div>
        </div>
      </ItemContent>
    </ItemWrap>
  );
};

export default DetailedItemPage;
