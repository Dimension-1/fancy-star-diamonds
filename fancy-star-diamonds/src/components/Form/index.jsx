import React from "react";
import InputField from "../InputField";

const Label = ({ text, className }) => {
  return (
    <h4 className="text-[#111c7a] mt-4 lg:mt-8 text-[10px] md:text-[16px] font-semibold">
      {text}
    </h4>
  );
};

const Form = () => {
  return (
    <div className="flex flex-col px-4 py-8 text-[10px] md:text-[16px]">
      <h2 className="text-[#555970] lg:mt-8">
        Please share a few details with us so that we can help you with your
        enquiry
      </h2>
      <form className="lg:mt-8">
        <Label text="Full Name*" />
        <InputField placeholder="First and Last Name" />
        <Label text="Email*" />
        <InputField placeholder="mail@example.com" />
        <Label text="Mobile Phone Number" />
        <InputField placeholder="+" />
        <Label text="Your Message" />
        <InputField placeholder="Type here" />
        <button className="mt-4 p-2 bg-[#1328A3] text-white rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
