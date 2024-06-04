import { ConfigProvider } from "antd";
import React, { useState } from "react";
import { getReviewList } from "../../api/reviewApi";
import { RvDelete } from "../../components/mypage/RvModal";
import useApiLoader from "../../hooks/useApiLoader";
import { Common } from "../../styles/CommonCss";
import { BasicBtR } from "../../styles/basic/basicBt";
import { StarRev } from "../../styles/common/StarCss";
import { TableCustom } from "../../styles/common/tableCss";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const initState = [
  {
    id: 1, // id 필드 추가
    name: "더 페이머스 그라우스 700ml",
    writing: "져라ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    grade: 4,
    picture: "/images/alcohol/01.jpg",
  },
];

const MyReview = () => {
  const [myReviewData, setmyReviewData] = useState(initState);
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const { useProductLoader } = useApiLoader();
  useProductLoader(getReviewList, setmyReviewData);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReview(null);
  };

  const handleShowModal = id => {
    const review = myReviewData.find(item => item.id === id);
    setSelectedReview(review);
    setShowModal(true);
    console.log("모달로 전달되는 코드 값:", id);
  };

  const fetchData = () => {
    getReviewList({
      successFn: data => {
        setmyReviewData(data);
      },
      failFn: data => {
        alert("most 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 시도");
      },
    });
  };

  const columns = [
    {
      title: "이미지",
      dataIndex: "name",
      render: (text, record) => (
        <div>
          <img
            style={{ width: "80px", marginBottom: "10px" }}
            src={process.env.PUBLIC_URL + record.picture}
            alt="리뷰 작성"
          />
          <StarRev>
            {Array.from({ length: record.grade }, (_, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + "/images/star.png"}
                alt="star"
              />
            ))}
          </StarRev>
        </div>
      ),
    },
    {
      title: "제품명",
      dataIndex: "productNm",
      render: (text, record) => (
        <div>
          <p>{record.name}</p>
        </div>
      ),
    },
    {
      title: "내용",
      dataIndex: "content",
      render: (text, record) => (
        <div
          style={{
            width: "600px",
            wordWrap: "break-word",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>{record.writing}</p>
        </div>
      ),
    },
    {
      title: "리뷰삭제",
      render: (text, record) => (
        <BasicBtR onClick={() => handleShowModal(record.id)}>
          리뷰 삭제
        </BasicBtR>
      ),
    },
  ];

  return (
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
        columns={columns}
        dataSource={myReviewData}
        pagination={false}
      />
      {showModal && selectedReview && (
        <RvDelete
          onClose={handleCloseModal}
          code={selectedReview}
          refreshData={fetchData}
        />
      )}
    </ConfigProvider>
  );
};

export default MyReview;
