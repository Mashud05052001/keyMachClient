import { Controller } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type TFormTextarea = {
  name: string;
  className?: string;
  rules?: any;
};
const FormTextArea = ({ name, className, rules }: TFormTextarea) => {
  return (
    <div className={`relative  rounded-lg ${className}`}>
      <Controller
        name={name}
        rules={rules}
        render={({ field }) => (
          <div>
            <Textarea
              {...field}
              className="peer w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2 text-gray-800 focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent"
              placeholder=""
              id="navigate_ui_input_01"
            />
            <label
              className="absolute -top-2 left-2 rounded-md bg-gray-600 px-2 text-xs text-white duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-gray-600 peer-focus:text-xs peer-focus:text-white"
              htmlFor="navigate_ui_input_01"
            >
              {name}
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default FormTextArea;
