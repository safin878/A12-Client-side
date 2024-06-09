import { useState, useEffect } from "react";
import { Avatar, Dropdown } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import "./NavBar.css";
import useRole from "../../Hooks/useRole/useRole";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const { User, logOut } = useAuth();
  const [role, isLoading] = useRole();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        <span className="loading loading-bars loading-lg text-blue-500"></span>
      </div>
    );
  }

  console.log(role);

  return (
    <div
      className={`navbar fixed z-10 w-full ${navbarScrolled ? "scrolled" : ""}`}
    >
      {/* Logo in navbar start for lg screens */}
      <div className="navbar-start hidden lg:flex gap-3">
        <Link>
          <img
            className="w-[30px] rounded-lg"
            src="https://i.postimg.cc/GtsmszP2/logo.png"
            alt=""
          />
        </Link>
        <Link to="/">
          <span className="text-xl">BuildiFy</span>
        </Link>
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
            className={`menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              dropdownOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink to="/" onClick={closeDropdown} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apartMent"
                onClick={closeDropdown}
                activeClassName="active"
              >
                Apartment
              </NavLink>
            </li>
            {!User && (
              <li>
                <NavLink
                  to="/singUp"
                  onClick={closeDropdown}
                  activeClassName="active"
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* Logo centered for mobile screens */}
      <div className="navbar-center flex lg:hidden gap-2">
        <Link to="/">
          <img
            className="w-[30px] rounded-lg"
            src="https://i.postimg.cc/GtsmszP2/logo.png"
            alt=""
          />
        </Link>
        <Link to="/">
          <span className="text-xl">BuildiFy</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apartMent" activeClassName="active">
              Apartment
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {!User && (
          <div className="flex gap-4">
            <Link to="/singIn">
              <button className="btn bg-[#e4ac58] text-white border-0 hover:bg-[#cf9c4f]">
                Sign In
              </button>
            </Link>
            <Link to="/singUp">
              <button className="btn hidden lg:block bg-[#e4ac58] text-white border-0 hover:bg-[#cf9c4f]">
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {User && (
          <div>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={User?.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{User?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {User?.email}
                </span>
              </Dropdown.Header>
              {role === "admin" && (
                <Link to="/dashboard/adminProfile">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
              )}
              {role === "member" && (
                <Link to="/dashboard/myProfile">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
              )}
              {role === "user" && (
                <Link to="/dashboard/myProfile">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
              )}
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
