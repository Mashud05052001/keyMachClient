import PrimaryButton from "@/components/buttons/PrimaryButton";
import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import PermitModal from "@/components/modal/PermitModal";

import SingleProductSkeleton from "@/components/skeleton/SingleProductSkeleton";
import { addCartItem } from "@/redux/features/cart/cartSlice";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/product.types";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import ReactStarsRating from "react-awesome-stars-rating";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

// TODO : If already previous available & now item is more than the quantity then gives an error
const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { data: allTodos, isLoading, isError, isSuccess } = useGetTodosQuery(priority, {pollingInterval: 1000, ....});
  const { data, isLoading, isFetching } = useGetSingleProductQuery(
    id as string
  );
  const productData: TProduct = data?.data;

  const generateProductRemaining = (
    <>
      {productData?.quantity === 0 ? (
        <span className="text-common-500 font-semibold">Out of stock</span>
      ) : productData?.quantity < 10 ? (
        <span className="text-common-500 font-semibold">
          Only <span>{productData?.quantity}</span> remaining
        </span>
      ) : (
        <span className="font-semibold">{productData?.quantity} remaining</span>
      )}
    </>
  );

  if (isLoading || isFetching) {
    return <SingleProductSkeleton />;
  }

  const handleAddTOCart = async () => {
    const cartItem = {
      _id: productData?._id,
      name: productData?.name,
      image: productData?.image,
      price: productData?.price,
      availableQuantity: productData?.quantity,
    };
    dispatch(addCartItem(cartItem));
    toast.success("Item added successfully");
  };

  return (
    <CommonMarginTopContainer>
      {/* Back Button */}
      <div className="  inline-block mb-1" onClick={() => navigate(-1)}>
        <ArrowUturnLeftIcon className="size-6 cursor-pointer text-common-700" />
      </div>
      {/* All Product Information */}
      <div className=" mx-auto flex space-x-8 items-center">
        {/* Product Image */}
        <img src={productData?.image} className="w-1/2 rounded-md" />
        {/* Single Product Sidebar */}
        <div className="text-sm space-y-3">
          {/* Name */}
          <h1 className="text-3xl font-semibold mb-3">{productData?.name}</h1>
          {/* Brand & Stock */}
          <div className="flex space-x-10">
            <p>Brand : {productData?.brand}</p>
            <p>Stock : {generateProductRemaining}</p>
          </div>
          {/* Price */}
          <p className="flex items-center ">
            Price :{" "}
            <span className="text-xl text-common-500 font-semibold ml-2">
              ${productData?.price}
            </span>
          </p>
          {/* Ratings */}
          <div className="flex items-center">
            <span className="pr-2">Ratings :</span>
            <div>
              <ReactStarsRating
                value={productData?.rating}
                className="flex"
                size={18}
                starGap={1}
                primaryColor="#e60000"
                isEdit={false}
              />
            </div>
          </div>
          {/* Add To Cart */}
          <div className="pt-5">
            <PermitModal
              mainQuestionText="Confirm adding product to cart?"
              permitButtonText="ADD"
              permitButtonHandler={handleAddTOCart}
            >
              <PrimaryButton
                buttonText="Add To Cart"
                disabled={productData?.quantity === 0}
              ></PrimaryButton>
            </PermitModal>
          </div>
        </div>
      </div>
      {/* Product Details section */}
      <div className="mt-8">
        <p className="font-semibold text-2xl mb-3">Details:</p>
        <p>{productData?.description}</p>
      </div>
    </CommonMarginTopContainer>
  );
};

export default SingleProduct;
