import { Link, NavLink, Outlet } from "react-router-dom";
import { FaSearch, FaUsers } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { FcHome } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import useRole from "../../Hooks/useRole/useRole";
import { LuGitPullRequestClosed } from "react-icons/lu";
import { LuTicket } from "react-icons/lu";

const Dashboard = () => {
  const { logOut } = useAuth();

  const [role, isLoading] = useRole();

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sign Out Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        <span className="loading loading-bars loading-lg text-blue-500"></span>
      </div>
    );
  }

  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-orange-400 flex flex-col justify-between ">
        {role === "user" && (
          <div>
            <ul className="menu">
              <>
                <li>
                  <NavLink to="/dashboard/myProfile">
                    <CgProfile />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/AddItems">
                    <TfiAnnouncement></TfiAnnouncement>
                    User
                  </NavLink>
                </li>
              </>
            </ul>
          </div>
        )}
        {role === "member" && (
          <div>
            <ul className="menu">
              <>
                <li>
                  <NavLink to="/dashboard/myProfile">
                    <CgProfile />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/AddItems">
                    <TfiAnnouncement></TfiAnnouncement>
                    Member
                  </NavLink>
                </li>
              </>
            </ul>
          </div>
        )}
        {role === "admin" && (
          <div>
            <ul className="menu">
              <>
                <li>
                  <NavLink to="/dashboard/myProfile">
                    <CgProfile />
                    Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mangeMembers">
                    <FaUsers></FaUsers>
                    Mange Members
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/AddItems">
                    <TfiAnnouncement></TfiAnnouncement>
                    Make Announcement
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/AgreementReq">
                    <LuGitPullRequestClosed />
                    Agreement Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/AddItems">
                    <LuTicket></LuTicket>
                    Manage Coupon
                  </NavLink>
                </li>
              </>
            </ul>
          </div>
        )}

        <div className="divider">OR</div>

        <div>
          <ul className="menu">
            <li>
              <NavLink to="/">
                <FcHome></FcHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apartMent">
                <FaSearch></FaSearch>
                Apartment
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="divider">OR</div>

        <div>
          <ul className="menu">
            <li>
              <Link onClick={handleLogOut}>
                <CiLogout />
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
