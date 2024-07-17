import { TChildren } from "@/types/someShortTypes";

const CommonMarginTopContainer = ({ children, className }: TChildren) => {
  return <div className={`mt-6 ${className}`}>{children}</div>;
};

export default CommonMarginTopContainer;
