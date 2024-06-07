import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeSideState } from "../../atom/activeSideState";
import SideBt from "../../components/basic/SideBt";
import SideSubTitle from "../../components/basic/SideSubTitle";
import SideTitle from "../../components/basic/SideTitle";
import BasicLayout from "../../layout/BasicLayout";
import { MyWrap } from "../../styles/basic/sideWrap";
import { SideBar } from "../../styles/product/sideBarCss";

const MyPage = () => {
  const navigate = useNavigate();
  const [activeSide, setActiveSide] = useRecoilState(activeSideState);
  const handleClick = sidenId => {
    setActiveSide(sidenId);
    console.log("선택된 사이드바", sidenId);
  };

  return (
    <BasicLayout>
      <MyWrap>
        <SideBar>
          <div style={{ cursor: "pointer" }}>
            <SideTitle
              sideTitle="마이페이지"
              // onClick={() => navigate(`mymain`)}
            />
          </div>

          <hr />
          <div className="side-nav">
            <SideBt
              sidenNm="마이페이지"
              sidenId={10}
              active={activeSide === "info"}
              onClick={() => {
                navigate("info");
                handleClick("info");
              }}
            />
            <SideSubTitle sideSubTitle="쇼핑정보" />
            <SideBt
              sidenNm="주문배송조회"
              sidenId={0}
              active={activeSide === "order"}
              onClick={() => {
                navigate("order");
                handleClick("order");
              }}
            />
            <SideBt
              sidenNm="상품리뷰"
              sidenId={1}
              active={activeSide === "review"}
              onClick={() => {
                navigate("review");
                handleClick("review");
              }}
              // onClick={() => handleClick(1)}
            />

            {/* --------------------------------------------------------------------- */}
            <SideSubTitle sideSubTitle="상품정보" />
            <SideBt
              sidenNm="위시리스트"
              sidenId={2}
              active={activeSide === "wish"}
              onClick={() => {
                navigate("wish");
                handleClick("wish");
              }}
            />
          </div>
        </SideBar>
        <Outlet />
      </MyWrap>
    </BasicLayout>
  );
};

export default MyPage;
