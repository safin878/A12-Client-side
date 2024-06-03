import { Helmet } from "react-helmet-async";
import Banner from "../../Componenents/Banner/Banner";
import AboutBuilding from "../AboutBuilding/AboutBuilding";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BuildiFy || Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutBuilding></AboutBuilding>
    </div>
  );
};

export default Home;
