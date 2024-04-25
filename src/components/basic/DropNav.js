import styled from "@emotion/styled/macro";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Common } from "../../styles/CommonCss";
import { DropStyle, DropWrap } from "../../styles/basic/dropNavCss";

const DropNav = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);

  const [activeSide, setActiveSide] = useState(0);

  const handleMouseEnter1 = () => {
    setIsDropdownOpen1(true);
  };
  const handleMouseLeave1 = () => {
    setIsDropdownOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setIsDropdownOpen2(true);
  };
  const handleMouseLeave2 = () => {
    setIsDropdownOpen2(false);
  };

  const handleMouseEnter3 = () => {
    setIsDropdownOpen3(true);
  };
  const handleMouseLeave3 = () => {
    setIsDropdownOpen3(false);
  };

  const handleMouseEnter4 = () => {
    setIsDropdownOpen4(true);
  };
  const handleMouseLeave4 = () => {
    setIsDropdownOpen4(false);
  };

  const handleMouseEnter5 = () => {
    setIsDropdownOpen5(true);
  };
  const handleMouseLeave5 = () => {
    setIsDropdownOpen5(false);
  };

  return (
    <DropWrap>
      <DropStyle
        isOpen={isDropdownOpen1}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <a href="/product?side=1">
          <h1>WHISKEY</h1>
        </a>

        <div className="dropdown-content">
          <Link to="/product?side=1">ALL</Link>
          <Link to="/product?side=2">싱글몰트</Link>
          <Link to="/product?side=3">브랜디드</Link>
          <Link to="/product?side=4">버번</Link>
        </div>
      </DropStyle>
      <DropStyle
        isOpen={isDropdownOpen2}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <a href="/WINE">
          <h1>WINE</h1>
        </a>
        <div className="dropdown-content">
          <Link to="/product/side=1">ALL</Link>
          <Link to="/product/side=2">레드 와인</Link>
          <Link to="/product/side=3">화이트 와인</Link>
          <Link to="/product/side=4">스파클링 와인</Link>
          <Link to="/product/side=5">로제 와인</Link>
        </div>
      </DropStyle>
      <DropStyle
        isOpen={isDropdownOpen3}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
      >
        <a href="/LIQUEUR">
          <h1>LIQUEUR</h1>
        </a>
      </DropStyle>

      <DropStyle
        isOpen={isDropdownOpen5}
        onMouseEnter={handleMouseEnter5}
        onMouseLeave={handleMouseLeave5}
      >
        <a href="/BRANDY">
          <h1>BRANDY</h1>
        </a>
        <div className="dropdown-content">
          <Link to="/product/clean">ALL</Link>
          <Link to="/product/clean">꼬냑</Link>
          <Link to="/product/clean">깔바도스</Link>
          <Link to="/product/clean">아르마냑</Link>
        </div>
      </DropStyle>
    </DropWrap>
  );
};

export default DropNav;
