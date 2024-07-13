import { TProduct } from "@/types/product.types";
import { ReactNode } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import UpdateProductForm from "../Form/updateProductForm/UpdateProductForm";

type TOpenModal = {
  children: ReactNode;
  product: TProduct | null;
  setProduct: React.Dispatch<React.SetStateAction<TProduct | null>>;
  modalInnerType: "allProductsForm";
};

const OpenModal = ({
  children,
  product,
  setProduct,
  modalInnerType,
}: TOpenModal) => {
  const generateModalBody = () => {
    if (modalInnerType === "allProductsForm" && product)
      return <UpdateProductForm product={product} />;
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      {product && (
        <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] max-w-[350px] rounded-lg">
          <div className="relative">{generateModalBody()}</div>
          {/* <DialogClose> */}
          {/* <PrimaryButton type="submit" buttonText="Update Now" /> */}
          {/* </DialogClose> */}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default OpenModal;
