import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropNav from "../components/basic/DropNav";
import NavDropdown from "../components/basic/DropNavNew";
import UserDrop from "../components/basic/UserDrop";
import useCustomLogin from "../hooks/useCustomLogin";
import useCustomMove from "../hooks/useCustomMove";
import { Common } from "../styles/CommonCss";
import { NotSigninModal } from "../components/modal/BasicModal";
import { HeaderWrap } from "../styles/basic/HeaderWrapCss";

const BasicHeader = () => {
  const { moveToLogin } = useCustomMove();
  const { doLogout, loginState, isLogin } = useCustomLogin();
  const navigate = useNavigate();
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

  return (
    <>
      {showModal && <NotSigninModal onClose={handleCloseModal} />}
      <HeaderWrap>
        <div className="header-inner">
          <div className="topNav">
            <div className="left-logo">
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + `/images/logo.svg`}
                  style={{ width: "15rem" }}
                />
              </Link>
            </div>
            <div>
              <div className="right-top-nav">
                {isLogin ? (
                  <Link onClick={doLogout}>
                    <p>로그아웃</p>
                  </Link>
                ) : (
                  <>
                    <Link to="/sign/in">
                      <p>로그인</p>
                    </Link>
                    <p>|</p>
                    <Link to="/sign/up">
                      <p>회원가입</p>
                    </Link>
                  </>
                )}
                <p style={{ color: Common.color.f900 }}>|</p>

                <Link onClick={() => goSignin("/page1")}>
                  <p>고객센터</p>
                </Link>
              </div>
              <div className="rigth-bottom-nav">
                <Link to="/storeMap">
                  <img
                    src={process.env.PUBLIC_URL + "/images/map.png"}
                    style={{ width: "28px", height: "auto" }}
                    alt="map"
                  />
                </Link>

                {/* 해당 카트페이지 오류 수정시 goSignin 넣어주세요  */}
                <Link to="/cart?basket=pickup">
                  <img
                    src={process.env.PUBLIC_URL + "/images/bag.png"}
                    style={{ width: "26px", height: "auto" }}
                    alt="bag"
                  />
                </Link>
                <Link onClick={() => goSignin("mypage/wish")}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/heart.png"}
                    style={{ width: "26px", height: "auto" }}
                    alt="heart"
                  />
                </Link>

                <UserDrop />
              </div>
            </div>
          </div>

          <DropNav />
          <NavDropdown />
        </div>
      </HeaderWrap>
    </>
  );
};

export default BasicHeader;
