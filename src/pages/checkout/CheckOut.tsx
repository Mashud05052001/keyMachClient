import PrimaryButton from "@/components/buttons/PrimaryButton";
import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import FormInput from "@/components/Form/formItems/FormInput";
import FormTextArea from "@/components/Form/formItems/FormTextArea";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { Controller } from "react-hook-form";
import CheckOutFormProvider from "./CheckOutFormProvider";

const CheckOut = () => {
  const cart = useAppSelector((state: RootState) => state.carts);
  const [selectedOption, setSelectedOption] = useState("");

  const totalPayableAmount = Math.floor(
    Number((cart.totalPrice + (cart.totalPrice * 5) / 100).toFixed(2))
  );

  return (
    <CommonMarginTopContainer>
      <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        <h1 className="text-xl text-common-600 font-semibold text-center pb-6">
          Checkout
        </h1>
        <CheckOutFormProvider>
          <h1 className="font-medium">Customer Information</h1>
          <div className="grid grid-cols-2 pr-3 gap-3">
            <FormInput
              name="name"
              label="Name"
              type="text"
              rules={{ required: true }}
            />
            <FormInput
              name="email"
              label="Email"
              type="email"
              rules={{ required: true }}
            />
            <FormInput
              name="phone"
              label="Phone"
              type="text"
              rules={{ required: true }}
            />
            <FormTextArea
              label="Address"
              name="address"
              className="col-span-2"
              rules={{ required: true }}
            />
          </div>
          {/* Payable Amount Info */}
          <div>
            <h3 className="font-medium">
              Total Payable Amount:{" "}
              <span className="font-bold ml-3">${totalPayableAmount}</span>
            </h3>
          </div>
          {/* Payment Method Select */}
          <div>
            <div className="flex flex-col sm:flex-row sm:space-x-5 sm:items-center">
              <h3 className="font-medium mb-3 sm:pt-2">
                Select Payment Method:
              </h3>
              <div className="flex space-x-3 ">
                <Controller
                  name="paymentMethod"
                  rules={{ required: "Payment method is required" }}
                  render={({ field }) => (
                    <>
                      <div
                        className={` border-2 flex items-center  rounded-md ${
                          selectedOption === "stripe" ? "border-common-700" : ""
                        }`}
                        onClick={() => {
                          setSelectedOption("stripe");
                        }}
                      >
                        <input
                          {...field}
                          type="radio"
                          id="stripe"
                          name="paymentMethod"
                          value="stripe"
                          checked={field.value === "stripe"}
                          className="appearance-none"
                        />
                        <label
                          htmlFor="stripe"
                          className="px-5 py-2 cursor-pointer hover:bg-gray-100 duration-100 rounded-md"
                        >
                          Stripe
                        </label>
                      </div>
                      <div
                        className={` border-2 flex items-center  rounded-md ${
                          selectedOption === "cashOnDelivery"
                            ? "border-common-700"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedOption("cashOnDelivery");
                        }}
                      >
                        <input
                          {...field}
                          type="radio"
                          id="cashOnDelivery"
                          name="paymentMethod"
                          value="cashOnDelivery"
                          checked={field.value === "cashOnDelivery"}
                          className="appearance-none"
                        />
                        <label
                          htmlFor="cashOnDelivery"
                          className="px-5 py-2 cursor-pointer hover:bg-gray-100 duration-100 rounded-md"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          {/* Place Order Button */}
          <div>
            <PrimaryButton
              type="submit"
              buttonText="Place Order"
              className="w-40"
            />
          </div>
        </CheckOutFormProvider>
      </div>
    </CommonMarginTopContainer>
  );
};

export default CheckOut;
