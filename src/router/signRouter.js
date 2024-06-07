import { lazy, Suspense } from "react";
import { Navigate } from "react-router";

// 로그인 페이지
const SigninPage = lazy(() => import("../pages/sign/SigninPage"));

// 로그아웃 페이지
const SignupPage = lazy(() => import("../pages/sign/SignupPage"));

const signRouter = () => {
  return [
    { path: "", element: <Navigate to="in" /> },
    {
      path: "in",
      element: (
        <Suspense fallback={<div>Load..</div>}>
          <SigninPage />
        </Suspense>
      ),
    },
    {
      path: "up",
      element: (
        <Suspense fallback={<div>Load..</div>}>
          <SignupPage />
        </Suspense>
      ),
    },
  ];
};

export default signRouter;
