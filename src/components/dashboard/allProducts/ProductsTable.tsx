"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TProduct,
  TProductSearchQuery,
  TProductSearchQueryLimit,
} from "@/types/product.types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GeneratePaginate from "@/components/pagination/GeneratePaginate";

// TODO : Filter Imeplementing remaining

type TTable = {
  data: TProduct[];
  totalData: number;
  isLoading: boolean;
  columns: ColumnDef<TProduct>[];
  productSearchQuery: TProductSearchQuery;
  setProductSearchQuery: Dispatch<SetStateAction<TProductSearchQuery>>;
};

const ProductsTable = ({
  data,
  totalData,
  isLoading,
  columns,
  productSearchQuery,
  setProductSearchQuery,
}: TTable) => {
  const [productsPerPage, setProductsPerPage] = useState<number>(
    productSearchQuery?.limit ? productSearchQuery?.limit : 10
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  // pagination
  let totalPage: number = 0;
  if (totalData && productsPerPage) {
    totalPage = Math.ceil(totalData / productsPerPage);
  }
  useEffect(() => {
    setProductSearchQuery({ ...productSearchQuery, page: currentPage });
  }, [currentPage]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mb-80">
      {/* Top Filter */}
      <div className="flex items-center py-4">
        {/* Search Field */}
        <Input
          placeholder="Filter Name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {/* Select Columns */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Main Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Products Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Bottom Pagination */}
      <div className="flex items-center mt-5 space-x-2 py-4 mx-auto ">
        {/* Pagination */}
        <div className="select-none">
          <GeneratePaginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            bothSideRange={1}
            centerRange={1}
          />
        </div>
        {/* Product Per Page */}
        <div>
          <Select
            defaultValue={productsPerPage.toString()}
            onValueChange={(value) => {
              const productPerPage = Number(value);
              setProductsPerPage(productPerPage);
              setProductSearchQuery({
                ...productSearchQuery,
                limit: productPerPage as TProductSearchQueryLimit,
              });
            }}
          >
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder={10} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Item per table</SelectLabel>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="40">40</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
