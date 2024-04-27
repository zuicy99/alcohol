import axios from "axios";
import { API_SERVER_HOST } from "../util/util";

const prefix = `${API_SERVER_HOST}/event`;

export const postNewProduct = async ({ successFn, failFn, errorFn }) => {
  try {
    const url = `${prefix}/newproduct`;
    const res = await axios.post(url);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("메인 신상품 데이터 불러오기 실패");
    }
  } catch (error) {
    errorFn(error);
  }
};
