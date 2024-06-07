import { ConfigProvider } from "antd";
import React, { useState } from "react";
import { getPickUp } from "../../api/orderApi";
import useApiLoader from "../../hooks/useApiLoader";
import { Common } from "../../styles/CommonCss";
import { TableCustom } from "../../styles/common/tableCss";
import RvModal from "../mypage/RvModal";

const initState = [
  {
    alcoholname: "",
    marketname: "",
    amount: 0,
    price: 0,
    delivery: "",
    division: "",
    address: "",
    purchaseday: "",
    picture: "",
  },
];

const OrderPickPage = () => {
  const [orderData, setOrderData] = useState(initState);
  const [showModal, setShowModal] = useState(false);
  const { useProductLoader } = useApiLoader();

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  useProductLoader(getPickUp, setOrderData);

  const columns = [
    {
      title: "이미지",
      dataIndex: "picture",
      render: (text, record) => (
        <img style={{ width: "80px" }} src={record.picture} alt="리뷰 작성" />
      ),
    },
    {
      title: "제품명",
      dataIndex: "alcoholname",
    },
    {
      title: "주문일자",
      dataIndex: "purchaseday",
    },
    {
      title: "매장명",
      dataIndex: "marketname",
    },
    {
      title: "주문방식",
      dataIndex: "delivery",
    },
    {
      title: "주소",
      dataIndex: "address",
    },
    {
      title: "수량",
      dataIndex: "amount",
    },
    {
      title: "결제금액",
      dataIndex: "price",
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
          columns={columns}
          dataSource={orderData}
          pagination={false}
        />
        {showModal && <RvModal onClose={handleCloseModal} />}
      </ConfigProvider>
    </div>
  );
};

export default OrderPickPage;
