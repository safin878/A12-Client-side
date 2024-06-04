import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layouts/Root";
import Home from "./../Pages/Home/Home";
import Aparment from "./../Pages/Aparment/Aparment";
import SingIn from "./../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUp/SingUp";
import PublicRoute from "./PublicRoute";

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
]);

export default router;
