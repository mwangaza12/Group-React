import { useState } from "react";
import { BiHome, BiInfoCircle, BiPhone } from "react-icons/bi";
import { MdRestaurant } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { GrDashboard } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../features/auth/authSlice";
import type { RootState } from "../app/store";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/");
  };

  const menuLinks = (
    <>
      <li>
        <Link to="/" className="flex items-center gap-2">
          <BiHome className="text-orange-600" />
          Home
        </Link>
      </li>
      <li>
        <Link to="/foods" className="flex items-center gap-2">
          <BiInfoCircle className="text-orange-600" />
          Meals
        </Link>
      </li>
      <li>
        <Link to="/contact" className="flex items-center gap-2">
          <BiPhone className="text-orange-600" />
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 text-base-content">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile menu toggle */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </label>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuLinks}
              <div className="divider my-2" />
              {!isAuthenticated ? (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="btn btn-sm btn-primary text-white"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/dashboard/me">
                      <GrDashboard className="text-orange-600 mr-2" />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-left">
                      <FaSignOutAlt className="text-orange-600 mr-2" />
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl px-2">
          <MdRestaurant className="text-2xl text-orange-600" />
          <span className="font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Group
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{menuLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex gap-3">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="btn btn-ghost">Login</Link>
            <Link
              to="/register"
              className="btn btn-primary text-white shadow-sm"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              Hey, {user?.firstName}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard/me">
                  <GrDashboard className="text-orange-600 mr-2" />
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <FaSignOutAlt className="text-orange-600 mr-2" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
