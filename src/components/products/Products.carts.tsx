import { TProduct } from "@/types/product.types";
import ProductCart from "../share/ProductCart";
import ProductsCartSkeleton from "../skeleton/ProductsCartSkeleton";

type TAllProductsProps = {
  allProducts: TProduct[];
  isLoading: boolean;
  countLoading: boolean;
};

const ProductsAllCarts = ({
  allProducts,
  isLoading,
  countLoading,
}: TAllProductsProps) => {
  if (isLoading || countLoading) {
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <ProductsCartSkeleton key={index} />
          ))}
      </div>
    );
  }
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {allProducts &&
          allProducts?.map((product) => (
            <div key={product._id}>
              <ProductCart product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductsAllCarts;
