import React from "react";
import heromobile from "../../assets/heromobile.svg";
import herodesktop from "../../assets/herodesktop.svg";
import ring from "../../assets/ring.svg";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img src={heromobile} className="w-full sm:hidden" />
          <img
            src={herodesktop}
            className="w-[100%] object-cover h-[800px] hidden sm:flex"
          />
        </div>
        <div className="absolute top-4 left-4 sm:left-[100px] lg:top-[400px] w-[328px] sm:w-[500px] lg:w-[900px] xl:w-[1000px]">
          <h1 className=" text-white text-[32px] md:text-[64px] leading-10 md:leading-[72px]">
            India’s First Specialists in Marquise & Pearl Shaped Diamonds
          </h1>
          <h1 className="text-white text-[12px] md:text-[16px] mt-4 md:mt-8 leading-6">
            This is a placeholder line Fancy star diamonds is a dubai based
            company withstate of the art manufacturing unit in india.
          </h1>
        </div>
        <div className="sm:flex sm:justify-center">
          <img
            src={ring}
            className="absolute w-full bottom-[-130px] sm:w-[645px] sm:bottom-[-210px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
