import { TProduct } from "@/types/product.types";
import UpdateProductFormProvider from "./UpdateProductFormProvider";
import FormInput from "../formItems/FormInput";
import FormTextArea from "../formItems/FormTextArea";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormSelect from "../formItems/FormSelect";
import { productBrandList } from "@/constant/product.constant";

const UpdateProductForm = ({ product }: { product: TProduct }) => {
  return (
    <UpdateProductFormProvider product={product}>
      <h1 className="text-xl font-semibold text-common-700 mb-4">
        Update Product : {product.name}
      </h1>
      <div>
        <img
          src={product?.image}
          alt=""
          className="w-1/2 mb-8 mx-auto rounded-md"
        />
      </div>
      <div className="grid grid-cols-6 gap-5">
        <FormInput
          name="name"
          label="Name"
          type="text"
          className="col-span-3"
        />

        <FormSelect
          name="brand"
          label="Brand"
          className="col-span-3"
          options={productBrandList}
        />
        <FormInput
          name="price"
          label="Price"
          type="number"
          className="col-span-3"
        />
        <FormInput
          name="quantity"
          label="Quantity"
          type="number"
          className="col-span-3"
        />
        <FormTextArea
          name="description"
          label="Description"
          className="col-span-6"
        />
      </div>
      <div className="mt-6 float-end">
        <PrimaryButton type="submit" buttonText="Update Now" />
      </div>
    </UpdateProductFormProvider>
  );
};

export default UpdateProductForm;
