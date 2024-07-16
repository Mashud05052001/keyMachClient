import Lottie from "lottie-react";
import aboutAnimation from "../../assets/Animation/about-us.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";
import { frequentAskQuestion } from "@/constant/frequentAskQuestion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false); // Initial animation state
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-4 lg:h-[90vh] md:p-8 flex items-center">
      {/* <div className="lg:grid grid-cols-2 flex flex-col-reverse"> */}
      <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2">
        <div className="">
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
          <div className="select-none">
            <p className="text-xl font-semibold mb-2">
              Some of frequent questions?
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-md shadow border-b-2 border-r-2 border-gray-300/50"
            >
              {frequentAskQuestion &&
                frequentAskQuestion?.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={`item-${item.id}`}
                    className=" pl-5 hover:bg-gray-200 duration-100 rounded-md pr-3"
                  >
                    <AccordionTrigger className="cursor-pointer hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="md:w-8/12 mx-auto lg:w-full relative xl:h-[70vh] 2xl:h-[50vh] mb-3 lg:mb-0 "
        >
          <div className="max-h-full">
            <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 ">
              <Lottie animationData={aboutAnimation} className="mx-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
