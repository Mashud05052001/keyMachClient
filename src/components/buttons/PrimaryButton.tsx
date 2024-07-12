import { Button } from "../ui/button";

type TPrimaryButtonProps = {
  buttonText: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};
const PrimaryButton = ({
  buttonText,
  className,
  type = "button",
  disabled = false,
}: TPrimaryButtonProps) => {
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

export default PrimaryButton;
