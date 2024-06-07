import styled from "@emotion/styled/macro";
import { Common } from "./CommonCss";

export const CartModalStyle = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.7); */
  z-index: 999;
`;
export const CartModalWrap = styled.div`
  position: relative;
  min-width: 350px;
  height: 250px;
  background-color: ${Common.color.p100};
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
export const CartModalinfo = styled.div`
  width: 100%;
  /* background-color: aquamarine; */
  position: relative;
  /* display: flex; */
  text-align: center;
  justify-content: center;
  margin: 30px 0 20px 0;
`;
