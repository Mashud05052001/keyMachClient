import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TFormProps = {
  className?: string;
  name: string;
  label: string;
  accept: "image" | "pdf" | "all";
};
const FormFile = ({ className, name, label, accept }: TFormProps) => {
  const [showName, setShowName] = useState({ name: "" });
  const {
    formState: { errors },
  } = useFormContext();
  const generateAccept = () => {
    if (accept === "all") return "*";
    else if (accept === "image") return "image/*";
    else if (accept === "pdf") return ".pdf";
  };

  return (
    <Controller
      name={name}
      rules={{ required: `${label ? label : name} is required` }}
      render={({ field: { onChange } }) => (
        <div className={`${className} `}>
          <div className="grid items-center  h-full">
            {/* <Input id="picture" type="file"  /> */}
            <div className="h-full">
              <label htmlFor="type1" className="flex h-full">
                <div className="w-fit whitespace-nowrap  bg-[#4b5563] rounded-l-lg h-full flex items-center px-2 py-1 text-sm text-white">
                  Choose {label ? label : "File"}
                </div>
                <div
                  className={`flex  w-full rounded-r-lg items-center border-[1px] border-[#6b7280] px-2 text-sm font-medium ${
                    showName.name ? "text-[#4b5563]" : "text-[#aaa1aa]"
                  }
                  ${
                    errors?.image?.type === "required" &&
                    "border-red-400 border-[2.5px] border-l-0"
                  }
                  `}
                >
                  <p>
                    {errors?.image?.type === "required" ? (
                      <span className="text-red-700 font-normal">
                        Please select an {name}
                      </span>
                    ) : showName.name ? (
                      showName.name
                    ) : (
                      `No ${label ? label : "File"} Chosen`
                    )}
                  </p>
                </div>
              </label>
              <input
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onChange(file); // Update the react-hook-form field value
                    setShowName({ name: file.name }); // Update the displayed file name
                  }
                }}
                accept={generateAccept()}
                className="hidden"
                type="file"
                name={name}
                id="type1"
              />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default FormFile;
