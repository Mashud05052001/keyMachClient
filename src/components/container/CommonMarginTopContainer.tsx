import { TChildren } from "@/types/someShortTypes";

const CommonMarginTopContainer = ({ children }: TChildren) => {
  return <div className="mt-6">{children}</div>;
};

export default CommonMarginTopContainer;
