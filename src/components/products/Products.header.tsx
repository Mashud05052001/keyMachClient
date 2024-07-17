import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "@/styles/customSelect.style.css";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "../buttons/PrimaryButton";
import { TProductSearchQuery } from "@/types/product.types";
import SecondaryFilledButton from "../buttons/SecondaryButton";

type TFilter = {
  min?: number;
  max?: number;
  sort?: string;
};

type TProductsHeaderProps = {
  query: TProductSearchQuery;
  setQuery: Dispatch<SetStateAction<TProductSearchQuery>>;
  totalProducts: number;
};

const ProductsHeaderSection = ({
  query,
  setQuery,
  totalProducts,
}: TProductsHeaderProps) => {
  const { register, handleSubmit, reset: filterReset } = useForm<TFilter>();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("searchTerm");
    if (searchTerm === "") {
      console.log(1);
      if (query?.searchTerm) {
        const { searchTerm, ...otherQueries } = query;
        setQuery({ ...otherQueries });
      }
    } else {
      setQuery({ ...query, searchTerm: searchTerm as string });
    }

    // refetch();
  };

  const onSubmitFilter: SubmitHandler<TFilter> = (data) => {
    let filterData: Record<string, unknown> = {};
    if (data?.min && data?.max) {
      filterData.filter = `filter=gt=${data?.min},lt=${data?.max}`;
    } else if (data?.min) {
      filterData.filter = `filter=gt=${data?.min}`;
    } else if (data?.max) {
      filterData.filter = `filter=lt=${data?.max}`;
    }
    if (data?.sort) {
      filterData.sort = data?.sort;
    }
    if (filterData) {
      const { filter, sort, ...othersQuery } = query;
      setQuery({ ...othersQuery, ...filterData });
    }
  };

  const handleResetFilter = () => {
    const { filter, sort, ...othersQuery } = query;
    setQuery({ ...othersQuery });
    filterReset();
  };

  return (
    <div className="pl-3">
      <div className="flex justify-end sm:justify-between relative ">
        {/* Count of products */}
        <div className="hidden sm:block">
          <h3 className="text-lg font-semibold">
            Total Products:{" "}
            <span className="text-common-600">{totalProducts}</span>
          </h3>
        </div>
        {/* SearchBox */}
        <div className="absolute sm:left-1/2 sm:-translate-x-1/2 left-0">
          <form
            className="flex w-full max-w-sm items-center"
            onSubmit={handleSearchSubmit}
          >
            <Input
              type="text"
              name="searchTerm"
              placeholder="Search"
              className="rounded-r-none  focus-visible:ring-transparent border-common-700 border-2"
            />
            <SecondaryFilledButton
              type="submit"
              buttonText="Search"
              className="rounded-l-none focus-visible:ring-offset-transparent  focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-2 focus-visible:border-black"
            />
            {/* <Button type="submit" className="rounded-l-none">
            Subscribe
          </Button> */}
          </form>
        </div>
        {/* Featured Section */}
        <div className="relative">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <AdjustmentsVerticalIcon className="text-common-600 size-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 absolute -right-7">
              <form
                className="grid gap-4"
                onSubmit={handleSubmit(onSubmitFilter)}
              >
                {/* Title */}
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Filters</h4>
                  <p className="text-sm text-muted-foreground">
                    Select custom filtering
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="minPrice" className="">
                      Minimum Price :
                    </Label>
                    <Input
                      min={0}
                      type="number"
                      id="minPrice"
                      defaultValue=""
                      {...register("min")}
                      className="h-8 border-gray-400/80 focus-visible:ring-transparent focus:border-gray-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="maxPrice" className="">
                      Maximum Price :
                    </Label>
                    <Input
                      id="maxPrice"
                      type="number"
                      min={0}
                      defaultValue=""
                      {...register("max")}
                      className="h-8 border-gray-400/80 focus-visible:ring-transparent focus:border-gray-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4 custom-dropdown">
                    <Label htmlFor="sorting" className="">
                      Price sorting :
                    </Label>
                    <select
                      {...register("sort")}
                      className="h-8 rounded-md border-[1px] border-gray-400/80 focus:border-gray-500 py-1 pl-2 text-sm focus:outline-none"
                    >
                      <option value="">Random</option>
                      <option value="price">Ascending</option>
                      <option value="-price">Descending</option>
                    </select>
                  </div>
                </div>
                <div className="space-x-4 mt-3">
                  <PrimaryButton
                    type="submit"
                    buttonText="Filter"
                    className="px-8"
                  />
                  <span onClick={handleResetFilter}>
                    <PrimaryButton
                      type="reset"
                      buttonText="Reset"
                      className="px-8 bg-gray-700/80 hover:bg-gray-700"
                    />
                  </span>
                </div>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {/* TOtal Products for small devices */}
      <div className="sm:hidden mt-4 -mb-4">
        <h3 className="text-lg font-semibold">
          Total Products:{" "}
          <span className="text-common-600">{totalProducts}</span>
        </h3>
      </div>
      {totalProducts === 0 && (
        <div className="mt-12">
          {" "}
          <h1 className="text-common-600 text-3xl font-semibold">
            No Products Available
          </h1>
        </div>
      )}
    </div>
  );
};

export default ProductsHeaderSection;
