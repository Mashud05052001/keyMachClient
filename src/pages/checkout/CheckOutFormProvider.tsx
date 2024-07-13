import { clearAllCart, getCartInfos } from "@/redux/features/cart/cartSlice";
import { useUpdateProductQuantityWhileOrderingMutation } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TOrder } from "@/types/order.types";
import { TChildren } from "@/types/someShortTypes";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CheckOutFormProvider = ({ children }: TChildren) => {
  const methods = useForm();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartInfos);
  const [updateData, setUpdateData] = useState<
    { _id: string; quantity: number }[]
  >([]);
  // const [addTodo, { isLoading, isSuccess, isError, data, ... }] = useAddTodoMutation();
  const [updateQuantityWhileOrdering, { data }] =
    useUpdateProductQuantityWhileOrderingMutation();

  const onSubmit: SubmitHandler<TOrder> = async (data) => {
    if (data.paymentMethod === "stripe") {
      toast.error(
        `The stripe payment methos hasn't implement. Soon it will be added.`
      );
    } else {
      if (!cartItems) toast.error(`No cart items available for place order`);
      else {
        const updateData = cartItems.map((item) => ({
          _id: item._id,
          quantity: item.count,
        }));
        console.log(updateData);
        try {
          const result = await updateQuantityWhileOrdering(updateData).unwrap();
          if (result?.success) {
            dispatch(clearAllCart());
            toast.success("Product quantities updated successfully");
          }
        } catch (error) {
          console.log(error);
          toast.error(`Failed to order`);
        }
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="space-y-4 px-4 sm:pl-3 sm:pr-0  border-2 py-4 rounded-md"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default CheckOutFormProvider;
