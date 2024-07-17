import { customizableOptions } from "@/constant/homeConstant";
import HomeTitle from "./HomeTitle";

const CustomizableOptions = () => {
  return (
    <div className="overflow-hidden ">
      <HomeTitle title="Customizable Options" />

      {/* Customizable Keyboard Options */}
      <div>
        <div className="h-full w-full  mx-auto">
          <div className="mx-auto relative mb-3 lg:mb-0">
            <div className="lg:space-x-2 grid gap-3 sm:gap-5 grid-cols-2 md:grid-cols-3 ">
              {customizableOptions &&
                customizableOptions?.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-2 hover:scale-105 duration-150 border-[0.1px] border-b-2 border-r-2  p-5 rounded-lg border-gray-200 shadow"
                  >
                    {/* Title */}
                    <div className=" font-semibold">
                      <h2>{item.title}</h2>
                    </div>
                    {/* Description */}
                    <p className="text-sm ">{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableOptions;
