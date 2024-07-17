import { Button } from "../ui/button";
import { TButtonProps } from "./PrimaryButton";

const SecondaryFilledButton = ({
  buttonText,
  className,
  type = "button",
  disabled = false,
}: TButtonProps) => {
  return (
    <Button
      type={type}
      className={`bg-common-800/80 hover:bg-common-700 ${className}`}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  );
};

export default SecondaryFilledButton;
