import { ConfigProvider } from "antd";
import React, { useState } from "react";
import { Common } from "../../styles/CommonCss";
import { TableCustom } from "../../styles/common/tableCss";
import { BasicBtR } from "../../styles/basic/basicBt";
import RvModal from "../../components/mypage/RvModal";
import { OrderPTableData } from "../../mock/OrderTableData";

const OrderPickPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const columns = [
    {
      title: "이미지",
      dataIndex: "name",
      render: () => (
        <img style={{ width: "80px" }} src="/images/moon.jpg" alt="리뷰 작성" />
      ),
    },
    {
      title: "제품명",
      dataIndex: "productNm",
    },
    {
      title: "주문일자",
      dataIndex: "date",
    },
    {
      title: "매장명",
      dataIndex: "storeNm",
    },
    {
      title: "주문번호",
      dataIndex: "orderNumber",
    },
    {
      title: "주문방식",
      dataIndex: "order",
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
          dataSource={OrderPTableData}
          pagination={false}
        />
        {showModal && <RvModal onClose={handleCloseModal} />}
      </ConfigProvider>
    </div>
  );
};

export default OrderPickPage;
