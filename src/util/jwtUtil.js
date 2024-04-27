import axios from "axios";

const jwtAxios = axios.create();

// 요청
const beforeReq = config => {
  console.log("요청전 전달...", config);
};

//  request 요청 후 실패
const requestFail = err => {
  console.log("요청후 실패시...", err);
  return Promise.reject(err);
};

// 응답(Response) 처리 코드
const beforeRes = async res => {
  console.log("response 전처리...", res);
};

// Response Fail 처리
const responseFail = err => {
  console.log("response fail err", err);
  return Promise.reject(err);
};

// jwtAxios.interceptors.request.use(be);
