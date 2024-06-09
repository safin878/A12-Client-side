import { Helmet } from "react-helmet-async";
import Banner from "../../Componenents/Banner/Banner";
import AboutBuilding from "../AboutBuilding/AboutBuilding";
import Cupon from "../../Componenents/Cupon/Cupon";
import Place from "./../../Componenents/Place/Place";

const Home = () => {
  return (
    <div className="mb-10">
      <Helmet>
        <title>BuildiFy || Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutBuilding name="ABOUT THE BUILDING"></AboutBuilding>
      <Cupon></Cupon>
      <Place></Place>
    </div>
  );
};

export default Home;
