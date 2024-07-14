import Lottie from "lottie-react";
import loadingSpinner from "../../assets/Animation/loading_lottie.json";

const LoadingSpinner = () => {
  return (
    <>
      <div className="relative">
        <Lottie
          animationData={loadingSpinner}
          className="w-52 absolute left-1/2 -translate-x-1/2 pt-10"
        />
      </div>
      <div className="absolute top-0 left-0 h-screen w-screen bg-opacity-50 z-50"></div>
    </>
  );
};

export default LoadingSpinner;
