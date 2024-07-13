import { productBrandList } from "@/constant/product.constant";
import FormInput from "../formItems/FormInput";
import FormSelect from "../formItems/FormSelect";
import AddProductFormProvider from "./AddProductFormProvider";
import FormTextArea from "../formItems/FormTextArea";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormFile from "../formItems/FormFile";

const AddProductForm = () => {
  return (
    <AddProductFormProvider>
      <div className="w-7/12 mx-auto border-2 rounded-md  border-gray-100 shadow p-6">
        <div></div>
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
          <FormInput
            name="rating"
            label="Rating"
            type="number"
            className="col-span-3"
          />
          <FormFile
            className="col-span-3"
            label="Image"
            name="image"
            accept="image"
          />
          <FormTextArea
            name="description"
            label="Description"
            className="col-span-6"
          />
        </div>
        <div className="mt-6 ">
          <PrimaryButton type="submit" buttonText="Add Product" />
        </div>
      </div>
    </AddProductFormProvider>
  );
};

export default AddProductForm;
