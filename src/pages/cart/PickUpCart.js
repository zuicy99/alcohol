import { ConfigProvider } from "antd";
import React, { useState } from "react";
import { TableCustom } from "../../styles/common/tableCss";
import { PCartData, picPriceData } from "../../mock/CartData";
import { Common } from "../../styles/CommonCss";
import { BasicBtR } from "../../styles/basic/basicBt";
import Count from "../../components/basic/Count";
import { columnsH } from "../../mock/test/pickupColumnsData";
import CountKey from "../../components/basic/CountKey";
import { useRecoilState } from "recoil";
import { cartCountState } from "../../recoil/atom/CountState";
import { DetailBigKeyword } from "../../styles/payment/payComCss";
import { P16, PB20 } from "../../styles/basic";
import { TotalPayWrap, TotalTh } from "../../styles/cart/CartTableCss";
import { BigButton, SButton } from "../../styles/common/reviewProductCss";
import { useNavigate } from "react-router";

const PickUpCart = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useRecoilState(cartCountState);
  const [showModal, setShowModal] = useState(false);
  // const [count, setCount] = useState(1);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const calculatePaymentAmount = (price, count) => {
    return (price * count).toLocaleString(); // 콤마를 추가하여 반환합니다.
  };

  const totalOrderAmount = PCartData.reduce((total, record) => {
    const paymentAmount = record.price * cartCount[record.key];
    return total + paymentAmount;
  }, 0);

  const columnsH = [
    {
      title: "",
      dataIndex: "key",
    },
    {
      title: "이미지",
      dataIndex: "pic",
      render: () => (
        <img style={{ width: "80px" }} src="/images/moon.jpg" alt="리뷰 작성" />
      ),
    },
    {
      title: "상품정보",
      dataIndex: "info",
    },
    {
      title: "수량",
      dataIndex: "count",
      render: (text, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CountKey id={record.key} count={record.count} />
          {/* {console.log("record.key:", record.key)} */}
          {/* {console.log("record.count:", record.count)} */}
        </div>
      ),
    },
    {
      title: "결제금액",
      dataIndex: "price",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {calculatePaymentAmount(record.price, cartCount[record.key])} 원
        </div>
      ),
    },
    {
      title: "삭제",
      render: (_, record) => (
        <div>
          <SButton>삭제</SButton>
        </div>
      ),
    },
  ];
  const columnsF = [
    {
      title: "총 주문금액",
      dataIndex: "price",
      render: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {totalOrderAmount.toLocaleString()} 원
        </div>
      ),
    },
    {
      title: "총 배송비",
      dataIndex: "sh",
    },
    {
      title: "결제예정금액",
      dataIndex: "total",
      render: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <Count name="productCnt" setCount={setCount} count={count} /> */}
          {/* 수량 카운트 컴포넌트를 이동한 위치 */}
        </div>
      ),
    },
  ];
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Common.color.p900,
          },
          components: {
            Table: {
              headerBg: "none",
              headerColor: Common.color.p500,
            },
          },
        }}
      >
        <TableCustom
          // rowSelection={rowSelection}
          columns={columnsH}
          dataSource={PCartData}
          pagination={false}
        />
        {/* {showModal && <RvModal onClose={handleCloseModal} />} */}
      </ConfigProvider>
      <div
        style={{
          width: "100%",
          height: "1px",
          background: `${Common.color.p900}`,
        }}
      ></div>
      <TotalPayWrap>
        <TotalTh>
          <PB20>결제금액</PB20>
          <PB20>배송비</PB20>
          <PB20></PB20>
          <PB20>예상결제금액</PB20>
        </TotalTh>
        <TotalTh>
          <PB20>{totalOrderAmount.toLocaleString()} 원</PB20>
          <PB20>0원</PB20>
          <PB20>=</PB20>
          <PB20>{totalOrderAmount.toLocaleString()} 원</PB20>
        </TotalTh>
      </TotalPayWrap>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <BigButton
          style={{
            background: `${Common.color.b900}`,
            color: ` ${Common.color.p000}`,
            border: "none",
            fontSize: "16px",
            fontWeight: "normal",
          }}
          onClick={() => navigate(`/paycom`)}
        >
          주문하기
        </BigButton>
      </div>
    </div>
  );
};

export default PickUpCart;
