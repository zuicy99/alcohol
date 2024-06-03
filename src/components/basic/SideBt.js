import styled from "@emotion/styled/macro";
import React from "react";
import { Common } from "../../styles/CommonCss";

const SideBt = ({ sidenNm, sideId, active, onClick }) => {
  console.log(`active ${active}`);
  const SideBtStyled = styled.button`
    border: none;
    background: none;
    color: ${active ? Common.color.f900 : Common.color.p900};
    font-weight: ${active ? "bold" : "normal"};
    text-decoration: ${active ? "underline" : "none"};
    margin-top: 20px;
    cursor: pointer;
  `;
  // console.log("사이드 :", sidenNm);
  return (
    <div>
      {sidenNm !== typeof undefined ? (
        <SideBtStyled active={active} onClick={onClick}>
          {sidenNm}
        </SideBtStyled>
      ) : null}
    </div>
  );
};

export default SideBt;
