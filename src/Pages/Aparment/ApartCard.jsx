import { MdApartment } from "react-icons/md";
import { RiFloodLine } from "react-icons/ri";

const ApartCard = ({ apart }) => {
  return (
    <div className="container mx-auto hover:scale-105 transition">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={apart.ApartmentImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{apart.BlockName}</h2>

          <p className="font-semibold text-[#b8ac45]">{apart.Rent} / Year</p>

          <p>{apart.Description}</p>

          <hr />
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <MdApartment></MdApartment>
              <p>{apart.FloorNo}</p>
            </div>
            <div className="flex gap-2 items-center">
              <RiFloodLine></RiFloodLine>
              <p>{apart.ApartmentNo}</p>
            </div>
          </div>
          <hr />

          <div className="card-actions justify-end">
            <button className="btn bg-[#dba95d] hover:bg-[#c2924a] text-white">
              Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartCard;
