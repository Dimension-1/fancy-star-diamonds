import React from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#0A0E25] flex items-center justify-between md:justify-around">
      <div className="hidden md:flex gap-x-8 text-white font-semibold text-[16px]">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/aboutus">
          <div>About Us</div>
        </Link>
        <Link to="/operations">
          <div>Operations</div>
        </Link>
      </div>
      <div>
        <img src={logo} className=" lg:h-[150px]" />
      </div>
      <div className="hidden md:flex gap-x-8 text-white text-[16px] font-semibold">
        <Link to="/knowledge">
          <div>Knowledge</div>
        </Link>
        <Link to="/contactus">
          <div>Contact Us</div>
        </Link>
        <div>Languages</div>
      </div>
      <div className="md:hidden">
        <img src={menu} className="h-[20px] pr-4" />
      </div>
    </div>
  );
};

export default Navbar;
