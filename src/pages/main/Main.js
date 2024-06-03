import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  getMostProduct,
  getNewProduct,
  getRandProduct,
} from "../../api/mainApi";
import CardSet from "../../components/main/CardSet";
import MainTitle from "../../components/main/MainTitle";
import { NotSigninModal } from "../../components/modal/BasicModal";
import useApiLoader from "../../hooks/useApiLoader";
import useCustomLogin from "../../hooks/useCustomLogin";
import BasicLayout from "../../layout/BasicLayout";
import { Common } from "../../styles/CommonCss";
import { MainWrap } from "../../styles/main/mainCss";
import { PickUpCard } from "../../styles/main/pickupCardCss";
import { ProListWrap } from "../../styles/product/proWrapCss";

const initState = [
  {
    code: 0,
    name: "",
    maincategory: "",
    subcategory: "",
    content: "",
    aroma: "",
    taste: "",
    finish: "",
    nation: "",
    picture: "",
    price: 0,
  },
];

const Main = () => {
  const navigate = useNavigate();
  const { isLogin } = useCustomLogin();
  // -- api 호출
  const [mostData, setMostData] = useState();
  const [newdata, setNewData] = useState();
  const [randdata, setRandData] = useState();

  const { useProductLoader } = useApiLoader();

  useProductLoader(getRandProduct, setRandData);
  useProductLoader(getMostProduct, setMostData);
  useProductLoader(getNewProduct, setNewData);

  // -- signin 모달
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const goSignin = _path => {
    if (!isLogin) {
      setShowModal(true);
      return;
    }
    navigate(_path);
  };

  // useEffect(() => {
  //   getRandProduct({
  //     successFn: data => {
  //       setRandData(data); // 성공 시 데이터 설정
  //     },
  //     failFn: data => {
  //       alert("getRandProduct 실패");
  //     },
  //     errorFn: data => {
  //       alert("서버상태 불안정 다음에 getRandProduct 시도");
  //     },
  //   });
  // }, []);

  return (
    <>
      {showModal && <NotSigninModal onClose={handleCloseModal} />}
      <BasicLayout>
        <MainWrap>
          <div className="main-header">
            <p>ALCHOHOL HOLIC</p>
            <div
              style={{
                display: "flex",
                position: "relative",
                marginTop: "35px",
              }}
            >
              <ProListWrap>
                <div style={{ width: "100%" }}></div>

                <div></div>
              </ProListWrap>
            </div>
          </div>
          <img src="./images/banner.svg"></img>
          <PickUpCard>
            <a
              onClick={() => goSignin(`pick/delivery`)}
              style={{ background: Common.color.p200 }}
            >
              <div className="pickCard">
                <b>배달 & 배송</b>
                <p>자택 배달 & 배송 서비스</p>
              </div>
            </a>
            <a
              onClick={() => goSignin(`/pick/pick`)}
              style={{
                background: Common.color.f900,
                color: `${Common.color.p000}`,
              }}
            >
              <div className="pickCard">
                <b>매장픽업</b>
                <p>
                  주변 매장 & 편의점
                  <br />
                  예약 및 픽업
                </p>
              </div>
            </a>
          </PickUpCard>
          <div style={{ padding: "30px 0" }}>
            <MainTitle mainText="오늘의 추천술" />
            <CardSet data={randdata} />
          </div>
          <div style={{ padding: "30px 0" }}>
            <MainTitle mainText="신제품 출시" />
            <CardSet data={newdata} />
          </div>
          <div style={{ padding: "30px 0" }}>
            <MainTitle mainText="HOT 인기제품" />
            <CardSet data={mostData} />
          </div>
        </MainWrap>
      </BasicLayout>
    </>
  );
};

export default Main;
