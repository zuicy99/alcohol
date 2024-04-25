import { atom } from "recoil";
import { PCartData } from "../../mock/CartData";

// PCartData를 사용하여 초기값 설정
const initialCartCount = PCartData.reduce((acc, current) => {
  acc[current.key] = current.count;
  return acc;
}, {});

export const cartCountState = atom({
  key: "cartCountState",
  default: initialCartCount,
});
