import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router";
import { Common } from "../../styles/CommonCss";
import { PB20, PB30 } from "../../styles/basic";
import {
  BigButton,
  MarginB20,
  MarginB40,
  MediumButton,
} from "../../styles/common/reviewProductCss";
import { CloseBt } from "../../styles/detail/mapModalWrapCss";
import {
  CartModalStyle,
  CartModalWrap,
  CartModalinfo,
} from "../../styles/modalCss";

export const BasicModal = ({ onClose, titleNm, refreshData }) => {
  return (
    <CartModalStyle>
      <CartModalWrap>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <CloseBt onClick={onClose}>
            <img src={process.env.PUBLIC_URL + "/images/close2.svg"}></img>
          </CloseBt>
        </div>
        <CartModalinfo>
          <PB20>{titleNm}에 상품이 담겼습니다.</PB20>
          <PB20>바로 가시겠습니까?</PB20>
          <MarginB40 />
          <BigButton
            style={{
              background: `${Common.color.p000}`,
              border: `1px solid ${Common.color.p300}`,
            }}
            onClick={onClose}
          >
            닫기
          </BigButton>
        </CartModalinfo>
      </CartModalWrap>
    </CartModalStyle>
  );
};

// =========================================================================
// 로그인이 안됐을 시 나오는 모달 이동경로 로그인page
export const NotSigninModal = ({ onClose }) => {
  const navigate = useNavigate();
  const handleGoSignin = () => {
    onClose();
    navigate(`/sign/in`);
  };

  const SigninModalStyle = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: -10%;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.7); */
    z-index: 999;
  `;
  const SigninModalWrap = styled.div`
    position: relative;
    min-width: 600px;
    height: 400px;
    background-color: ${Common.color.p100};
    padding: 20px;
    margin: 0 auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid ${Common.color.p300};
  `;
  const SigninModalinfo = styled.div`
    width: 100%;
    position: relative;
    text-align: center;
    justify-content: center;
    margin: 30px 0 20px 0;

    p {
      color: ${Common.color.p900};
    }
  `;
  return (
    <SigninModalStyle>
      <SigninModalWrap>
        <SigninModalinfo>
          <MarginB40 />
          <MarginB20 />
          <PB30>로그인이 필요한 서비스입니다</PB30>
          <MarginB20 />
          <PB30>바로 가시겠습니까?</PB30>
          <MarginB40 />
          <MarginB40 />
          <MediumButton
            style={{
              background: `${Common.color.b900}`,
              border: `1px solid ${Common.color.p300}`,
              fontSize: "16px",
              color: `${Common.color.p000}`,
              marginRight: "10px",
            }}
            onClick={handleGoSignin}
          >
            바로가기
          </MediumButton>
          <MediumButton
            style={{
              // background: `${Common.color.b900}`,
              border: `1px solid ${Common.color.p300}`,
              fontSize: "16px",
              marginLeft: "10px",
            }}
            onClick={onClose}
          >
            아니요
          </MediumButton>
        </SigninModalinfo>
      </SigninModalWrap>
    </SigninModalStyle>
  );
};
