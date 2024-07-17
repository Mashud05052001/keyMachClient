import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import CommonBigMarginContainer from "@/components/container/CommonBigMarginContainer";
import HomeBanner from "@/components/home/HomeBanner";
import HomeService from "@/components/home/HomeService";
import HomeProducts from "@/components/home/HomeProducts";
import HomeTopBrands from "@/components/home/HomeTopBrands";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeReview from "@/components/home/HomeReview";
import WhyChooseMechanical from "@/components/home/WhyChooseMechanical";
import CustomizableOptions from "@/components/home/CustomizableOptions";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="overflow-hidden">
        <CommonMarginTopContainer>
          <HomeBanner />
        </CommonMarginTopContainer>
        <CommonBigMarginContainer>
          <HomeService />
        </CommonBigMarginContainer>
        <CommonBigMarginContainer>
          <HomeProducts />
        </CommonBigMarginContainer>
        <CommonBigMarginContainer>
          <HomeTopBrands />
        </CommonBigMarginContainer>
        <CommonBigMarginContainer>
          <HomeReview />
        </CommonBigMarginContainer>
        <CommonBigMarginContainer>
          <WhyChooseMechanical />
        </CommonBigMarginContainer>
        <CommonBigMarginContainer>
          <CustomizableOptions />
        </CommonBigMarginContainer>
      </div>
    </motion.div>
  );
};

export default Home;
