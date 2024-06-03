import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel autoPlay interval={1500} infiniteLoop>
      <div>
        <img src="https://i.postimg.cc/tg4pznTH/img1.png" />
      </div>
      <div>
        <img src="https://i.postimg.cc/fRhPcVCT/img2.png" />
      </div>
      <div>
        <img src="https://i.postimg.cc/3RX5Fv6K/img3.png" />
      </div>
      <div>
        <img src="https://i.postimg.cc/5tj8z5XC/img4.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
