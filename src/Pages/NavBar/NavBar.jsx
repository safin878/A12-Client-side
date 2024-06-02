import { Avatar, Dropdown } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { User, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      title: "Sing Out Successful!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="navbar bg-base-100">
      {/* Logo in navbar start for lg screens */}
      <div className="navbar-start hidden lg:flex">
        <img
          className="w-[30px]"
          src="https://i.postimg.cc/rFWcNf9q/Default-Make-A-Logo-Whic-Company-NAme-Buildi-Fy-2.jpg"
          alt=""
        />
        <a className="btn btn-ghost text-xl">BuildiFy</a>
      </div>
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              dropdownOpen ? "block" : "hidden"
            }`}
          >
            <Link to="/" onClick={closeDropdown}>
              <li>
                <a>Home</a>
              </li>
            </Link>

            <Link to="/apartMent" onClick={closeDropdown}>
              <li>
                <a>Apartment</a>
              </li>
            </Link>
            {!User && (
              <Link to="/singUp" onClick={closeDropdown}>
                <li>
                  <a>Sing Up</a>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
      {/* Logo centered for mobile screens */}
      <div className="navbar-center flex lg:hidden ">
        <img
          className="w-[30px]"
          src="https://i.postimg.cc/rFWcNf9q/Default-Make-A-Logo-Whic-Company-NAme-Buildi-Fy-2.jpg"
          alt=""
        />
        <a className="btn btn-ghost text-xl">BuildiFy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            <li>
              <a>Home</a>
            </li>
          </Link>

          <Link to="/apartMent">
            <li>
              <a>Apartment</a>
            </li>
          </Link>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {!User && (
          <div className="flex gap-4">
            <Link to="/singIn">
              {" "}
              <button className=" btn  ">Sing In</button>
            </Link>
            <Link to="/singUp">
              <button className="btn hidden lg:block">Sing Up</button>
            </Link>
          </div>
        )}
        {User && (
          <div>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{User?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {User?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
