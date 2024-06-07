import { Form, Input, Rate } from "antd";
import React, { useState } from "react";
import {
  deleteReview,
  getReviewcheck,
  postReviewcreate,
} from "../../api/reviewApi";
import { Common } from "../../styles/CommonCss";
import { BasicBtR } from "../../styles/basic/basicBt";
import {
  ModalContent,
  ModalDeletWrap,
  ModalWrap,
  RvModalStyle,
  SubmitBt,
} from "../../styles/common/revModalCss";
const { TextArea } = Input;

const initState = {
  id: 0,
  alcohol: 0,
  writing: "",
  grade: 0,
  picture: "",
};

const RvModal = ({ onClose, code }) => {
  const [postData, setPostData] = useState(initState);
  const [writingData, setWritingData] = useState("");
  const [gradeData, setGradeData] = useState();

  const handleGradeChange = value => {
    setGradeData(value);
    console.log("평점:", value);
  };

  const handleWritingChange = e => {
    setWritingData(e.target.value);
    console.log("리뷰작성:", e.target.value);
  };

  const fetchData = () => {
    postReviewcreate({
      reivewParam: {
        id: code.id,
        writing: writingData,
        grade: gradeData,
        picture: "",
      },
      successFn,
      failFn,
      errorFn,
    });
  };

  const successFn = data => {
    setPostData(data);
    onClose();
    getReviewcheck(data);
  };
  const failFn = data => {
    setPostData(false);
    alert("failFn : 데이터 호출에 실패하였습니다.");
  };

  const errorFn = data => {
    alert("서버상태 불안정 그래서, 데모테스트했음.");
  };
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
              src={process.env.PUBLIC_URL + code.picture}
              style={{ width: "62px", height: "62px" }}
              //   alt="bag"
            />
            <ul className="hr">
              <li>제품명</li>
              <li>매장명</li>
              <li>주문방식</li>
            </ul>
            <ul className="br">
              <li>{code.name}</li>
              <li>{code.marketname}</li>
              <li> {code.delivery}</li>
            </ul>
          </div>
          <div className="grade">
            <p>상품은 어떠셨나요?</p>

            <Rate
              style={{
                fontSize: "40px",
              }}
              value={gradeData}
              onChange={handleGradeChange}
            />
          </div>

          <div className="input">
            <Form.Item style={{ width: "100%" }} name="contents">
              <TextArea
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
                value={writingData}
                onChange={handleWritingChange}
              />
            </Form.Item>
          </div>
          <div className="submit">
            <BasicBtR onClick={fetchData}>등록하기</BasicBtR>
          </div>
        </ModalContent>
      </ModalWrap>
    </RvModalStyle>
  );
};

export default RvModal;

export const RvDelete = ({ onClose, code, refreshData }) => {
  const fetchData = code => {
    console.log("리릴", code.id); // 여기에 로그 추가

    deleteReview({
      id: code.id,
      successFn: () => {
        onClose();
        refreshData();
      },
      failFn: error => {
        alert("메인 모스트 데이터 불러오기 실패");
      },
      errorFn: data => {
        alert("서버상태 불안정 다음에 상품불러오기 시도");
      },
    });
  };

  return (
    <>
      <RvModalStyle>
        <ModalDeletWrap>
          <ModalContent>
            <div className="modal-title">
              <p className="title">리뷰삭제</p>
              <button onClick={onClose}>
                <img
                  src={process.env.PUBLIC_URL + "/images/close2.svg"}
                  alt="close button"
                />
              </button>
            </div>
            <div className="table">
              <img
                src={process.env.PUBLIC_URL + code.picture}
                style={{ width: "62px", height: "62px" }}
                alt="product"
              />
              <ul className="hr">
                <li>제품명</li>
                <li>내용</li>
              </ul>
              <ul className="br">
                <li>{code.name}</li>
                <li>{code.writing}</li>
              </ul>
            </div>
            <div className="grade">
              <p>리뷰를 삭제하시겠습니까?</p>
            </div>
            <SubmitBt>
              <BasicBtR
                style={{ background: Common.color.f900 }}
                onClick={() => fetchData(code)}
              >
                네
              </BasicBtR>
              <BasicBtR onClick={onClose}>아니요</BasicBtR>
            </SubmitBt>
          </ModalContent>
        </ModalDeletWrap>
      </RvModalStyle>
    </>
  );
};
