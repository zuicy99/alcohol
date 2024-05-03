import styled from "@emotion/styled/macro";
import React from "react";
import { Common } from "../../styles/CommonCss";
import { Button, Flex, Form, Input, Rate } from "antd";
import { BasicBtR } from "../../styles/basic/basicBt";
import { HeartOutlined } from "@ant-design/icons";
import {
  ModalContent,
  ModalWrap,
  RvModalStyle,
} from "../../styles/common/revModalCss";
const { TextArea } = Input;

const RvModal = ({ onClose, code }) => {
  const onChange = e => {
    console.log("Change:", e.target.value);
  };

  // postReviewcheck

  return (
    <RvModalStyle>
      <ModalWrap>
        <ModalContent>
          <div className="modal-title">
            <p className="title">리뷰작성</p>
            <button onClick={onClose}>
              <img src={process.env.PUBLIC_URL + "/images/close2.svg"}></img>
            </button>
          </div>
          <div className="table">
            <img
              src={process.env.PUBLIC_URL + "/images/moon.jpg"} // 수정된 부분
              style={{ width: "62px", height: "62px" }}
              //   alt="bag"
            />
            <ul className="hr">
              <li>제품명</li>
              <li>매장명</li>
              <li>주문방식</li>
            </ul>
            <ul className="br">
              <li>나는술파는 고라니</li>
              <li>고라니 술집</li>
              <li>픽업</li>
            </ul>
          </div>
          <div className="grade">
            <p>상품은 어떠셨나요?</p>

            <Rate
              style={{
                //   width: "200px",
                fontSize: "40px",
              }}
            />
            <HeartOutlined />
          </div>

          <div className="input">
            <Form.Item style={{ width: "100%" }} name="contents">
              <TextArea
                // value={formData.contents}
                style={{
                  fontSize: "16px",
                  boxShadow: "none",
                }}
                rows={4}
                showCount={true}
                maxLength={250}
                placeholder="내용을 입력해 주세요"
                autoSize={{
                  minRows: 9,
                  maxRows: 4,
                }}
                spellCheck={false}
                // onChange={e => handleContentsChange("contents", e.target.value)}
              />
            </Form.Item>
          </div>
          <div className="submit">
            <BasicBtR onClick={onClose}>등록하기</BasicBtR>
          </div>
        </ModalContent>
      </ModalWrap>
    </RvModalStyle>
  );
};

export default RvModal;
