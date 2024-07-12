import { Button } from "../ui/button";

type TPrimaryButtonProps = {
  buttonText: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};
const PrimaryButton = ({
  buttonText,
  className,
  type = "button",
}: TPrimaryButtonProps) => {
  return (
    <Button
      type={type}
      className={`bg-common-800/80 hover:bg-common-700 ${className}`}
    >
      {buttonText}
    </Button>
  );
};

export default PrimaryButton;
