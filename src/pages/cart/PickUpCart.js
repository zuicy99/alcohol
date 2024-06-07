import { ConfigProvider } from "antd";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { deleteAllCart, deleteCart } from "../../api/cartApi";
import { cartCountState } from "../../atom/CountState";
import OptiPlaceholder from "../../components/image-opti/OptiPlaceholder";
import OptiWireframe from "../../components/image-opti/OptiWireframe";
import { Common } from "../../styles/CommonCss";
import { PB20 } from "../../styles/basic";
import { TotalPayWrap, TotalTh } from "../../styles/cart/CartTableCss";
import { BigButton, SButton } from "../../styles/common/reviewProductCss";
import { TableCustom } from "../../styles/common/tableCss";

const PickUpCart = ({ pickupData }) => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useRecoilState(cartCountState);
  const [showModal, setShowModal] = useState(false);
  // const [count, setCount] = useState(1);
  console.log("cart-component : ", pickupData);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const deleteMutate = useMutation({
    mutationFn: deleteId => deleteCart({ deleteId }),
    onSuccess: () => {
      alert("장바구니를 제거하었습니다.");
    },
  });
  const deleteAllMutate = useMutation({
    mutationFn: () => deleteAllCart(),
    onSuccess: () => {
      alert("장바구니를 모두 제거하었습니다.");
    },
  });

  const handleClickDelete = record => {
    // console.log("Click");
    // console.log("id : ", record.id);
    // console.log("amount : ", record.amount);
    const deleteId = record.id;

    deleteMutate.mutate(deleteId);
    // console.log(record.stock);
    // console.log(record.amount);
    // console.log(record.price);
  };

  const handleClickDeleteAll = () => {
    deleteAllMutate.mutate();
  };

  const calculatePaymentAmount = (price, amount) => {
    return (price * amount).toLocaleString(); // 콤마를 추가하여 반환합니다.
  };

  const totalOrderAmount = pickupData => {
    let total = 0;

    if (pickupData) {
      pickupData.forEach(item => {
        total += item.price * item.amount;
      });
    }

    return total;
  };
  const columnsH = [
    {
      title: "",
      dataIndex: "key",
    },
    {
      title: "이미지",
      dataIndex: "pic",
      render: (text, record) => (
        // <img style={{ width: "80px" }} src="/images/moon.jpg" alt="리뷰 작성" />
        <OptiPlaceholder
          style={{ width: "80px" }}
          width={80}
          height={80}
          src={record?.picture}
          alt="리뷰 작성"
          placeholder={
            <div>
              <OptiWireframe width={80} height={80} />
            </div>
          }
        />
      ),
    },
    {
      title: "상품정보",
      dataIndex: "name",
    },
    {
      title: "매장",
      dataIndex: "marketname",
    },
    {
      title: "수량",
      dataIndex: "amount",
      render: (text, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {record.amount}
        </div>
      ),
    },
    {
      title: "결제금액",
      dataIndex: "price",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {record.price.toLocaleString()}원
        </div>
      ),
    },
    {
      title: "삭제",
      render: (_, record) => (
        <div>
          <SButton onClick={() => handleClickDelete(record)}>삭제</SButton>
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
          dataSource={pickupData}
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
          <PB20>{totalOrderAmount(pickupData).toLocaleString()} 원</PB20>

          <PB20>0원</PB20>
          <PB20>=</PB20>
          <PB20>{totalOrderAmount(pickupData).toLocaleString()} 원</PB20>
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
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "normal",
          }}
          onClick={() => handleClickDeleteAll()}
        >
          장바구니 모두 빼기
        </BigButton>
      </div>
    </div>
  );
};

export default PickUpCart;
