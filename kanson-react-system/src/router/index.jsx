import { Navigate,createBrowserRouter, RouterProvider  } from "react-router-dom";
import React ,{lazy}from "react";
const About = lazy(() => import("../views/About"));
const Home = lazy(() => import("../views/Home"));
const waitLoadingComponent = (comp)=>{
   <React.Suspense fallback={<div>loading...</div>}>
     {comp}
   </React.Suspense>
}
const routes = [
  {
    path: "./",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "./home",
    element: waitLoadingComponent(<Home></Home>)
  },
  {
    path: "./about",
    element:waitLoadingComponent(<About></About>),
  },
];
const router = createBrowserRouter(routes)
const Routes = () => {
  return <RouterProvider router={router} />
}
export default Routes
