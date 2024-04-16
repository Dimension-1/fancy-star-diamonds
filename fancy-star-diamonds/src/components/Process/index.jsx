import React, { useState } from "react";
import line from "../../assets/line.svg";
import arrowlong from "../../assets/arrowlong.svg";
import earrings2 from "../../assets/earrings2.svg";
import process1 from "../../assets/process1.svg";
import VerticalSpacer from "../../components/VerticalSpacer";

const Process = () => {
  const [selectedOption, setSelectedOption] = useState("Sorting");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  let numberText;
  if (selectedOption === "Sorting") {
    numberText = "01";
  } else if (selectedOption === "Cutting & Polishing") {
    numberText = "02";
  } else if (selectedOption === "Manufacturing & Loose Diamonds") {
    numberText = "03";
  }

  return (
    <>
      <div>
        <div>
          <h1 className="text-[32px] md:text-[64px] text-center font-semibold text-[#111c7a]">
            How is a diamond Jewellery made at FSD?
          </h1>
        </div>
        <div className="flex md:justify-center gap-x-4 scrollbar overflow-x-scroll ml-4 mt-4 pb-8 pr-4">
          <div
            className={`border-[1px] border-[#D8A99E] sm:text-[36px] whitespace-nowrap py-2 px-4 rounded-full ${
              selectedOption === "Sorting"
                ? "bg-[#D8A99E] text-white"
                : "text-[#D8A99E]"
            }`}
            onClick={() => handleOptionClick("Sorting")}
          >
            Sorting
          </div>
          <div
            className={`border-[1px] border-[#D8A99E] sm:text-[36px] whitespace-nowrap py-2 px-4 rounded-full ${
              selectedOption === "Cutting & Polishing"
                ? "bg-[#D8A99E] text-white"
                : "text-[#D8A99E]"
            }`}
            onClick={() => handleOptionClick("Cutting & Polishing")}
          >
            Cutting & Polishing
          </div>
          <div
            className={`border-[1px] border-[#D8A99E] sm:text-[36px] whitespace-nowrap py-2 px-4 rounded-full ${
              selectedOption === "Manufacturing & Loose Diamonds"
                ? "bg-[#D8A99E] text-white"
                : "text-[#D8A99E]"
            }`}
            onClick={() => handleOptionClick("Manufacturing & Loose Diamonds")}
          >
            Manufacturing & Loose Diamonds
          </div>
        </div>
        <div className="sm:grid sm:justify-center">
          <div className="flex gap-x-4 text-[32px] md:text-[64px] md:ml-[100px] md:py-10 font-semibold ml-8 text-[#D2B976]">
            <h2>{numberText}</h2>
            <img src={line} alt="line" className="w-[250px]" />
          </div>
          <div className="bg-[#D2B976] xl:h-[419px] w-[265px] md:w-[400px] xl:w-[650px] p-4 md:p-16 ml-4 md:ml-[100px] rounded-lg relative pb-[60px]">
            <h2 className="text-[#111c7a] text-[32px] md:text-[48px] font-semibold">
              {selectedOption}
            </h2>
            <h2 className="text-white mt-4 text-[12px] xl:w-[482px] md:text-[16px] leading-6">
              {/* Dummy content for now */}
              {selectedOption === "Sorting" &&
                "Sorting content goes here. Once they are received, our facilities meticulously grade the rough diamonds, considering factors such as color, shape, size, and overall quality to categorize them effectively. Following this assessment, the diamond production process enters the planning phase, where the raw gemstone undergoes transformation into a brilliant diamond."}
              {selectedOption === "Cutting & Polishing" &&
                "Cutting & Polishing content goes here."}
              {selectedOption === "Manufacturing & Loose Diamonds" &&
                "Manufacturing & Loose Diamonds content goes here."}
            </h2>
            <img
              src={earrings2}
              alt="earrings"
              className="absolute bottom-[-100px] lg:w-[178px] lg:right-[-50px] lg:bottom-[70px] "
            />
          </div>
          <div>
            <img
              src={process1}
              alt="process"
              className="z-[-1] ml-[100px] md:ml-[300px] xl:ml-[600px] xl:w-[600px] mt-[-50px] md:w-[400px]  xl:mt-[-550px] xl:h-[581px]"
            />
          </div>
        </div>
        <VerticalSpacer />
        <div className="flex justify-center my-8">
          <img src={arrowlong} className="md:w-[400px]" alt="arrow" />
        </div>
        <VerticalSpacer />
      </div>
    </>
  );
};

export default Process;
