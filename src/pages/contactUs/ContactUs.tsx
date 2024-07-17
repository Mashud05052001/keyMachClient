import SecondaryFilledButton from "@/components/buttons/SecondaryButton";
import FormInput from "@/components/Form/formItems/FormInput";
import FormTextArea from "@/components/Form/formItems/FormTextArea";
import { contactUsArray } from "@/constant/contactUs.constant";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactUs = () => {
  const methods = useForm();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onSubmit = (data: Record<string, unknown>) => {
    if (data) {
      toast.success("Email send successfully");
      methods.reset({ name: "", email: "", message: "" });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="py-5 px-4 lg:py-8  flex items-center "
    >
      <div className="flex flex-col justify-center w-full ">
        {/* Contact Us Infos */}
        <div className="h-full w-full lg:w-7/12 mx-auto mb-10">
          <div className="mx-auto relative mb-3 lg:mb-0">
            <div className="mb-6 text-3xl font-semibold">
              <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="lg:space-x-2 grid gap-3 sm:grid-cols-2 md:grid-cols-3  font-semibold">
              {contactUsArray &&
                contactUsArray?.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-2 hover:scale-105 duration-150 border-[0.1px] border-b-2 border-r-2  p-5 rounded-lg border-gray-200 shadow "
                  >
                    {/* logo */}
                    <div className="flex items-center space-x-3">
                      <item.icon />
                      <h2>{item.title}</h2>
                    </div>
                    <p className="text-sm">{item.value}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Contact Us Email */}
        <div className="flex justify-center w-full lg:w-7/12 mx-auto">
          <div className="w-full  mt-5 lg:mt-0">
            <div className="text-center space-y-1 mb-2">
              <h2 className="text-xl font-semibold">Facing any issue?</h2>
              <p className="mb-6 text-sm">Feel free to contact us</p>
            </div>
            <div className="select-none border-[0.1px] border-b-2 border-r-2  p-5 rounded-lg border-gray-200 shadow-md ">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <div className="grid gap-3 ">
                    <FormInput name="name" label="Enter Name" type="text" />
                    <FormInput name="email" label="Enter Email" type="email" />
                    <FormTextArea
                      name="message"
                      label="Enter Your Message"
                      rows={6}
                    />
                  </div>
                  <SecondaryFilledButton
                    buttonText="Complain Here"
                    type="submit"
                    className="mt-6"
                  />
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
