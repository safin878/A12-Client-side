import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
            <Link to="/" onClick={closeDropdown}>
              <li>
                <a>Sing Up</a>
              </li>
            </Link>
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
        <button className=" btn  ">Sing In</button>
        <button className="btn hidden lg:block">Sing Up</button>

        <div className="dropdown dropdown-end " onClick={toggleDropdown}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
              dropdownOpen ? "block" : "hidden"
            }`}
          >
            <Link to="/">
              <li>
                <a className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </a>
              </li>
            </Link>

            <Link to="/apartMent">
              <li>
                <a>Logout</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
