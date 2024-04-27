import axios from "axios";
import { API_SERVER_HOST } from "../util/util";
import { SERVER_URL } from "./config";

// const prefix = `${API_SERVER_HOST}/login/create`;
const prefix = `${SERVER_URL}/login/create`;

export const postSign = async ({ values, successFn, failFn, errFn }) => {
  // console.log(values);
  try {
    // const res = await axios.post(`http://three.hellomh.site/login/create`, {
    //   ...values,
    // });
    const res = await axios.post(prefix, {
      ...values,
    });
    // console.log(res.data);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return successFn(res.data);
    }
  } catch (error) {
    // console.log(error);
    if (error.request.readyState === 4) {
      // console.log();
      return failFn();
    } else {
      errFn("서버에러에요");
    }
  }
};

// export const postNewProduct = async ({ successFn, failFn, errorFn }) => {
//   try {
//     const url = `${prefix}/newproduct`;
//     const res = await axios.post(url);

//     const status = res.status.toString();
//     if (status.charAt(0) === "2") {
//       successFn(res.data);
//     } else {
//       failFn("메인 신상품 데이터 불러오기 실패");
//     }
//   } catch (error) {
//     errorFn(error);
//   }
// };
