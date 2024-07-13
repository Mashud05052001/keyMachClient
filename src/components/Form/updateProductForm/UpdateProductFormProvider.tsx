import { useUpdateAProductMutation } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/product.types";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

type TUpdateProductFormProviderProps = {
  children: ReactNode;
  product: TProduct;
};
// {
//   _id: '668d6092b419e6e2621be6e7',
//   name: 'Razer BlackWidow',
//   price: 169.99,
//   image:
//     'https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png',
//   rating: 4.6,
//   quantity: 38,
//   description:
//     'The Razer BlackWidow Elite features Razer Mechanical Switches for precise gaming performance.',
//   brand: 'Razer',
//   createdAt: '2024-07-09T16:08:50.954Z',
//   updatedAt: '2024-07-13T08:30:26.141Z',
//   __v: 0,
//   isDeleted: false
// }
const UpdateProductFormProvider = ({
  children,
  product,
}: TUpdateProductFormProviderProps) => {
  const methods = useForm({ defaultValues: product });
  // const [addTodo, { isLoading, isSuccess, isError, data, ... }] = useAddTodoMutation();
  const [updateProductApi] = useUpdateAProductMutation();
  const onSubmit = async (data: TProduct) => {
    const updatedContent: Record<string, unknown> = {};
    // Generating updated field
    for (let item in product) {
      const key = item as keyof TProduct;
      if (product[key] !== data[key]) {
        updatedContent[key] = data[key];
      }
    }
    if (!Object.keys(updatedContent).length) {
      toast.error("Change anything first for update");
    } else {
      try {
        const payload = { id: product._id, payload: updatedContent };
        const result = await updateProductApi(payload).unwrap();
        if (result?.success) {
          toast.success(`Product updated successfully`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default UpdateProductFormProvider;
