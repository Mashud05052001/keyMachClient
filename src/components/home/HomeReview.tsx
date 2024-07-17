import { allCustomerReviews } from "@/constant/homeConstant";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import HomeTitle from "./HomeTitle";
import { useEffect, useState } from "react";

const HomeReview = () => {
  const totalReviews = allCustomerReviews?.length;
  const [activeReview, setActiveReview] = useState(allCustomerReviews[0].id);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    const interval = setInterval(() => {
      const upComingIndex =
        activeReview === totalReviews ? 0 : activeReview + 1;
      setActiveReview(upComingIndex);
      api?.scrollTo(upComingIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeReview, api]);

  const handleNext = () => {
    const upComingIndex = activeReview === totalReviews ? 0 : activeReview + 1;
    setActiveReview(upComingIndex);
    api?.scrollTo(upComingIndex);
  };
  const handlePrev = () => {
    const upComingIndex =
      activeReview === 0 ? totalReviews - 1 : activeReview - 1;
    setActiveReview(upComingIndex);
    api?.scrollTo(upComingIndex);
  };

  return (
    <div className="mb-20 relative  select-none">
      <HomeTitle title="Our Happy Clients" />
      {/* Clients Reviews */}
      <div className="">
        <Carousel
          opts={{ loop: true, align: "start", duration: 20 }}
          setApi={setApi}
        >
          <CarouselContent>
            {allCustomerReviews &&
              allCustomerReviews?.map((review) => (
                <CarouselItem
                  className="sm:basis-1/2 lg:basis-1/3"
                  key={review.id}
                >
                  <div className="max-w-sm mx-auto rounded-lg overflow-hidden  p-6 space-y-3 h-full   border-[0.1px] border-b-2 border-r-2    border-gray-200 shadow">
                    <div className="flex items-center">
                      <img
                        className="w-16 h-16 rounded-full mr-4"
                        src={review.img}
                        alt="Avatar"
                      />
                      <div className="text-left">
                        <div className="font-bold text-xl">{review.name}</div>
                        <div className="text-gray-600">{review.profession}</div>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-gray-700 text-base">{review.review}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="bg-red-200 absolute sm:-top-10 sm:right-14 right-14 top-6">
            <CarouselPrevious
              className=" absolute -left-6 border-2"
              onClick={handlePrev}
            />
            <CarouselNext onClick={handleNext} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeReview;
