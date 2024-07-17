import ReactStarsRating from "react-awesome-stars-rating";
import { TProduct } from "@/types/product.types";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

const ProductCart = ({ product }: { product: TProduct }) => {
  return (
    <div className="max-w-[300px] space-y-6 rounded-lg bg-gray-100/50 p-3 shadow-md mx-auto">
      {/* Card Image */}
      <img
        className="h-[190px] w-full rounded-lg"
        src={product?.image}
        alt="card navigate ui"
      />
      {/* Card Heading */}
      <div className="space-y-2">
        <h2 className="font-medium text-slate-800 md:text-lg sm:h-16">
          {product?.name}
          <span className="text-sm"> -{product?.brand}</span>
        </h2>
        <div className="flex xl:space-x-12 md:space-x-4 space-x-8">
          <p>
            Price : <span className="font-semibold">${product?.price}</span>
          </p>
          <p>
            Available :{" "}
            <span className="font-semibold">{product?.quantity}</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="pr-2">Ratings :</span>
          <div>
            <ReactStarsRating
              value={product?.rating}
              className="flex"
              size={16}
              starGap={1}
              primaryColor="#b30000"
              isEdit={false}
            />
          </div>
        </div>
      </div>
      {/* Card Details Button */}
      <div>
        <NavLink to={`/products/${product?._id}`}>
          <PrimaryButton buttonText="Show Details" className="w-full" />
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCart;
