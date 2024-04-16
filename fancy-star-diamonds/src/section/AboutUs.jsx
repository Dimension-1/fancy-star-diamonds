import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import diamonds from "../assets/diamonds.svg";
import earrings from "../assets/earrings.svg";
import VerticalSpacer from "../components/VerticalSpacer";
import { Chrono } from "react-chrono";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative">
          <h1 className="text-center w-[360px] mx-auto leading-[100px] text-[64px] text-[#d2b976]">
            Discover Best Diamond Jewellery
          </h1>
          <div className="absolute  left-[200px]  top-10">
            <img src="./aboutus/ring1.svg" alt="ring" />
          </div>
          <div className="absolute left-0 bottom-[25px]">
            <img src="./aboutus/ring2.svg" alt="diamondring" />
          </div>
        </div>
        <VerticalSpacer />
        <div className="relative">
          <div>
            <img src="./aboutus/hero.svg" className="w-[100%]" />
          </div>
          <div>
            <img src="./aboutus/snap.svg" className="absolute top-[180px]" />
          </div>
          <div>
            <VerticalSpacer /> <VerticalSpacer /> <VerticalSpacer />
            <VerticalSpacer /> <VerticalSpacer />
          </div>
          <h5 className="text-[45px] text-center text-nowrap">Our Beginning</h5>
          <VerticalSpacer />
          <div className="text-left text-[#111c72] mx-4">
            <h1 className="text-[32px] leading-10">
              Distinctive Approach, Exceptional Results.
            </h1>
            <VerticalSpacer />
            <h2 className="text-[12px] leading-6">
              Headquartered in Dubai, Fancy Star Diamonds operates a
              manufacturing unit in India, equipped with modern technology,
              ensuring precision and efficiency in producing marquise and pear
              shaped diamonds. Dedicated to the art of cutting fancy shaped
              diamonds, our skilled team contributes to our success.
            </h2>
            <VerticalSpacer />
            <h2 className="text-[12px] leading-6">
              Beyond our industry presence, Fancy Star Diamonds values corporate
              responsibility. We actively contribute to the supply chain's
              shared value, work towards improving local communities, and
              prioritize environmental and social welfare.
            </h2>
          </div>
        </div>
        <VerticalSpacer />
        <div>
          <h1 className=" font-semibold text-[#111c72] text-[32px] text-center">
            Our Story
          </h1>
          <VerticalSpacer />
          <div style={{ width: "100%" }}>
            <Chrono
              theme={{
                primary: "#D8A99E",
                secondary: "#D8A99E",
                cardBgColor: "#fef4e9",
              }}
              mode="VERTICAL"
              disableToolbar
              disableClickOnCircle
              cardHeight={400}
              borderLessCards={true}
            >
              <div className=" min-h-[300px] card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] font-semibold">
                  2024
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] leading-6">
                  Fancy star diamonds is a dubai based company withstate of the
                  art manufacturing unit in india. Fancy star diamonds is a
                  dubai based company withstate of the art manufacturing unit in
                  india. Fancy star diamonds is a dubai based company withstate
                  of the art manufacturing unit in india. Fancy star diamonds is
                  a dubai based company withstate of the art manufacturing unit
                  in india.
                </h2>
              </div>
              <div className=" min-h-[300px] card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] font-semibold">
                  2023
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] leading-6">
                  Fancy star diamonds is a dubai based company withstate of the
                  art manufacturing unit in india. Fancy star diamonds is a
                  dubai based company withstate of the art manufacturing unit in
                  india. Fancy star diamonds is a dubai based company withstate
                  of the art manufacturing unit in india. Fancy star diamonds is
                  a dubai based company withstate of the art manufacturing unit
                  in india.
                </h2>
              </div>
              <div className=" min-h-[300px] card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] font-semibold">
                  2022
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] leading-6">
                  Fancy star diamonds is a dubai based company withstate of the
                  art manufacturing unit in india. Fancy star diamonds is a
                  dubai based company withstate of the art manufacturing unit in
                  india. Fancy star diamonds is a dubai based company withstate
                  of the art manufacturing unit in india. Fancy star diamonds is
                  a dubai based company withstate of the art manufacturing unit
                  in india.
                </h2>
              </div>
            </Chrono>
          </div>
        </div>
        <div className="bg-[#A9C4C9]">
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
            <h2 className="mt-2 text-[12px] md:text-[16px]   md:leading-8 leading-6 font-medium">
              Our mission is to cultivate long-lasting business partnerships by
              delivering unparalleled service to our valued clients. We aspire
              to foster sustained growth and prosperity through a positive and
              well-aligned organizational culture, ensuring that both our team
              and products consistently radiate excellence.
            </h2>
          </div>
          <div className="text-[#111c7a] w-[340px] md:w-[350px] lg:w-[400px] md:ml-[200px] xl:w-[600px] lg:ml-[580px] mx-auto mt-8">
            <h1 className="text-[24px] md:text-[48px] font-semibold">
              Our Vision
            </h1>
            <h2 className="mt-2 text-[12px] md:text-[16px] md:leading-8 leading-6 font-medium">
              Our vision is to be recognized as a global player in the diamond
              industry, delivering value to all stakeholders. Anchored by a
              strong manufacturing base in India, we are committed to upholding
              our standards and competitive edge through stringent quality
              control and consistency.
            </h2>
          </div>
          <VerticalSpacer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
