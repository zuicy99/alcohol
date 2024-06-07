import jwtAxios from "../util/jwtUtil";
import { SERVER_URL } from "./config";

export const getCart = async ({ params }) => {
  console.log("axios-cart : ", params);
  const basket = params.basket;
  try {
    let response;
    if (basket === "pickup") {
      response = await jwtAxios.get(`${SERVER_URL}/shoppingbasket/pickup`);
    } else if (basket === "delivery") {
      response = await jwtAxios.get(`${SERVER_URL}/shoppingbasket/delivery`);
    }
    if (response && response.status === 200) {
      return response.data;
    } else {
      // console.log("no");
      return null; //
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDelivery = async () => {
  try {
    const response = await jwtAxios.get(
      `${SERVER_URL}/shoppingbasket/delivery`,
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = async ({ deleteId }) => {
  console.log("아이디 : ", deleteId);

  try {
    const response = await jwtAxios.delete(`${SERVER_URL}/shoppingbasket`, {
      data: {
        id: deleteId,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllCart = async () => {
  // console.log("아이디 : ", deleteId);

  try {
    const response = await jwtAxios.delete(`${SERVER_URL}/shoppingbasket/all`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
  }
};
