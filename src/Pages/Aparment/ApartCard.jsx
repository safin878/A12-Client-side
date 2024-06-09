import { MdApartment } from "react-icons/md";
import { RiFloodLine } from "react-icons/ri";

import useAuth from "../../Hooks/useAuth/useAuth";
import useAxiosSecure from "./../../Hooks/useAxiosSecure/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ApartCard = ({ apart }) => {
  const { User } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  // const handelAgree = () => {
  //   if (User && User.email) {
  //     const agreeItems = {
  //       name: User?.displayName,
  //       email: User?.email,
  //       FloorNo: apart.FloorNo,
  //       BlockName: apart.BlockName,
  //       ApartmentNo: apart.ApartmentNo,
  //       Rent: apart.Rent,
  //       requestDate: new Date(),
  //       status: "pending",
  //     };
  //     axiosSecure.post("/agreements", agreeItems).then((res) => {
  //       console.log(res.data);
  //       if (res.data.insertedId) {
  //         toast.success("Added to Cart");
  //       }
  //     });
  //   } else {
  //     toast.error("Sing In Fast");
  //     navigate("/singIn", { state: { from: location } });
  //   }
  // };

  const handelAgree = async () => {
    if (User && User.email) {
      const agreeItems = {
        name: User?.displayName,
        email: User?.email,
        FloorNo: apart.FloorNo,
        BlockName: apart.BlockName,
        ApartmentNo: apart.ApartmentNo,
        Rent: apart.Rent,
        requestDate: new Date(),
        status: "pending",
      };
      try {
        const res = await axiosSecure.post("/agreements", agreeItems);
        if (res.data.insertedId) {
          toast.success("Added to Cart");
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error("Action not permitted: Agreement already exists");
        } else {
          toast.error("Failed to add agreement");
        }
      }
    } else {
      toast.error("Sign In First");
      navigate("/signIn", { state: { from: location } });
    }
  };

  return (
    <div className="container mx-auto hover:scale-105 transition ">
      <div className="card w-full bg-base-100 shadow-xl h-full">
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
            <button
              onClick={handelAgree}
              className="btn bg-[#dba95d] hover:bg-[#c2924a] text-white"
            >
              Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartCard;
