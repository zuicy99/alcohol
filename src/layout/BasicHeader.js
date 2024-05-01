import styled from "@emotion/styled/macro";
import React, { useEffect, useState } from "react";
import { Common } from "../styles/CommonCss";
import { Link } from "react-router-dom";
import DropNav from "../components/basic/DropNav";
import UserDrop from "../components/basic/UserDrop";
import useCustomMove from "../hooks/useCustomMove";
import NavDropdown from "../components/basic/DropNavNew";
import useCustomLogin from "../hooks/useCustomLogin";
import { useRecoilState } from "recoil";
import { atomSignState } from "../recoil/atom/loginState";

const BasicHeader = () => {
  const { moveToLogin } = useCustomMove();

  const { doLogout, loginState, isLogin } = useCustomLogin();

  const HeaderWrap = styled.div`
    position: relative;
    height: 233px;
    background-color: ${Common.color.b900};
    padding: 50px;
    .topNav {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    .left-logo {
      display: flex;
      /* align-items: center; */

      h1 {
        align-items: center;
        color: ${Common.color.p000};
      }
    }
    .right-top-nav {
      display: flex;
      p {
        margin: 0 4px;
        color: ${Common.color.p000};
        font-size: 13px;
      }
    }
    .rigth-bottom-nav {
      display: flex;
      justify-content: end;
      align-items: center;
      /* margin-top: 5px; */
      img {
        /* margin-left: 18px; */
        margin: 20px 0 0 18px;
      }
    }
  `;
  return (
    <HeaderWrap>
      <div className="topNav">
        <div className="left-logo">
          <a href="/">
            <h1>ALCHOHOL</h1>
            <h1>FREE</h1>
          </a>
        </div>
        <div>
          <div className="right-top-nav">
            {/* {console.log("아", loginState, isLogin)} */}
            {isLogin ? (
              <Link onClick={doLogout}>
                <p>로그아웃</p>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <p>로그인</p>
                </Link>
                <p>|</p>
                <Link to="/signup">
                  <p>회원가입</p>
                </Link>
              </>
            )}

            <p style={{ color: Common.color.f900 }}>|</p>
            <Link to="/">
              <p>고객센터</p>
            </Link>
          </div>
          <div className="rigth-bottom-nav">
            <Link to="/storeMap">
              <img
                src={process.env.PUBLIC_URL + "/images/map.png"} // 수정된 부분
                style={{ width: "28px", height: "auto" }}
                alt="map"
              />
            </Link>
            <Link to="/cart">
              <img
                src={process.env.PUBLIC_URL + "/images/bag.png"} // 수정된 부분
                style={{ width: "26px", height: "auto" }}
                alt="bag"
              />
            </Link>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/heart.png"} // 수정된 부분
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
    </HeaderWrap>
  );
};

export default BasicHeader;
