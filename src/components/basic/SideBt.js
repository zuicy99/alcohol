import styled from "@emotion/styled/macro";
import React from "react";
import { Common } from "../../styles/CommonCss";

const SideBt = ({ sidenNm, active, onClick }) => {
  const SideBtStyled = styled.button`
    border: none;
    background: none;
    color: ${active ? Common.color.f900 : Common.color.p900};
    font-weight: ${active ? "bold" : "normal"};
    text-decoration: ${active ? "underline" : "none"};
    margin-top: 20px;
    cursor: pointer;
  `;
  return (
    <div>
      <SideBtStyled onClick={onClick}>{sidenNm}</SideBtStyled>
    </div>
  );
};

export default SideBt;
