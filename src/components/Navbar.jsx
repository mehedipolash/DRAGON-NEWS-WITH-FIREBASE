import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/userIcon.png";
import { AuthContext } from "../Provider/AuthProvider";
import button from "daisyui/components/button";
const Navbar = () => {
  const { user, Logout } = use(AuthContext);

  const handleLogout = () => {
    console.log("log out pressed");
    Logout()
      .then(() => {
        alert("Logged out successfully!")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>

      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10 ">
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary px-10 ">
              Logout
            </button>
          ) : (
            <Link to="../pages/Login.jsx">Login</Link>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
