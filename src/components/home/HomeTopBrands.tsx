import { ourTopBrands } from "@/constant/topBrands.constant";
import HomeTitle from "./HomeTitle";

const HomeTopBrands = () => {
  return (
    <div className="">
      <HomeTitle title="Top Brands" />
      {/* Top Brands */}
      <div className="flex justify-center flex-wrap space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 text-center py-3 rounded-md">
        {ourTopBrands?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-2 items-center hover:bg-gray-100 duration-100 rounded-md p-2 hover:opacity-100"
          >
            <img
              src={item.img}
              alt="..."
              className="w-7 h-7 sm:w-10 sm:h-10  lg:w-16 lg:h-16 "
            />
            <p className="font-semibold text-sm sm:text-base lg:text-lg opacity-100">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopBrands;
