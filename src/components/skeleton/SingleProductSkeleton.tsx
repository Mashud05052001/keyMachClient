import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import CommonMarginTopContainer from "../container/CommonMarginTopContainer";
import { useNavigate } from "react-router-dom";

const SingleProductSkeleton = () => {
  const navigate = useNavigate();
  return (
    <CommonMarginTopContainer>
      <div
        className="inline-block"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowUturnLeftIcon className="h-6 mb-1 w-6 text-common-600" />
      </div>
      <div className="mx-auto flex space-x-8 items-center animate-pulse">
        <div className="w-1/2  h-64 bg-gray-300 rounded-md"></div>
        <div className="space-y-3 w-80">
          <div className="h-8 bg-gray-300 rounded w-10/12 mb-3"></div>

          <div className="h-4 bg-gray-300 rounded w-8/12"></div>
          <div className="h-4 bg-gray-300 rounded w-6/12"></div>

          <div className="h-4 bg-gray-300 rounded w-4/12"></div>
          <div className="h-5 bg-gray-300 rounded w-2/12"></div>

          <div className="pt-5">
            <div className="h-10 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-3">
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </CommonMarginTopContainer>
  );
};

export default SingleProductSkeleton;
