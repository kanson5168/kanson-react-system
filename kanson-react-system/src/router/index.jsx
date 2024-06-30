import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { lazy } from "react";
// const About = lazy(() => import("@/views/About"));
import HomePage from "@/views/HomePage";
// const Login = lazy(() => import("@/views/Login"));
const PageOne = lazy(() => import("@/views/PageOne"));
const PageTwo = lazy(() => import("@/views/PageTwo"));
const waitLoadingComponent = (comp) => (
  <React.Suspense fallback={<div>loading...</div>}>
    {comp}
  </React.Suspense>
)


const routes = [
  {
    path: "/",
    element: <Navigate to="/pageone" />,
  },
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/pageone",
        element: waitLoadingComponent(<PageOne></PageOne>)
      },
      {
        path: "/pagetwo",
        element: waitLoadingComponent(<PageTwo></PageTwo>)
      }
    ]
  },
  // {
  //   path: "/about",
  //   element:waitLoadingComponent(<About></About>),
  // },
  // {
  //   path: "/login",
  //   element: waitLoadingComponent(<Login />),
  // },
];
const router = createBrowserRouter(routes)
const Routes = () => {
  return <RouterProvider router={router} />
}
export default Routes
