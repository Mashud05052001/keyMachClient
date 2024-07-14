import { Controller } from "react-hook-form";
import { Input } from "../../ui/input";

type TFormInput = {
  name: string;
  label?: string;
  type: "text" | "email" | "number";
  className?: string;
  rules?: any;
};
const FormInput = ({ name, type, className, label }: TFormInput) => {
  const generateMax = () => {
    if (name === "rating") return 5;
    return 9999999;
  };
  const parseValue = (value: string | undefined): number | undefined => {
    if (value === undefined || value === "") {
      return undefined; // or return NaN if NaN is a valid state
    }
    return parseFloat(value);
  };

  return (
    <div className={`relative  rounded-lg ${className}`}>
      <Controller
        name={name}
        rules={{ required: `${label ? label : name} is required` }}
        render={({ field }) => (
          // <div className="relative w-max rounded-lg">
          //   <input
          //     className="peer rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
          //     type="text"
          //     placeholder=""
          //     id="navigate_ui_input_33"
          //   />
          //   <label
          //     className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
          //     htmlFor="navigate_ui_input_33"
          //   >
          //     Email
          //   </label>
          // </div>
          <div className="relative">
            <Input
              {...field}
              className={`peer w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2 text-gray-800 focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent ${
                field.value === "" && "border-red-600"
              }`}
              type={type}
              min={0}
              max={generateMax()}
              placeholder=""
              id={`input_${name}`}
              step={name === "rating" || name === "price" ? 0.01 : 1}
              onChange={(e) => {
                const value = e.target.value;
                if (type === "number") {
                  field.onChange(parseValue(value));
                } else {
                  field.onChange(value);
                }
              }}
            />
            <label
              className="absolute -top-2 left-2 rounded-md bg-gray-600 px-2 text-xs text-white duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-gray-600 peer-focus:text-xs peer-focus:text-white"
              htmlFor={`input_${name}`}
            >
              {label ? label : name}
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default FormInput;
