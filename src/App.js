import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";
import Intro from "./pages/intro/Intro";
import BasicLayout from "./layout/BasicLayout";
import Main from "./pages/main/Main";
import ProductPage from "./pages/product/ProductPage";
import LoginPage from "./pages/login/LoginPage";

const App = () => {
  return (
    <Wrap maxw={1920}>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/intro" element={<Intro />}></Route>
          <Route path="*" element={<h1>파일이없네요.</h1>}></Route>
        </Routes>
      </BasicLayout>
    </Wrap>
  );
};

export default App;
