import { Helmet } from "react-helmet-async";
import useAuth from "./../../../Hooks/useAuth/useAuth";
import useRole from "../../../Hooks/useRole/useRole";
import AdminCard from "./AdminCard";
const AdminProfile = () => {
  const { User } = useAuth();
  const [role] = useRole();

  return (
    <div>
      <div className="flex justify-center items-center  ">
        <Helmet>
          <title>Profile</title>
        </Helmet>

        <div className="bg-white shadow-lg rounded-2xl w-3/5 my-4">
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

            <p className="p-2 uppercase px-4 text-xs text-white bg-[#c98e41] rounded-full">
              {role}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-800 ">
              Admin Id: {User?.uid}
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminCard></AdminCard>
    </div>
  );
};

export default AdminProfile;
