import React from "react";
import { FooterWrap } from "../styles/basic/HeaderWrapCss";
import { Link } from "react-router-dom";

const BasicFooter = () => {
  return (
    <FooterWrap>
      <div className="footer-inner">
        <div className="left-info">
          {/* <div className="left-logo"> */}
          <Link to="/">
            <h1>ALCHOHOL</h1>
            <h1>HOLIC</h1>
          </Link>
          {/* </div> */}
          {/* <ul className=  "company-nav">
            <li>
              <a href="/paycom">
                <p>매장안내</p>
              </a>
              <p className="l">|</p>
            </li>
            <li>
              <a href="/">
                <p>공지사항</p>
              </a>
              <p className="l">|</p>
            </li>
            <li>
              <a href="/">
                <p>개인정보처리방침</p>
              </a>
              <p className="l">|</p>
            </li>
            <li>
              <a href="/">
                <p>이용약관</p>
              </a>
            </li>
          </ul> */}
          <div className="footer-info-wrap">
            <div className="footer-maker">
              <p>
                <strong>Alchohol-holic Github Link</strong>
              </p>
              <a href="https://github.com/zuicy99/alcohol-holic" target="blank">
                <img
                  src={process.env.PUBLIC_URL + "/images/footer/github.png"}
                  alt=""
                />
              </a>
            </div>
            <div className="left-p">
              <div className="footer-writer">
                <p>
                  <strong>손재학</strong> (hakjaeson)
                </p>
                <div className="d-link">
                  <a href="https://github.com/hakjaeson" target="blank">
                    <img
                      src={process.env.PUBLIC_URL + "/images/footer/github.png"}
                      alt=""
                    />
                  </a>
                  <a href="https://github.com/hakjaeson" target="blank">
                    <img
                      src={process.env.PUBLIC_URL + "/images/footer/notion.png"}
                      alt=""
                      className="notion"
                    />
                  </a>
                </div>
              </div>

              <div className="footer-writer">
                <p>
                  <strong>김주영</strong> (zuicy99)
                </p>
                <div className="d-link">
                  <a href="https://github.com/hakjaeson" target="blank">
                    <img
                      src={process.env.PUBLIC_URL + "/images/footer/github.png"}
                      alt=""
                    />
                  </a>
                  <a href="https://github.com/hakjaeson" target="blank">
                    <img
                      src={process.env.PUBLIC_URL + "/images/footer/notion.png"}
                      alt=""
                      className="notion"
                    />
                  </a>
                </div>
              </div>
              {/* <p>주식회사 그린 | 대표 그린아트 | 대구광역시 중구</p>
            <p>사업자번호 : 105-87-52430사업자정보확인</p>
            <p>통신판매번호 : 제 2011-서울마포-1083호</p>
            <p>개인정보보호책임자 : 그린아트</p>
            <p>개인정보보호책임자 : 그린아트</p>
            <p>대표전화(유료) : 02-1644-7710 | 이메일 : aaaa@gmail.com</p> */}
            </div>
            <div className="right-info">
              <div>
                <p>
                  <strong> &copy; Copyright hakjaeson and zuicy99</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default BasicFooter;
