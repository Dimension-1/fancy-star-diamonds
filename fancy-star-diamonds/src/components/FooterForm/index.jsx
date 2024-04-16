import React from "react";
import necklace from "../../assets/necklace.svg";
import VerticalSpacer from "../../components/VerticalSpacer";
import ring2 from "../../assets/ringform.svg";
import Form from "../../components/Form";

const FooterForm = () => {
  return (
    <div className="bg-[#0A0E25] xl:relative">
      <img src={necklace} className="w-fit mx-auto md:w-[700px]" />
      <h1 className="text-[32px] lg:text-[64px] xl:absolute xl:left-[5vw] xl:text-left xl:top-[250px] w-[300px] xl:w-[600px] mx-auto text-[#D2B976] text-center">
        Got A Question? Send Us A Message
      </h1>
      <div className="w-[329px] 2xl:absolute xl:top-16 xl:right-[10vh] xl:w-[570px] xl:h-[746px] rounded-lg bg-[#F8F9FA] mx-auto mt-4 h-[430px]">
        <Form />
      </div>

      <img src={ring2} className="lg:w-[500px]" />
    </div>
  );
};

export default FooterForm;
