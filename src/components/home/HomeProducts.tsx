import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import {
  TProduct,
  TProductSearchQueryWithRandomNumber,
} from "@/types/product.types";
import { NavLink } from "react-router-dom";
import SecondaryFilledButton from "../buttons/SecondaryButton";
import CommonMarginTopContainer from "../container/CommonMarginTopContainer";
import LoadingSpinner from "../loading/LoadingSpinner";
import ProductCart from "../share/ProductCart";
import HomeTitle from "./HomeTitle";

const HomeProducts = () => {
  const query: TProductSearchQueryWithRandomNumber = {
    limit: 6,
    sort: "-createdAt",
  };

  const { data: latestdata, isLoading } = useGetAllProductsQuery(query);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const latestProducts: TProduct[] = latestdata.data;

  return (
    <div className="overflow-hidden">
      <HomeTitle title="Featured Products" />
      <h2 className="text-lg font-semibold mb-3">Top Featured Products</h2>

      {/* Latest Products */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {latestProducts &&
          latestProducts?.map((product) => (
            <div key={product._id}>
              <ProductCart product={product} />
            </div>
          ))}
      </div>

      {/* See ALL Products */}
      <CommonMarginTopContainer>
        <div className="text-center">
          <NavLink to={"/products"}>
            <SecondaryFilledButton
              buttonText="Show All Products"
              className="px-10"
            />
          </NavLink>
        </div>
      </CommonMarginTopContainer>
    </div>
  );
};

export default HomeProducts;
