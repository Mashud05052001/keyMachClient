import { TChildren } from "@/types/someShortTypes";

const CommonBigMarginContainer = ({ children, className }: TChildren) => {
  return <div className={`mt-12 md:mt-24 ${className}`}>{children}</div>;
};

export default CommonBigMarginContainer;
