import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import mypageRouter from "./mypageRouter";
import paymentRouter from "./paymentRouter";
import signRouter from "./signRouter";
import productRouter from "./productRouter";

// Main-Page
const MainPage = lazy(() => import("../pages/main/Main"));
// Sign-Page
const SignPage = lazy(() => import("../pages/main/Main"));
// Product-Page
const ProductPage = lazy(() => import("../pages/product/ProductPage"));
// Pick-Page
const PickPage = lazy(() => import("../pages/pick/PickListPage"));
// Cart-Page
const CartPage = lazy(() => import("../pages/cart/CartPage"));
// Payment-Page
const PaymentPage = lazy(() => import("../pages/payment/PaymentPage"));
// My-Page
const MyPage = lazy(() => import("../pages/mypage/MyPage"));
// Map-Page
const StoreMapPage = lazy(() => import("../pages/storemap/StoreMapPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "/sign/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <SignPage />
      </Suspense>
    ),
    children: signRouter(),
  },
  {
    path: "/product/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <ProductPage />
      </Suspense>
    ),
    children: productRouter(),
  },
  {
    path: "/pick",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <PickPage />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <CartPage />
      </Suspense>
    ),
  },
  {
    path: "/payment/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <PaymentPage />
      </Suspense>
    ),
    children: paymentRouter(),
  },
  {
    path: "/mypage/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <MyPage />
      </Suspense>
    ),
    children: mypageRouter(),
  },
  {
    path: "/storemap",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <StoreMapPage />
      </Suspense>
    ),
  },
]);

export default router;
