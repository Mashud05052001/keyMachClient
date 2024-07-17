import { allHomeServices } from "@/constant/homeConstant";
import HomeTitle from "./HomeTitle";

const HomeService = () => {
  return (
    <div>
      <HomeTitle title="Services" />
      {/* Services */}
      <div>
        <div className="h-full w-full  mx-auto">
          <div className="mx-auto relative mb-3 lg:mb-0">
            <div className="lg:space-x-2 grid gap-3 sm:gap-5 grid-cols-2 md:grid-cols-4 ">
              {allHomeServices &&
                allHomeServices?.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-2 hover:scale-105 duration-150 border-[0.1px] border-b-2 border-r-2  p-5 rounded-lg border-gray-200 shadow"
                  >
                    {/* logo */}
                    <div className="flex items-center justify-center space-x-3 font-semibold">
                      <item.icon />
                      <h2>{item.title}</h2>
                    </div>
                    <p className="text-sm text-center">{item.subTitle}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
