import React from "react";
import { useNavigate } from "react-router-dom";

export const useCustomMove = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    <a href="/login"></a>;
    navigate("/login");
  };
  const moveToMain = () => {
    <a href="/Main"></a>;
    navigate("/");
  };
  return moveToLogin, moveToMain;
};

export default useCustomMove;
