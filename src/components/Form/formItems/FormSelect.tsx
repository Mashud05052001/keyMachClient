import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TFormSelect = {
  name: string;
  label?: string;
  className?: string;
  options: string[];
};
const FormSelect = ({ name, className, label, options }: TFormSelect) => {
  return (
    <div className={`relative  rounded-lg ${className}`}>
      <Controller
        name={name}
        rules={{ required: `${label ? label : name} is required` }}
        render={({ field }) => (
          <div>
            <Select
              defaultValue={field.value}
              name={field.name}
              onValueChange={field.onChange}
              onOpenChange={field.onChange}
            >
              <SelectTrigger
                className={`peer  w-full rounded-lg border border-gray-500 bg-transparent px-4 py-2 text-gray-800 focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent`}
              >
                <SelectValue placeholder={`Select ${label}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{label}</SelectLabel>
                  {options &&
                    options.map((option) => (
                      <SelectItem value={option} key={option}>
                        {option}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
              <label
                className="absolute -top-2 left-2 rounded-md bg-gray-600 px-2 text-xs text-white duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-gray-600 peer-focus:text-xs peer-focus:text-white"
                id={`input_${name}`}
              >
                {label ? label : name}
              </label>
            </Select>
          </div>
        )}
      />
    </div>
  );
};

export default FormSelect;
