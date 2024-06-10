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
import MangeMembers from "../Pages/Dashboard/Admin/MangeMembers";
import AgreementReq from "../Pages/Dashboard/Admin/AgreementReq";
import ManageCupon from "../Pages/Dashboard/Admin/ManageCupon";
import MakeAnnouncement from "../Pages/Dashboard/Admin/MakeAnnouncement";
import MakePayment from "./../Pages/Dashboard/Member/MakePayment";
import PaymentHistory from "../Pages/Dashboard/Member/PaymentHistory";
import Announcement from "../Pages/Dashboard/Announcement";
import Payment from "./../Pages/Dashboard/Member/Payment";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";

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
        loader: () =>
          fetch("https://buildify-server.vercel.app/apartmentsCount"),
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
      {
        path: "announcements",
        element: (
          <PrivateRoutes>
            <Announcement></Announcement>
          </PrivateRoutes>
        ),
      },
      {
        path: "makePayment",
        element: (
          <PrivateRoutes>
            <MakePayment></MakePayment>
          </PrivateRoutes>
        ),
      },
      {
        path: "Payment",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoutes>
            <PaymentHistory></PaymentHistory>
          </PrivateRoutes>
        ),
      },
      {
        path: "adminProfile",
        element: (
          <PrivateRoutes>
            <AdminProfile></AdminProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "mangeMembers",
        element: (
          <PrivateRoutes>
            <MangeMembers></MangeMembers>
          </PrivateRoutes>
        ),
      },
      {
        path: "agreementReq",
        element: (
          <PrivateRoutes>
            <AgreementReq></AgreementReq>
          </PrivateRoutes>
        ),
      },
      {
        path: "manageCoupon",
        element: (
          <PrivateRoutes>
            <ManageCupon></ManageCupon>
          </PrivateRoutes>
        ),
      },
      {
        path: "makeAnnouncement",
        element: (
          <PrivateRoutes>
            <MakeAnnouncement></MakeAnnouncement>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
