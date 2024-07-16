import {
  Autoplay,
  EffectFade,
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "@/styles/homebanner.style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
const HomeBanner1 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="bg-red-200 min-h-[70vh] relative, select-none flex">
      <div className="w-[90%]">
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, EffectFade, Autoplay, Thumbs]}
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-full max-h-[70vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-full max-h-[70vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-full max-h-[70vh]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-[10%]">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          slidesPerView={10}
          freeMode={true}
          //   watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="p-2 border-2 mySwiper"
          style={{ height: "100%" }}
        >
          <SwiperSlide className="">
            <div className="p-2 border-2 ">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                className=" hover:scale-105 duration-100 h-10"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-2 border-2">
            <div>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className=" hover:scale-105 duration-100 h-10"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-2 border-2">
            <div>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className=" hover:scale-105 duration-100 h-10"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner1;
