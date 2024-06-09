import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth/useAuth";
import useRole from "../../Hooks/useRole/useRole";
import SectionTitle from "./../../Componenents/SectionTitle/SectionTitle";
import useAgree from "../../Hooks/useAgree/useAgree";

const MyProfile = () => {
  const { User } = useAuth();
  const [role] = useRole();
  const [cart] = useAgree();
  console.log(cart);

  const formatDate = (dateString) => {
    if (!dateString) return "none";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-CA", options);
  };

  return (
    <div>
      <SectionTitle Heading="My Profile"></SectionTitle>
      <div className="flex justify-center items-center  ">
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className="bg-white shadow-lg rounded-2xl w-3/5">
          <img
            alt="profile"
            src="https://i.postimg.cc/7ZGr6NnB/Default-need-brownish-theme-this-photo-3.jpg"
            className="w-full mb-4 rounded-t-lg h-36"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src={User?.photoURL}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
              />
            </a>

            <p className="p-2 px-4 text-xs text-white bg-[#c98e41] rounded-full uppercase">
              {role}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-800 ">
              User Id: {User?.uid}
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="grid grid-cols-3 items-center justify-between text-sm text-gray-600 gap-4">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black ">
                    {User?.displayName}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{User?.email}</span>
                </p>
                <p className="flex flex-col">
                  Agreement accept date
                  <span className="font-bold text-black ">
                    {formatDate(cart[0]?.checkedDate) || "none"}
                  </span>
                </p>
                <p className="flex flex-col">
                  Floor
                  <span className="font-bold text-black ">
                    {cart[0]?.FloorNo || "none"}
                  </span>
                </p>
                <p className="flex flex-col">
                  Block Name
                  <span className="font-bold text-black ">
                    {cart[0]?.BlockName || "none"}
                  </span>
                </p>
                <p className="flex flex-col">
                  Room No
                  <span className="font-bold text-black ">
                    {cart[0]?.ApartmentNo || "none"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
