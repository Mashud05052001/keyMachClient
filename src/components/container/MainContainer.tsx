import { TChildren } from "@/types/someShortTypes";

const MainContainer = ({ children }: TChildren) => {
  return (
    <div className="max-w-7xl mx-auto border-2 border-black">{children}</div>
  );
};

export default MainContainer;
