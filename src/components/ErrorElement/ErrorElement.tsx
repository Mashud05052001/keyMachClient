import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import MainContainer from "../container/MainContainer";

const ErrorElement = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 select-none">
        <div></div>
        <div className="flex text-xl space-x-2 justify-center items-center">
          <ExclamationTriangleIcon className="size-8 text-common-600 " />
          <p>Page Not Found.</p>
          <p>
            <span
              onClick={() => navigate("/")}
              className="underline cursor-pointer"
            >
              Click here
            </span>{" "}
            to go home.
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default ErrorElement;
