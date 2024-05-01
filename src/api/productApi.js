import axios from "axios";
import { SERVER_URL } from "./config";

const prefix = `${SERVER_URL}/main`;

export const postMainCate = async ({
  values,
  address,
  withdrawStatus,
  successFn,
  failFn,
  errFn,
}) => {
  try {
    const url = `${prefix}/main`;
    const res = await axios.post(url, {
      ...values,
      address: address,
      withdrawStatus: withdrawStatus, // 추가 정보 전달
    });
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return successFn(res.data);
    }
  } catch (error) {
    if (error.request.readyState === 4) {
      return failFn();
    } else {
      errFn("서버에러에요");
    }
  }
};
