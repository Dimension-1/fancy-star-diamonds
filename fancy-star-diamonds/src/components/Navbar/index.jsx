import React from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  return (
    <div className="bg-[#0A0E25] flex items-center justify-between sm:justify-around">
      <div className="hidden sm:flex gap-x-8 text-white text-[16px]">
        <div>Home</div>
        <div>About Us</div>
        <div>Operations</div>
      </div>
      <div>
        <img src={logo} className="sm:h-[150px]" />
      </div>
      <div className="hidden sm:flex gap-x-8 text-white text-[16px]">
        <div>Knowledge</div>
        <div>Contact Us</div>
        <div>Languages</div>
      </div>
      <div className="sm:hidden">
        <img src={menu} className="h-[30px] pr-4" />
      </div>
    </div>
  );
};

export default Navbar;
