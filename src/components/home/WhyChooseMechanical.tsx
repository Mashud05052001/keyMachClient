import { allFaqForChoosingMechanicalKeyboard } from "@/constant/homeConstant";
import CommonAccordian from "../accordian/CommonAccordian";
import HomeTitle from "./HomeTitle";
import img from "@/assets/images/homeBanner/img5.png";

const WhyChooseMechanical = () => {
  return (
    <div className="overflow-hidden ">
      <HomeTitle title="Why Choose Mechanical Keyboards" />

      {/* Latest Products */}
      <div className="lg:grid grid-cols-2 gap-5">
        <div>
          {allFaqForChoosingMechanicalKeyboard && (
            <CommonAccordian
              accordianData={allFaqForChoosingMechanicalKeyboard}
            />
          )}
        </div>
        <div className="w-full h-[285px]  relative hidden lg:block">
          <img src={img} alt="" className="absolute top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMechanical;
