import { Dispatch, SetStateAction, useEffect, useState } from "react";
import GeneratePaginate from "../pagination/GeneratePaginate";
import {
  TProductSearchQuery,
  TProductSearchQueryLimit,
} from "@/types/product.types";
import GenerateProductsPerPage from "../pagination/GenerateProductsPerPage";

type TProductsPaginateProps = {
  query: TProductSearchQuery;
  setQuery: Dispatch<SetStateAction<TProductSearchQuery>>;
  totalProductsCount: number;
};

const ProductsPaginate = ({
  query,
  setQuery,
  totalProductsCount,
}: TProductsPaginateProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] =
    useState<TProductSearchQueryLimit>(query?.limit ? query?.limit : 5);
  let totalPage = 1;
  if (totalProductsCount > 1) {
    totalPage = Math.ceil(totalProductsCount / productsPerPage);
  }
  useEffect(() => {
    setQuery({ ...query, page: currentPage });
  }, [currentPage]);

  return (
    <div className="select-none flex py-5 justify-center">
      <div>
        <GeneratePaginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      </div>
      <div>
        <GenerateProductsPerPage
          query={query}
          setQuery={setQuery}
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
          totalProductsCount={totalProductsCount}
        />
      </div>
    </div>
  );
};

export default ProductsPaginate;
