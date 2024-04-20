import styled from "@emotion/styled/macro";
import React from "react";

const SideTitle = ({ sideTitle }) => {
  const SideTitleStyle = styled.div`
    margin: 0 0 10px 0;
    p {
      font-size: 30px;
      font-weight: bold;
    }
  `;
  return (
    <SideTitleStyle>
      <p>{sideTitle}</p>
    </SideTitleStyle>
  );
};

export default SideTitle;
