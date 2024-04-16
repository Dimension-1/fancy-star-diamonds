import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import diamonds from "../assets/diamonds.svg";
import earrings from "../assets/earrings.svg";
import VerticalSpacer from "../components/VerticalSpacer";
import { Chrono } from "react-chrono";
import FooterForm from "../components/FooterForm";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative xl:flex xl:justify-center">
          <h1 className="text-center w-[360px] mx-auto leading-[100px] my-4 sm:mt-8 text-[64px] sm:text-[70px] xl:text-[128px] sm:w-[600px] lg:w-[800px] xl:w-[1300px] sm:leading-[150px] md:h-[400px] text-[#d2b976]">
            Discover Best Diamond Jewellery
          </h1>
          <div className="absolute  left-[200px] sm:left-[400px] xl:left-[1100px] 2xl:left-[70vw] xl:top-[-40px] top-10">
            <img
              src="./aboutus/ring1.svg"
              className="lg:w-[325px]"
              alt="ring"
            />
          </div>
          <div className="absolute left-0 bottom-[25px] sm:left-[400px] xl:bottom-[125px] xl:left-[10vw]">
            <img
              src="./aboutus/ring2.svg"
              className="lg:w-[325px]"
              alt="diamondring"
            />
          </div>
        </div>
        <div className="xl:hidden">
          <VerticalSpacer />
        </div>
        <div className="relative">
          <div>
            <img
              src="./aboutus/hero.svg"
              className="w-[100%] sm:h-[710px] sm:w-[fit] lg:h-[70vh] object-cover"
            />
          </div>
          <div>
            <img
              src="./aboutus/snap.svg"
              className="absolute sm:left-[40vw] lg:left-[50vw] sm:top-[60vh] xl:h-[600px]  top-[180px]"
            />
          </div>
          <div className="sm:hidden">
            <VerticalSpacer /> <VerticalSpacer /> <VerticalSpacer />
            <VerticalSpacer /> <VerticalSpacer />
          </div>
        </div>
        <VerticalSpacer />
        <div className="">
          <h5 className="text-[45px] text-center text-nowrap md:hidden">
            Our Beginning
          </h5>
          <div className="md:hidden">
            <VerticalSpacer />
          </div>
          <div className="text-left sm:w-[400px] lg:w-[700px] md:ml-[5vw] text-[#111c72] mx-4">
            <h1 className="text-[32px] md:text-[64px] md:mt-8 font-semibold md:leading-[84px] leading-10">
              Distinctive Approach, Exceptional Results.
            </h1>
            <div className="md:hidden">
              <VerticalSpacer />
            </div>
            <div className="lg:flex lg:gap-x-8">
              <h2 className="text-[12px] leading-6 md:mt-8 lg:w-[340px] md:text-[16px] md:leading-8">
                Headquartered in Dubai, Fancy Star Diamonds operates a
                manufacturing unit in India, equipped with modern technology,
                ensuring precision and efficiency in producing marquise and pear
                shaped diamonds. Dedicated to the art of cutting fancy shaped
                diamonds, our skilled team contributes to our success.
              </h2>
              <div className="md:hidden">
                <VerticalSpacer />
              </div>
              <h2 className="text-[12px] leading-6 md:mt-8 md:text-[16px] lg:w-[340px] md:leading-8">
                Beyond our industry presence, Fancy Star Diamonds values
                corporate responsibility. We actively contribute to the supply
                chain's shared value, work towards improving local communities,
                and prioritize environmental and social welfare.
              </h2>
            </div>
            <h5 className=" hidden md:block text-[45px] lg:ml-[20vh] text-nowrap text-right xl:text-[161px]">
              Our Beginning
            </h5>
          </div>
        </div>
        <VerticalSpacer />
        <div>
          <h1 className=" font-semibold text-[#111c72] text-[32px] md:text-[64px] text-center">
            Our Story
          </h1>
          <VerticalSpacer />
          <div className="lg:hidden" style={{ width: "100%" }}>
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
          <div className="hidden lg:block" style={{ width: "100%" }}>
            <Chrono
              theme={{
                primary: "#D8A99E",
                secondary: "#D8A99E",
                cardBgColor: "#fef4e9",
              }}
              mode="VERTICAL_ALTERNATING"
              disableToolbar
              disableClickOnCircle
              cardHeight={400}
              borderLessCards={true}
            >
              <div className=" min-h-[300px] p-4 card">
                <h1 className="flex text-[#D8A99E] mt-4 lg:text-[60px] text-[39px] font-semibold">
                  2024
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] lg:text-[16px] lg:leading-8 leading-6">
                  Fancy star diamonds is a dubai based company withstate of the
                  art manufacturing unit in india. Fancy star diamonds is a
                  dubai based company withstate of the art manufacturing unit in
                  india. Fancy star diamonds is a dubai based company withstate
                  of the art manufacturing unit in india. Fancy star diamonds is
                  a dubai based company withstate of the art manufacturing unit
                  in india.
                </h2>
              </div>
              <div className=" min-h-[300px] p-4 card">
                <h1 className="flex text-[#D8A99E] mt-4 lg:text-[60px] text-[39px] font-semibold">
                  2023
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] g:text-[16px] lg:leading-8 leading-6">
                  Fancy star diamonds is a dubai based company withstate of the
                  art manufacturing unit in india. Fancy star diamonds is a
                  dubai based company withstate of the art manufacturing unit in
                  india. Fancy star diamonds is a dubai based company withstate
                  of the art manufacturing unit in india. Fancy star diamonds is
                  a dubai based company withstate of the art manufacturing unit
                  in india.
                </h2>
              </div>
              <div className=" min-h-[300px] p-4 card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] lg:text-[60px] font-semibold">
                  2022
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] g:text-[16px] lg:leading-8 leading-6">
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
        <VerticalSpacer />

        <div className="bg-[#A9C4C9] sm:grid sm:justify-center">
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
      <FooterForm />
      <Footer />
    </>
  );
};

export default AboutUs;
