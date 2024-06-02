import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layouts/Root";
import Home from "./../Pages/Home/Home";
import Aparment from "./../Pages/Aparment/Aparment";

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
    ],
  },
]);

export default router;
