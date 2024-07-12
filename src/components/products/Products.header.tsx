import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import "@/styles/customSelect.style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { TProduct } from "@/types/product.types";

type TFilter = {
  min?: number;
  max?: number;
  sort?: string;
};

const ProductsHeaderSection = () => {
  const [query, setQuery] = useState<Record<string, unknown>>({});
  const { register, handleSubmit } = useForm<TFilter>();
  const { data } = useGetAllProductsQuery(query);
  let productsCount = 0;
  if (data?.success) {
    productsCount = data.data.length;
  }
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("searchTerm");
    if (searchTerm === "") {
      console.log(1);
      if (query?.searchTerm) {
        const { searchTerm, ...otherQueries } = query;
        console.log(otherQueries);
        setQuery({ ...otherQueries });
      }
    } else {
      setQuery({ ...query, searchTerm });
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
  };
  return (
    <div className="flex justify-between items-center relative">
      <div className="absolute bg-red-400 w-screen top-40 grid grid-cols-4">
        {data?.data.map((item: TProduct) => (
          <div>
            {item.name} = {item.price}
          </div>
        ))}
      </div>
      {/* Count of products */}
      <div>
        <h3 className="text-lg font-semibold pl-3">
          Total Products:{" "}
          <span className="text-common-600">{productsCount}</span>
        </h3>
      </div>
      {/* SearchBox */}
      <div className="absolute left-1/2 -translate-x-1/2">
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
          <PrimaryButton
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
  );
};

export default ProductsHeaderSection;

{
  /* <input type="email" class="flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-r-none border-4 outline-dotted" placeholder="Email">flex */
}
