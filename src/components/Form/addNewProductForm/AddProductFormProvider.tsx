import { useCreateNewProductMutation } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/product.types";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

type TAddProductProps = {
  children: ReactNode;
};

const AddProductFormProvider = ({ children }: TAddProductProps) => {
  const methods = useForm();
  const [createProduct] = useCreateNewProductMutation();

  const onSubmit = async (productData: Partial<TProduct>) => {
    if (productData) {
      const { image } = productData;
      const formData = new FormData();
      formData.append("image", image);
      const url = import.meta.env.VITE_IMG_BB_URL;
      console.log(formData);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (imgData) => {
          if (imgData) {
            productData.image = imgData?.data?.url;
            try {
              const result = await createProduct(productData).unwrap();
              if (result?.success) {
                toast.success("Product created successfully");
              }
            } catch (error) {
              toast.error("Failed to create a product!");
            }
          }
        })
        .catch((error) => toast.error("Failed to create a product!"));
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default AddProductFormProvider;
