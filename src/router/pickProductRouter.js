import { lazy, Suspense } from "react";
import { Navigate } from "react-router";

const PickListPage = lazy(() => import("../pages/pick/PickListPage"));
const MyReviewPage = lazy(() => import("../pages/mypage/MyReview"));
const OrderPage = lazy(() => import("../pages/order/OrderPage"));
// const mymain = lazy(() => import("../pages/mypage/outlet/MyReview"));

const pickProductRouter = () => {
  return [
    { path: "", element: <Navigate to="pick2" /> },
    {
      path: "pick2",
      element: (
        <Suspense fallback={<div>Load..</div>}>
          <PickListPage />
        </Suspense>
      ),
    },
  ];
};

export default pickProductRouter;
