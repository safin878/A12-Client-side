import { Helmet } from "react-helmet-async";
import AboutBuilding from "../AboutBuilding/AboutBuilding";
import ApartConten from "./ApartConten";

const Aparment = () => {
  return (
    <div>
      <Helmet>
        <title>BuildiFy || Apartment</title>
      </Helmet>
      <div>
        <img
          src="https://i.postimg.cc/Vkss0ftv/Brown-Aesthetic-and-Minimalist-Apartment-Sale-Promotion-Banner.png"
          alt=""
          className="w-full"
        />
      </div>

      <div>
        <ApartConten name="AGREEMENT NOW"></ApartConten>
      </div>
    </div>
  );
};

export default Aparment;
