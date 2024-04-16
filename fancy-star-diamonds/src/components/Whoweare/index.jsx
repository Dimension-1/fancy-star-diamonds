import React from "react";
import arrow from "../../assets/arrow.svg";
import ringshadow from "../../assets/ringshadow.svg";
import diamonds from "../../assets/diamonds.svg";
import earrings from "../../assets/earrings.svg";
const Whoweare = () => {
  return (
    <>
      <div className="w-[350px] sm:w-[90vw] mx-auto relative bg-[#A9C4C9] text-[#111c7a] rounded-lg p-4 md:p-16">
        <h1 className=" text-[24px] md:text-[48px] font-semibold mt-4">
          Who are we?
        </h1>
        <p className="mt-8 text-[12px] md:text-[16px] leading-7 w-[290px] md:w-fit lg:w-[800px]">
          Fancy Star Diamonds is a third generation family business that has
          established itself as a major supplier of fancy shape diamonds.
          Initially, the company specialized in marquise and pear shape
          diamonds, carving out a unique niche in the marketplace as the largest
          wholesaler of fancy shape diamonds. Since then, Fancy Star Diamonds
          has expanded into designing and producing jewelry and caters to
          various retailers across the MENA region. 
        </p>
        <div className="flex gap-x-2 font-semibold md:justify-end md:text-[20px] pt-8 border-b-[1px] pb-4 border-[#111c7a]">
          <h1>ABOUT US</h1>
          <img src={arrow} />
        </div>
        <div className="flex gap-x-12 pt-10 pb-16 ">
          <div>
            <h1 className="text-[40px] md:text-[64px]">05</h1>
            <h1 className="text-[12px] md:text-[16px] font-semibold">
              Continents
            </h1>
          </div>
          <div>
            <h1 className="text-[40px] md:text-[64px]">25+</h1>
            <h1 className="text-[12px] md:text-[16px] font-semibold">
              Countries
            </h1>
          </div>
          <div>
            <h1 className="text-[40px] md:text-[64px]">50+</h1>
            <h1 className="text-[12px] md:text-[16px] font-semibold">
              Enterprise
            </h1>
          </div>
        </div>
        <div className="absolute bottom-[-100px] right-2 md:bottom-[-230px]">
          <img src={ringshadow} className="md:h-[440px]" />
        </div>
      </div>
      <div className="relative w-[360px] md:ml-10 lg:ml-8 ">
        <img src={diamonds} className="pt-16 pl-4 lg:h-[295px] " />
        <img
          src={earrings}
          className="absolute right-4 lg:right-[-100px] pb-8 lg:h-[561px] top-[120px]"
        />
      </div>
      <div className="text-[#111c7a] w-[340px] lg:ml-[580px] md:w-[350px] md:ml-[200px] lg:w-[400px] xl:w-[600px] mx-auto mt-[260px] lg:mt-[-100px]">
        <h1 className="text-[24px] md:text-[48px] font-semibold">
          Our Mission
        </h1>
        <p className="mt-2 text-[12px] md:text-[16px]   md:leading-8 leading-6 font-medium">
          Our mission is to cultivate long-lasting business partnerships by
          delivering unparalleled service to our valued clients. We aspire to
          foster sustained growth and prosperity through a positive and
          well-aligned organizational culture, ensuring that both our team and
          products consistently radiate excellence.
        </p>
      </div>
      <div className="text-[#111c7a] w-[340px] md:w-[350px] lg:w-[400px] md:ml-[200px] xl:w-[600px] lg:ml-[580px] mx-auto mt-8">
        <h1 className="text-[24px] md:text-[48px] font-semibold">Our Vision</h1>
        <p className="mt-2 text-[12px] md:text-[16px] md:leading-8 leading-6 font-medium">
          Our vision is to be recognized as a global player in the diamond
          industry, delivering value to all stakeholders. Anchored by a strong
          manufacturing base in India, we are committed to upholding our
          standards and competitive edge through stringent quality control and
          consistency.
        </p>
      </div>
      <div className="flex mt-8 justify-center lg:mt-[100px] pb-8">
        <div className="flex bg-[#D8A99E] w-fit py-4 px-6 gap-x-4 rounded-full">
          <h1 className="text-[#111c7a] font-bold">READ MORE ABOUT US</h1>
          <img src={arrow} />
        </div>
      </div>
    </>
  );
};

export default Whoweare;
