import Lottie from "lottie-react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import aboutAnimation from "../../assets/Animation/about-us.json";
import FormInput from "@/components/Form/formItems/FormInput";
import { FormProvider, useForm } from "react-hook-form";
import FormTextArea from "@/components/Form/formItems/FormTextArea";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
    <div className="p-8  lg:h-[90vh] flex items-center ">
      {/* <div className="lg:grid grid-cols-2 flex flex-col-reverse"> */}
      <div className=" flex flex-col-reverse  lg:grid lg:grid-cols-2 items-center mx-auto justify-center ">
        <div className="flex justify-end w-full">
          <div className="w-full lg:w-10/12 mt-5 lg:mt-0">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Facing any issue?</h2>
              <p className="mb-6 text-base">Feel free to contact us</p>
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
                  <PrimaryButton
                    buttonText="Complain Here"
                    type="submit"
                    className="mt-6"
                  />
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="mx-auto relative mb-3 lg:mb-0"
        >
          <div className="mx-auto">
            <Lottie animationData={aboutAnimation} className="mx-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
