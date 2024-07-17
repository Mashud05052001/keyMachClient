export type TButtonProps = {
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
}: TButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-transparent text-common-800/80 hover:text-common-700 border-[1.5px] rounded-lg border-common-800/80 font-semibold hover:bg-gray-200/70 ${className} duration-100 overflow-hidden`}
      disabled={disabled}
    >
      <p className="w-full h-full py-1 rounded-lg ">{buttonText}</p>
    </button>
  );
};

export default PrimaryButton;
