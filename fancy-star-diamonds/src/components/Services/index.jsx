import React from "react";
import arrow from "../../assets/arrow.svg";

const items = [
  { imgSrc: "./services/supply.png", heading: "Loose Diamond Supply" },
  { imgSrc: "./services/sorting.png", heading: "Diamond Sorting" },
  { imgSrc: "./services/bagging.png", heading: "Bagging & Shipping" },
  {
    imgSrc: "./services/polishing.png",
    heading: "Jewellery Setting & Polishing",
  },
  { imgSrc: "./services/sets.png", heading: "Matched Sets" },
  { imgSrc: "./services/layout.png", heading: "Customized Jewellery Layouts" },
];

const Services = () => {
  return (
    <div className="bg-[#fef4e9] py-20">
      <div className="flex flex-wrap  gap-x-10 w-[340px] xl:w-fit mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#A9C4C9] relative mt-16 w-[150px] xl:w-[180px] h-[170px] rounded-lg"
          >
            <div className="bg-[#111C7A] absolute top-[-40px] xl:left-12 left-9 py-2 px-4 rounded-lg">
              <img
                src={item.imgSrc}
                className="h-[50px] w-[50px]"
                alt={item.heading}
              />
            </div>
            <h1 className="text-[#111C7A] text-[14px] w-[120px] md:text-[20px] mx-auto font-semibold text-center pt-16">
              {item.heading}
            </h1>
          </div>
        ))}
      </div>
      <div className=" mt-8  sm:w-[fit] sm:mt-20">
        <h1 className="text-[#111c7a] font-bold text-[60px] leading-[78px] md:text-[128px] md:leading-[98px] text-center">
          Placeholder Line Here
        </h1>
        <h2 className="text-[#111c7a] text-[12px] md:text-[16px] leading-6 text-center pt-4 md:pt-16 sm:w-[600px] sm:mx-auto">
          This is a placeholder line For over 100 years we have enriched,
          delighted and enlightened people with our world of gems, jewellery and
          real estate.
        </h2>
        <div className="flex justify-center mt-8">
          <div className="flex bg-[#D8A99E] w-fit py-4 md:px-4 px-2 gap-x-2 rounded-full">
            <h2 className="text-[#111c7a] text-[11px] md:text-[16px]">
              KNOW MORE ABOUT OUR OPERATIONS
            </h2>
            <img src={arrow} className="w-[8px] sm:w-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
