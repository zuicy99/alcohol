import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { LoginBt, LoginTitle, LoginWrap } from "../../styles/login/loginCss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Common } from "../../styles/CommonCss";
import styled from "@emotion/styled/macro";
import Address from "../../components/singup/Address";
import { areaStyle, buttonPrimaryStyle } from "../../styles/sign/signArea";
import { P20, SignWrap } from "../../styles/basic";
import { useNavigate } from "react-router";
import axios from "axios";

const initState = {
  nicname: "",
  birth: "",
  phoneNumber: "",

  email: "",
  password: "",
  address: "",
};
const SignupPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [memberInfo, setMemberInfo] = useState(initState);
  const [email, setEmail] = useState("");

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleCheckDuplicate = async Check => {
    setEmail(Check);
    console.log("중복검사할 이메일:", email);
  };

  const updateAddressInfo = ({ address }) => {
    setAddress(address);
  };

  const onFinish = async values => {
    try {
      // Form에서 수집한 데이터
      const formData = {
        nicname: values.nicname,
        birth: values.birth,
        phoneNumber: values.phoneNumber,
        email: values.email,
        password: values.password,
        address: address, // 주소 정보는 별도로 수집된 상태값을 사용
      };
      console.log("formData:", formData);
      // 데이터 전송 예시: axios 라이브러리 등을 사용하여 백엔드 API로 데이터 전송
      const response = await axios.post("/api/signup", formData);

      // 회원가입이 성공하면 다음 페이지로 이동
      navigate("/login");

      // 반환된 데이터 사용
      const responseData = response.data;
      // responseData를 원하는 변수에 저장하고 사용할 수 있음
    } catch (error) {
      // 데이터 전송 중 오류 발생 시 처리
      console.error("회원가입 오류:", error);
    }
  };

  const handleClickSearch = e => {
    e.preventDefault();

    // Form 데이터를 수집하여 확인
    const formData = {
      nicname: memberInfo.nicname,
      birth: memberInfo.birth,
      phoneNumber: memberInfo.phoneNumber,
      email: memberInfo.email,
      password: memberInfo.password,
      address: address,
    };
    console.log("현재 입력된 값:", formData);
  };

  return (
    <div>
      <LoginWrap>
        <LoginTitle>
          <p className="logo">회원가입</p>
        </LoginTitle>
        <div style={{ marginBottom: "20px" }}>
          <P20 style={{ color: `${Common.color.f900}` }}>
            만 20세 미만은 회원가입이 불가합니다.
          </P20>
          <P20>아래 정보를 입력하시면 회원가입이 완료됩니다.</P20>
        </div>

        <SignWrap>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
              nicname: memberInfo.nicname,
              birth: memberInfo.birth,
              phoneNumber: memberInfo.phoneNumber,

              email: memberInfo.email,
              password: memberInfo.password,
              address: memberInfo.address,
            }}
            onFinish={onFinish}
          >
            <div style={{ marginBottom: "80px" }}>
              <P20 style={{ fontWeight: "bold", marginBottom: "20px" }}>
                본인인증정보
              </P20>
              <Form.Item
                name="nicname"
                rules={[
                  {
                    required: true,
                    message: "닉네임을 입력하세요.",
                  },
                  {
                    pattern: /^[가-힣]{2,10}$/,
                    message: "한글로 2~10자 사이의 이름을 입력하세요.",
                  },
                  {
                    whitespace: true,
                    message: "이름은 공백만으로 만들 수 없습니다",
                  },
                ]}
              >
                <Input style={areaStyle} placeholder="닉네임" />
              </Form.Item>
              <div style={{ display: "flex" }}>
                <Form.Item
                  name="birth"
                  rules={[
                    {
                      required: true,
                      message: "생년월일을 입력하세요.",
                    },
                    {
                      pattern: /^[0-9]{6}$/,
                      message: "숫자로 6자로 입력해주세요.",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "숫자만 입력하세요.",
                    },
                    {
                      whitespace: true,
                      message: "공백만으로 만들 수 없습니다",
                    },
                    {
                      validator: (_, value) => {
                        // 주민등록번호 문자열을 날짜로 변환
                        const year = value.substr(0, 2);
                        const month = value.substr(2, 2);
                        const day = value.substr(4, 2);
                        // 현재 날짜 구하기
                        const currentDate = new Date();
                        // 생년월일 계산
                        const birthYear =
                          parseInt(year) < 22
                            ? 2000 + parseInt(year)
                            : 1900 + parseInt(year);
                        const birthDate = new Date(
                          birthYear,
                          parseInt(month) - 1,
                          parseInt(day),
                        );
                        // 나이 계산
                        const age =
                          currentDate.getFullYear() - birthDate.getFullYear();
                        // 생일이 지났는지 체크
                        if (
                          currentDate.getMonth() < birthDate.getMonth() ||
                          (currentDate.getMonth() === birthDate.getMonth() &&
                            currentDate.getDate() < birthDate.getDate())
                        )
                          if (age < 20) {
                            // 20세 미만인 경우 에러 반환
                            return Promise.reject(
                              "20세 미만은 가입할 수 없습니다.",
                            );
                          }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    style={{ width: 520, height: 60, fontSize: "20px" }}
                    placeholder="생년월일(6자리)"
                  />
                </Form.Item>
                <Form.Item>
                  <Select
                    style={{
                      width: "110px",
                      height: "60px",
                      backgroundColor: `${Common.color.p300}`,
                      marginLeft: "8px",
                      color: `${Common.color.p600}`,
                      fontSize: "20px",
                      borderRadius: "20px",
                    }}
                    placeholder="성별"
                  >
                    <Select.Option value="w">여성</Select.Option>
                    <Select.Option value="m">남성</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div style={{ display: "flex" }}>
                <Form.Item name="Number">
                  <Input
                    style={{
                      width: "110px",
                      height: "60px",
                      marginRight: "8px",
                      fontSize: "20px",
                    }}
                    placeholder="010"
                    defaultValue="010"
                    // defaultValue="010"
                  />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "전화번호를 입력 해주세요",
                    },
                    {
                      required: true,
                      message: "전화번호를 입력 해주세요",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "숫자만 입력하세요.",
                    },
                    {
                      whitespace: true,
                      message: "전화번호는 공백만으로 만들 수 없습니다",
                    },
                  ]}
                >
                  <Input
                    // defaultValue="010"
                    style={{ width: 520, height: 60, fontSize: "20px" }}
                    placeholder="전화번호"
                    // defaultValue="010"
                  />
                </Form.Item>
              </div>
            </div>

            {/* 아래 필수정보 이메일, 비밀번호, 주소 */}
            <div>
              <P20 style={{ fontWeight: "bold", marginBottom: "20px" }}>
                필수정보
              </P20>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "올바른 이메일 형식을 입력하세요.",
                  },
                  {
                    required: true,
                    message: "이메일을 입력하세요.",
                  },
                  {
                    pattern:
                      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i,
                    message: "이메일 형식에 맞게 작성해주세요",
                  },
                  {
                    whitespace: true,
                    message: "이메일은 공백만으로 만들 수 없습니다",
                  },
                ]}
              >
                <Input
                  placeholder="이메일(대소문자를 확인해 주세요)"
                  style={{ width: 520, height: 60, fontSize: "20px" }}
                  onChange={handleEmailChange}
                />
                <Button
                  // htmlType="submit"
                  type="button"
                  style={{
                    width: "110px",
                    height: "60px",
                    backgroundColor: `${Common.color.p900}`,
                    border: "none",
                    marginLeft: "8px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  onClick={handleCheckDuplicate}
                >
                  중복검사
                </Button>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "비밀번호를 입력해 주세요!",
                  },
                ]}
              >
                <Input.Password
                  style={areaStyle}
                  type="password"
                  placeholder="비밀번호"
                />
              </Form.Item>
              <Address onAddressChange={updateAddressInfo} />
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={buttonPrimaryStyle}
              >
                회원가입
              </Button>
            </Form.Item>
          </Form>
        </SignWrap>
      </LoginWrap>
    </div>
  );
};

export default SignupPage;
