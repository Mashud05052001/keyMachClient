import { generateSelectGroup } from "@/utils/generateSelectedGroups";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Dispatch, SetStateAction } from "react";
import {
  TProductSearchQuery,
  TProductSearchQueryLimit,
} from "@/types/product.types";

type TGenerateProductsPerPageProps = {
  productsPerPage: TProductSearchQueryLimit;
  setProductsPerPage: Dispatch<SetStateAction<TProductSearchQueryLimit>>;
  query: TProductSearchQuery;
  setQuery: Dispatch<SetStateAction<TProductSearchQuery>>;
  totalProductsCount: number;
};

const GenerateProductsPerPage = ({
  productsPerPage,
  setProductsPerPage,
  query,
  setQuery,
  totalProductsCount,
}: TGenerateProductsPerPageProps) => {
  return (
    <Select
      defaultValue={productsPerPage.toString()}
      onValueChange={(value) => {
        const productPerPage = Number(value);
        setProductsPerPage(productPerPage as TProductSearchQueryLimit);
        setQuery({
          ...query,
          limit: productPerPage as TProductSearchQueryLimit,
        });
      }}
    >
      <SelectTrigger className="w-[70px] focus-visible:border-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Item per table</SelectLabel>
          {generateSelectGroup(totalProductsCount)}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GenerateProductsPerPage;
