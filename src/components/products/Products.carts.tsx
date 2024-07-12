import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/product.types";
import ProductCart from "../share/ProductCart";
import ProductsCartSkeleton from "../skeleton/ProductsCartSkeleton";

const ProductsAllCarts = () => {
  // const { data: allTodos, isLoading, isError, isSuccess } = useGetTodosQuery(priority, {pollingInterval: 1000, ....});
  const { data, isLoading } = useGetAllProductsQuery({});
  console.log(data?.data);
  if (isLoading) {
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
  const allProducts: TProduct[] = data?.data;
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
