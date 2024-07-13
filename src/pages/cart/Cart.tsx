import PrimaryButton from "@/components/buttons/PrimaryButton";
import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import PermitModal from "@/components/modal/PermitModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  removeACartItem,
  updateCartCount,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import "@/styles/common.style.css";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.carts);
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeACartItem({ _id: id }));
    toast.success("Deleted cart item successfully");
  };
  const handleCountUpdate = async (
    id: string,
    currentCount: number,
    availableQuantity: number,
    type: "plus" | "minus"
  ) => {
    if (currentCount === 1 && type === "minus") {
      toast.warning("Delete this product to remove it", {
        style: { color: "#4D5D00" },
      });
    } else {
      if (type === "plus" && currentCount + 1 > availableQuantity) {
        setDisableButton(true);
      } else if (type === "minus" && currentCount - 1 === availableQuantity) {
        setDisableButton(false);
      }
      dispatch(updateCartCount({ _id: id, type: type }));
    }
  };

  if (cart.totalCartItems === 0) {
    return (
      <div className="mt-20">
        <h2 className="text-common-500 font-semibold text-center text-2xl">
          There is no item available in carts
        </h2>
      </div>
    );
  }
  const vatAmount = Number(((cart?.totalPrice * 5) / 100).toFixed(2)),
    totalPayableAmount = Math.floor(vatAmount + cart?.totalPrice);
  return (
    <CommonMarginTopContainer>
      <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        <h1 className="text-xl text-common-600 font-semibold text-center pb-6">
          All Cart Items
        </h1>
        {/* All Carts */}
        <div className="space-y-4 px-4 sm:pl-3 sm:pr-0">
          {cart.cart.map((cartItem) => (
            <div
              key={cartItem._id}
              className={`flex justify-between items-center border-[1px] p-2 rounded-md shadow-md shadow-gray-200/50 border-b-2
                 ${
                   cartItem?.availableQuantity < cartItem?.count &&
                   "border-2 border-common-600"
                 }
                `}
            >
              {/* Left Side Cart */}
              <div className="flex ">
                {/* Delete Button */}
                <div className="flex items-center">
                  <PermitModal
                    mainQuestionText="Delete this item from cart?"
                    permitButtonText="Yes, Delete It"
                    permitButtonHandler={() => handleDelete(cartItem?._id)}
                  >
                    <Button variant={"ghost"}>
                      <TrashIcon className="h-6 w-6 text-common-600 " />
                    </Button>
                  </PermitModal>
                </div>
                {/* Cart Image */}
                <div className="group relative p-1 mr-2">
                  <img
                    className="inline-block h-12 w-12 rounded-md ring-2 ring-white"
                    src={cartItem.image}
                    alt="{user.handle}"
                  />
                </div>
                {/* Cart Title */}
                <div className="flex flex-col justify-center space-y-1 sm:space-y-0 sm:justify-around">
                  <h4 className="font-semibold text-sm sm:text-base">
                    {cartItem.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row space-x-3">
                    <p className="sm:text-sm text-xs">
                      Price : ${cartItem.price}
                    </p>
                    <p className="sm:text-sm text-xs">
                      Available : {cartItem.availableQuantity}
                    </p>
                  </div>
                </div>
              </div>
              {/* Cart Quantity increase Decrease */}
              <div>
                <div className="flex">
                  <Button
                    variant={"outline"}
                    className="rounded-r-none p-2"
                    onClick={() =>
                      handleCountUpdate(
                        cartItem?._id,
                        cartItem?.count,
                        cartItem?.availableQuantity,
                        "minus"
                      )
                    }
                  >
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <Input
                    className="w-10 custom-appearance-none rounded-none text-center font-semibold focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent focus-visible:border-2"
                    type="number"
                    value={cartItem.count}
                  />
                  <Button
                    variant={"outline"}
                    className="rounded-l-none p-2"
                    onClick={() =>
                      handleCountUpdate(
                        cartItem?._id,
                        cartItem?.count,
                        cartItem?.availableQuantity,
                        "plus"
                      )
                    }
                  >
                    <PlusIcon className="w-4 h-4 " />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {/* Total item no with price */}
          <div className="w-full">
            <div className="border-2 rounded shadow-md shadow-gray-200  space-y-4">
              <header className="font-semibold pb-3  p-4 bg-common-800/80 text-white rounded-t-md">
                Order Summary
              </header>
              <div className="space-y-2 px-4 pb-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Products :</span>
                  <span className="font-semibold">{cart.totalCartItems}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Amount :</span>
                  <span className="font-semibold"> ${cart.totalPrice}</span>
                </div>
                <div className="flex justify-between items-center border-b-2 pb-2">
                  <span className="text-sm">TAX (5%) :</span>
                  <span className="font-semibold"> ${vatAmount}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Payable Amount :</span>
                  <span className="font-semibold"> ${totalPayableAmount}</span>
                </div>
              </div>
              <div className="flex justify-end pr-3 pb-4">
                <NavLink to={"/checkout"}>
                  <PrimaryButton
                    buttonText="Proceed To Checkout"
                    disabled={disableButton}
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonMarginTopContainer>
  );
};

export default Cart;
