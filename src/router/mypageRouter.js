import { lazy, Suspense } from "react";
import { Navigate } from "react-router";

const ReviewPage = lazy(() => import("../pages/mypage/ReviewPage"));
const MyMainPage = lazy(() => import("../pages/mypage/MyMainPage"));
const MyReviewPage = lazy(() => import("../pages/mypage/MyReview"));
const OrderPage = lazy(() => import("../pages/order/OrderPage"));
// const mymain = lazy(() => import("../pages/mypage/outlet/MyReview"));

const mypageRouter = () => {
  return [
    { path: "", element: <Navigate to="info" /> },
    {
      path: "info",
      element: (
        <Suspense fallback={<div>Load..</div>}>
          <MyMainPage />
        </Suspense>
      ),
    },
    {
      path: "createreview",
      element: (
        <Suspense fallback={<div>Load..</div>}>
          <MyReviewPage />
        </Suspense>
      ),
    },
    {
      path: "review",
      element: (
        <Suspense fallback={<div>Load..</div>}>
          <ReviewPage />
        </Suspense>
      ),
    },
    {
      path: "order",
      element: (
        <Suspense fallback={<div>Load..</div>}>
          <OrderPage />
        </Suspense>
      ),
    },
  ];
};

export default mypageRouter;
