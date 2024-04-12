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
      <div className="flex flex-wrap  gap-x-10 w-[340px] lg:w-[1300px] mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#A9C4C9] relative mt-16 w-[150px] lg:w-[180px] h-[170px] rounded-lg"
          >
            <div className="bg-[#111C7A] absolute top-[-40px] lg:left-12 left-9 py-2 px-4 rounded-lg">
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
      <div className=" mt-8 sm:mt-20">
        <h1 className="text-[#111c7a] font-bold text-[64px] md:text-[128px] leading-[78px] text-center">
          Placeholder Line Here
        </h1>
        <h2 className="text-[#111c7a] text-[12px] md:text-[16px] leading-6 text-center pt-4 md:pt-16 sm:w-[700px] sm:mx-auto">
          This is a placeholder line For over 100 years we have enriched,
          delighted and enlightened people with our world of gems, jewellery and
          real estate.
        </h2>
        <div className="flex justify-center mt-8">
          <div className="flex bg-[#D8A99E] w-fit py-4 px-6 gap-x-4 rounded-full">
            <h1 className="text-[#111c7a]">KNOW MORE ABOUT OUR OPERATIONS</h1>
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
