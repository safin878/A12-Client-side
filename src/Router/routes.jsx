import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layouts/Root";
import Home from "./../Pages/Home/Home";
import Aparment from "./../Pages/Aparment/Aparment";
import SingIn from "./../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUp/SingUp";
import PublicRoute from "./PublicRoute";
import PrivateRoutes from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartMent",
        element: <Aparment></Aparment>,
        loader: () => fetch("http://localhost:5000/apartmentsCount"),
      },
      {
        path: "/singIn",
        element: (
          <PublicRoute>
            <SingIn></SingIn>
          </PublicRoute>
        ),
      },
      {
        path: "/singUp",
        element: (
          <PublicRoute>
            <SingUp></SingUp>
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myProfile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
