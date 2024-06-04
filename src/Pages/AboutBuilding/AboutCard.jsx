import { Link } from "react-router-dom";
const AboutCard = ({ apart }) => {
  return (
    <div className="container mx-auto hover:scale-105 transition">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={apart.ApartmentImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{apart.Title}</h2>
          <p>{apart.Description}</p>
          <Link to="/apartMent">
            <div className="card-actions justify-end">
              <button className="btn bg-[#dba95d] hover:bg-[#c2924a] text-white">
                Book Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
