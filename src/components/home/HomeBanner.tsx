import "@/styles/homebanner.style.css";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { allHomeBanners } from "@/constant/homeConstant";

const HomeBanner = () => {
  // 0,1,2,3
  const [activeIndex, setActiveIndex] = useState(0);
  const totalHomeBannerItems = allHomeBanners.length;

  const handlePrev = () => {
    if (activeIndex === 0) setActiveIndex(totalHomeBannerItems - 1);
    else setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex >= 3) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex >= 3) setActiveIndex(0);
      else setActiveIndex(activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="rounded-md min-h-[70vh]  relative overflow-hidden">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {/* <div> */}
          {allHomeBanners &&
            allHomeBanners?.map((item) => (
              <CarouselItem
                key={item.id}
                className={`${
                  activeIndex === item.id
                    ? " opacity-100  duration-1600 overflow-hidden scale-100"
                    : "absolute opacity-0 duration-1600 overflow-hidden scale-110"
                }`}
              >
                <div className="relative">
                  <div className="absolute z-20 top-12 left-12 space-y-2 bg-gray-700/50 py-4 px-8 rounded-md text-white/80">
                    <h2 className="text-3xl font-semibold">{item.name}</h2>
                  </div>
                  <img
                    src={item.img}
                    alt="Image is missing."
                    className="h-[70vh] w-full"
                  />
                  <div className="bg-gray-700/35 w-full h-[70vh] absolute z-10 top-0" />
                </div>
              </CarouselItem>
            ))}
          {/* </div> */}
        </CarouselContent>
        <div className="absolute right-16 bottom-8 z-20">
          <CarouselPrevious
            className="absolute -left-8"
            onClick={handlePrev}
            disabled={false}
          />
          <CarouselNext onClick={handleNext} disabled={false} />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
