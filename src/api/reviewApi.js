import axios from "axios";
import { SERVER_URL } from "./config";
import jwtAxios from "../util/jwtUtil";

const prefix = `${SERVER_URL}/review`;

export const getReviewList = async ({ successFn, failFn, errorFn }) => {
  try {
    const url = `${prefix}/list`;
    const res = await jwtAxios.get(url);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("메인 리뷰 데이터 불러오기 실패");
    }
  } catch (error) {
    errorFn(error);
  }
};
