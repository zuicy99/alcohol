import axios from "axios";
import { SERVER_URL } from "./config";

const prefix = `${SERVER_URL}/market`;

// export const getMarketAddress = async ({ successFn, failFn, errorFn }) => {
//   try {
//     const url = `${prefix}/address`;
//     const res = await axios.get(url);

//     const status = res.status.toString();
//     if (status.charAt(0) === "2") {
//       successFn(res.data);
//     } else {
//       failFn("메인 모스트 데이터 불러오기 실패");
//     }
//   } catch (error) {
//     errorFn(error);
//   }
// };

export const getMarketAddress = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/market/address`);
    console.log(response.status);
    if (response.status === 202) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPathByAddress = async ({ location }) => {
  console.log("location : ", location);
  const geocoder = new window.kakao.maps.services.Geocoder();

  return await new Promise(resolve => {
    geocoder.addressSearch(location, function (result) {
      resolve(new window.kakao.maps.LatLng(result[0].y, result[0].x));
    });
  });
};
