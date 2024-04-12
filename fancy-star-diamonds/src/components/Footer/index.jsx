import React from "react";
import logofooter from "../../assets/logofooter.svg";
const Footer = () => {
  return (
    <div className="bg-[#D2B976]">
      <div className="w-[239px] mx-auto">
        <img src={logofooter} />
      </div>
      <div className="flex justify-center gap-12 mt-8 ">
        <div className="text-center flex flex-col gap-y-2 text-[#111c7a]">
          <h1 className="text-[14px] font-bold">About Us</h1>
          <h1 className="text-[10px]">Our Mission</h1>
          <h1 className="text-[10px]">Our Vission</h1>
          <h1 className="text-[10px]">Our Story</h1>
          <h1 className="text-[10px]">Why We Exist</h1>
        </div>
        <div className="text-center flex flex-col gap-y-2 text-[#111c7a]">
          <h1 className="text-[14px] font-bold">Knowledge</h1>
          <h1 className="text-[10px]">Our Mission</h1>
          <h1 className="text-[10px]">Our Vission</h1>
          <h1 className="text-[10px]">Our Story</h1>
          <h1 className="text-[10px]">Why We Exist</h1>
        </div>
        <div className="text-center flex flex-col gap-y-2 text-[#111c7a]">
          <h1 className="text-[14px] font-bold">Support</h1>
          <h1 className="text-[10px]">Customer Care</h1>
          <h1 className="text-[10px]">Careers</h1>
          <h1 className="text-[10px]">Contact Us</h1>
        </div>
      </div>
      <div className="flex justify-center mt-8 pb-8">
        <div className="text-center flex flex-col font-medium gap-y-4 text-[#111c7a]">
          <h1 className="text-[14px] font-bold">Operations</h1>
          <h1 className="text-[10px]">Loose Diamond Supply</h1>
          <h1 className="text-[10px]">Diamond Sorting</h1>
          <h1 className="text-[10px]">Bagging & Shipping</h1>
          <h1 className="text-[10px]">Jewellery Setting & Polishing</h1>
          <h1 className="text-[10px]">Customised Jewellery Layouts</h1>
          <h1 className="text-[10px]">Matched Sets</h1>
        </div>
      </div>
      <div className="flex flex-col text-center text-[#111c7a] text-[20px] leading-7 font-bold pb-8">
        <h1>+987654321111</h1>
        <h1>infi@fancystardiamonds.com</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row gap-x-8  mt-8 border-b-[1px] border-[#111c7a] pb-8">
          <img className="w-[40px] h-[40px]" src="./social/fb.svg" />
          <img className="w-[40px] h-[40px]" src="./social/insta.svg" />
          <img className="w-[40px] h-[40px]" src="./social/yt.svg" />
          <img className="w-[40px] h-[40px]" src="./social/twitter.svg" />
          <img className="w-[40px] h-[40px]" src="./social/linkedin.svg" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-white text-[8px] flex py-4 gap-x-4">
          <h1>Fancystar diamond. Copyright © 2024</h1>
          <h1>Terms & Conditions</h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
