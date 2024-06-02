import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layouts/Root";
import Home from "./../Pages/Home/Home";
import Aparment from "./../Pages/Aparment/Aparment";
import SingIn from "./../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUp/SingUp";

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
      },
      {
        path: "/singIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

export default router;
