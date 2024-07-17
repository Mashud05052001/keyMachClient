import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import ProductsAllCarts from "@/components/products/Products.carts";
import ProductsHeaderSection from "@/components/products/Products.header";
import ProductsPaginate from "@/components/products/Products.paginate";
import {
  useGetAllProductsQuery,
  useGetProductCountQuery,
} from "@/redux/features/product/productApi";
import { TProduct, TProductSearchQuery } from "@/types/product.types";
import { useEffect, useState } from "react";

const Products = () => {
  const [query, setQuery] = useState<TProductSearchQuery>({ limit: 5 });
  const { data, isLoading } = useGetAllProductsQuery(query);

  let totalProductsCount = 0;
  const { data: totalProductsResponse, isLoading: countLoading } =
    useGetProductCountQuery(undefined);
  if (totalProductsResponse?.success) {
    totalProductsCount = totalProductsResponse?.data;
  }
  let allProducts: TProduct[] = [];
  let currentPageProductsCount = 0;
  if (data?.success) {
    allProducts = data?.data;
    currentPageProductsCount = data?.data?.length;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countOfProducts =
    query?.searchTerm || query?.filter
      ? allProducts?.length
      : totalProductsCount;

  return (
    <CommonMarginTopContainer>
      <ProductsHeaderSection
        query={query}
        setQuery={setQuery}
        totalProducts={countOfProducts}
      />
      <CommonMarginTopContainer>
        <ProductsAllCarts
          allProducts={allProducts}
          isLoading={isLoading}
          countLoading={countLoading}
        />
      </CommonMarginTopContainer>
      <CommonMarginTopContainer>
        <ProductsPaginate
          query={query}
          setQuery={setQuery}
          totalProductsCount={countOfProducts}
        />
      </CommonMarginTopContainer>
    </CommonMarginTopContainer>
  );
};

export default Products;
