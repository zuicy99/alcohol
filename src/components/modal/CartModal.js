import { Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Common } from "../../styles/CommonCss";
import { PB20 } from "../../styles/basic";
import { BigButton, MarginB40 } from "../../styles/common/reviewProductCss";
import { CloseBt } from "../../styles/detail/mapModalWrapCss";
import {
  CartModalStyle,
  CartModalWrap,
  CartModalinfo,
} from "../../styles/modalCss";
const { TextArea } = Input;

export const CartModal = ({ onClose }) => {
  const navigate = useNavigate();
  const onChange = e => {
    console.log("Change:", e.target.value);
  };
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePlaceClick = index => {
    setSelectedIndex(index);
  };

  return (
    <CartModalStyle>
      <CartModalWrap>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <CloseBt onClick={onClose}>
            <img src={process.env.PUBLIC_URL + "/images/close2.svg"}></img>
          </CloseBt>
        </div>
        <CartModalinfo>
          <PB20>장바구니에 상품이 담겼습니다.</PB20>
          <PB20>바로 가시겠습니까?</PB20>
          <MarginB40 />
          <BigButton
            style={{
              background: `${Common.color.p000}`,
              border: `1px solid ${Common.color.p300}`,
            }}
            onClick={onClose}
          >
            장바구니 바로가기
          </BigButton>
        </CartModalinfo>
      </CartModalWrap>
    </CartModalStyle>
  );
};

export default CartModal;
