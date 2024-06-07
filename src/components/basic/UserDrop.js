import React, { useEffect, useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import { Common } from "../../styles/CommonCss";
import {
  DropdownContent,
  DropdownItem,
  DropdownWrapper,
  ItemBack,
} from "../../styles/basic/userDropCss";

import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { getUser } from "../../api/mainApi";
import { activeSideState } from "../../atom/activeSideState";
import { userState } from "../../atom/userState";
import { NotSigninModal } from "../modal/BasicModal";

const UserDrop = () => {
  const [open, setOpen] = useState(false);
  const [activeSide, setActiveSide] = useRecoilState(activeSideState);

  const { isLogin, doLogout } = useCustomLogin();
  const navigate = useNavigate();

  // -------------로그인 안 됐을 시 띄우는 모달--------------
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const goSignin = _path => {
    if (!isLogin) {
      setShowModal(true); // 모달 열기
      return;
    }
    navigate(_path);
    handleActive(_path);
  };
  // ---------------------end--------------------------------
  const handleActive = sideId => {
    setActiveSide(sideId);
    navigate(`/mypage/${sideId}`);
  };

  const [userData, setUserData] = useRecoilState(userState);
  // const [userData, setUserData] = useState();

  useEffect(() => {
    if (isLogin) {
      getUser({
        successFn: data => {
          setUserData(data); // 성공 시 데이터 설정
        },
        failFn: data => {
          alert("getUser 실패");
        },
        errorFn: data => {
          alert("서버상태 불안정 다음에 getUser 시도");
        },
      });
    }
  }, [isLogin]);

  return (
    <>
      {showModal && <NotSigninModal onClose={handleCloseModal} />}

      <DropdownWrapper
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            goSignin("info");
          }}
        >
          <img src={process.env.PUBLIC_URL + "/images/user.png"} />
        </a>

        <DropdownContent isOpen={open}>
          {isLogin ? (
            <>
              <div className="profile">
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "5px" }}>반갑습니다</p>
                  <p
                    style={{
                      marginRight: "3px",
                      fontWeight: "600",
                    }}
                  >
                    {userData[0].nickname}
                  </p>
                  <p>님</p>
                </div>

                <p>현재 배송지</p>
                <p style={{ fontWeight: "bold" }}>{userData[0].address}</p>
                <p style={{ fontWeight: "bold" }}>{userData[0].address2}</p>
              </div>
              <div className="line"></div>
              <ItemBack>
                <DropdownItem onClick={() => handleActive("info")}>
                  마이페이지
                </DropdownItem>
                <DropdownItem onClick={() => handleActive("order")}>
                  주문/배송
                </DropdownItem>
                <DropdownItem onClick={() => handleActive("review")}>
                  리뷰작성
                </DropdownItem>
                <DropdownItem onClick={() => handleActive("wish")}>
                  위시리스트
                </DropdownItem>
                {/* <DropdownItem href="#logout">고객센터</DropdownItem> */}
                <DropdownItem
                  onClick={doLogout}
                  style={{ color: Common.color.p300 }}
                >
                  로그아웃
                </DropdownItem>
              </ItemBack>
            </>
          ) : (
            <>
              <div className="profile">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontWeight: "bold" }}>
                    로그인이 필요한 서비스 입니다.
                  </p>
                  <p
                    style={{
                      marginRight: "3px",
                      fontWeight: "600",
                    }}
                  ></p>
                </div>
              </div>
            </>
          )}
        </DropdownContent>
      </DropdownWrapper>
    </>
  );
};

export default UserDrop;
