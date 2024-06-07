import { atom } from "recoil";

const initState = {
  address: "",
  address2: "",
  nickname: "",
};
export const userState = atom({
  key: "userState",
  default: [initState],
});
