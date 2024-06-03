import { Helmet } from "react-helmet-async";
import Banner from "../../Componenents/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BuildiFy || Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
