import styled from "@emotion/styled/macro";
import { Common } from "../CommonCss";

export const HeaderWrap = styled.div`
  width: 100%;
  position: relative;
  height: 23rem;
  background-color: ${Common.color.b900};
  padding: 5rem;
  .header-inner {
    width: 130rem;
    margin: 0 auto;
  }
  .topNav {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
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
      margin: 0 0.4rem;
      color: ${Common.color.p000};
      font-size: 1.3rem;
    }
  }
  .rigth-bottom-nav {
    display: flex;
    justify-content: end;
    align-items: center;
    /* margin-top: 5px; */
    img {
      /* margin-left: 18px; */
      margin: 2rem 0 0 1.8rem;
    }
  }
`;

export const FooterWrap = styled.div`
  position: relative;
  display: flex;
  /* height: 233px; */
  background-color: ${Common.color.b900};
  padding: 5rem;
  justify-content: space-between;
  h1 {
    color: ${Common.color.p000};
  }
  .footer-inner {
    width: 130rem;
    margin: 0 auto;
    height: 35rem;
  }
  .company-nav {
    display: flex;
    margin: 3rem 0;
    a {
      color: ${Common.color.p000};
      font-size: 1.3rem;
      font-weight: 600;
    }
    li {
      display: flex;
    }
    .l {
      margin: 0 1rem;
      color: ${Common.color.p000};
      font-size: 1.3rem;
      cursor: default;
    }
  }
  .left-p {
    font-size: 1.3rem;
    color: ${Common.color.p100};
  }
  .right-info {
    display: flex;
    margin-right: 5rem;
    align-items: center;
    p {
      color: ${Common.color.p100};
      margin: 1rem 0;
      font-size: 1.3rem;
    }
  }
`;
