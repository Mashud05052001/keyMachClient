import CommonAccordian from "@/components/accordian/CommonAccordian";
import { frequentAskQuestion } from "@/constant/frequentAskQuestion";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import aboutAnimation from "../../assets/Animation/about-us.json";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 lg:h-[90vh] md:p-8 flex items-center"
    >
      <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2">
        {/* About Us Infos */}
        <div className="">
          {/* Our Mission */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              At <span className="text-common-600">KeyMach</span>, we are
              passionate about delivering the best typing experience to our
              customers. Our mission is to provide high-quality, customizable
              keyboards that enhance productivity and bring joy to typing
              enthusiasts around the world.
            </p>
          </div>
          {/* Frequent Answer Question */}
          <div className="select-none">
            <p className="text-xl font-semibold mb-2">
              Some of frequent questions?
            </p>
            {frequentAskQuestion && (
              <CommonAccordian accordianData={frequentAskQuestion} />
            )}
          </div>
          <p className="text-lg my-6">
            Thank you for Visiting{" "}
            <NavLink to={"/"}>
              <span className="font-semibold text-common-600 hover:underline">
                KeyMach
              </span>{" "}
            </NavLink>
          </p>
        </div>
        {/* About Us Animation */}
        <div className="md:w-8/12 mx-auto lg:w-full relative xl:h-[70vh] 2xl:h-[50vh] mb-3 lg:mb-0 ">
          <div className="max-h-full">
            <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 ">
              <Lottie animationData={aboutAnimation} className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
