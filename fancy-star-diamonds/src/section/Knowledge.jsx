import React from "react";
import Navbar from "../components/Navbar";
import FooterForm from "../components/FooterForm";
import Footer from "../components/Footer";

const Knowledge = () => {
  return (
    <>
      <Navbar />
      <div className="py-8 lg:py-28 w-[330px] lg:w-fit mx-auto">
        <h1 className="text-[#D2B976] text-center text-[64px] lg:text-[128px]">
          The 4 C’s
        </h1>
        <div className="relative lg:flex lg:justify-between mt-8">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:w-[500px] mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">01</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">Cut</h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              The cut of a diamond refers to how well the diamond has been
              shaped and faceted from its rough state. A well-cut diamond will
              have more brilliance and sparkle because it's been cut in a way
              that allows for maximum light reflection and refraction. The cut
              is often considered the most important of the 4Cs because it has
              the greatest influence on a diamond's aesthetic appeal. The
              quality of a cut is graded from excellent to poor.
            </h2>
          </div>
          <div>
            <img
              src="./knowledge/diamond1.svg"
              className="absolute right-8 top-[200px] lg:right-[38rem] lg:top-[300px]"
            />
          </div>
        </div>
        <div className="relative mt-8 lg:w-fit lg:flex  lg:flex-row-reverse">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:ml-24 lg:w-[500px] mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto lg:mx-2 mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">02</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">Color</h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              Diamond color grading ranges from D (colorless) to Z (light
              color). The closer a diamond is to being colorless, the higher its
              value, as colorless diamonds allow more light to pass through
              them, resulting in greater sparkle. However, some colored diamonds
              (like pinks, blues, and yellows) are highly prized and can be more
              valuable than colorless ones, depending on the saturation and hue.
            </h2>
            <div className="font-semibold text-[12px] text-[#111c72] grid grid-cols-2 py-8 gap-y-2">
              <h2>Absolutely Colorless: D</h2>
              <h2>Near Colorless:G-J</h2>
              <h2>Colorless: E-F</h2>
              <h2>Noticeable Color:M-Z</h2>
            </div>
          </div>
          <div>
            <img
              src="./knowledge/diamond2.svg"
              className="absolute right-8 top-[200px] lg:top-[314px] lg:right-0"
            />
          </div>
        </div>
        <div className="relative lg:gap-x-16 lg:flex mt-8">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:w-[500px] mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">03</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">
              Clarity
            </h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              A stone's clarity grade is determined by its size, location,
              relief, kind, and quantity of inclusions. It speaks to the degree
              of clarity or cleanliness within the diamond.
            </h2>
            <div className="text-[#111c7a] mt-4 text-[12px] font-semibold leading-6">
              <h2>
                Flawless:Without any defects, either exterior or internal.
              </h2>
              <h2 className="mt-4">
                Internally Flawless: Nothing to be found. Still, flaws could be
                obvious.
              </h2>
              <h2 className="mt-4">
                VVS1/2: Even at 10x magnification, tiny inclusions will probably
                be difficult to spot under a microscope.
              </h2>
              <h2 className="mt-4">
                VS1/2: At 10x magnification, there are a few small inclusions.
              </h2>
              <h2 className="mt-4">
                SI1/2: At 10x magnification, you will see very obvious and
                conspicuous
              </h2>
              <h2>
                inclusions. You may occasionally be able to view them without
                the need for magnification.
              </h2>
              <h2 className="mt-4">
                I1/I2/I3: Clearly visible inclusions are present, and they may
                be seen with or without a 10x
              </h2>
              <h2>
                Magnification. It's possible that the additions are now
                compromising the durability.
              </h2>
            </div>
          </div>
          <div>
            <img
              src="./knowledge/diamond3.svg"
              className="absolute right-8 top-[200px] lg:right-[38rem] lg:top-[300px]"
            />
          </div>
        </div>
        <div className="relative mt-8 lg:w-fit lg:flex  lg:flex-row-reverse">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:w-[500px] lg:ml-24 mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">04</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">Carat</h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              The weight of a diamond is expressed in terms of a specific unit
              called carat weight. It depends on the stone's composition and how
              the weight is distributed. Because larger diamonds are harder to
              find than smaller ones, their value is higher. Diamonds that weigh
              exactly below the ensuing cut-off sizes are referred to as
              "under-sizes". Cutter heads aim to hit the "cut off" sizes
              of.50ct,.75ct,.90ct, 1.00ct, 1.50ct, and 2.00ct. Because
              under-sizes are extremely rare and offer excellent value, cutters
              strive to produce them.
            </h2>
          </div>
          <div>
            <img
              src="./knowledge/diamond4.svg"
              className="absolute right-8 top-[200px] lg:top-[314px] lg:right-0"
            />
          </div>
        </div>
      </div>
      <FooterForm />
      <Footer />
    </>
  );
};

export default Knowledge;
