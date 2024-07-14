import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { useCreateNewProductMutation } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/product.types";
import { ReactNode, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

type TAddProductProps = {
  children: ReactNode;
};

const AddProductFormProvider = ({ children }: TAddProductProps) => {
  const methods = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [createProduct] = useCreateNewProductMutation();

  const onSubmit = async (productData: Partial<TProduct>) => {
    if (productData) {
      setIsLoading(true);
      const { image } = productData;
      console.log(image);
      const formData = new FormData();
      formData.append("image", image as string);
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
                setIsLoading(false);
                toast.success("Product created successfully");
              }
            } catch (error) {
              setIsLoading(false);
              toast.error("Failed to create a product!");
            }
          }
        })
        .catch((_error) => {
          setIsLoading(false);
          toast.error("Failed to create a product!");
        });
    }
  };

  return (
    <FormProvider {...methods}>
      {isLoading && <LoadingSpinner />}
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`${isLoading && "opacity-50 -z-10"}`}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default AddProductFormProvider;
