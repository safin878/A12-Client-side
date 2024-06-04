import { Outlet } from "react-router-dom";

import NavBar from "../Pages/NavBar/NavBar";
import FooterEnd from "../Pages/Footer/FooterEnd";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="md:min-h-[calc(100vh-270px)] min-h-[calc(100vh-441px)] ">
        <Outlet></Outlet>
      </div>
      <FooterEnd></FooterEnd>
    </div>
  );
};

export default Root;
