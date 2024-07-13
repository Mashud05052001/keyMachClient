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
import { useState } from "react";

import OpenModal from "@/components/modal/OpenModal";
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
  useDeleteAProductMutation,
  useGetAllProductsForDashboardQuery,
} from "@/redux/features/product/productApi";
import { TProduct, TProductSearchQuery } from "@/types/product.types";
import {
  ArrowsUpDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import PermitModal from "@/components/modal/PermitModal";
import { toast } from "sonner";

let itemCount = 1;

let data: TProduct[] = [];
// image (name+brand) price ratings quantity
export const columns: ColumnDef<TProduct>[] = [
  {
    header: () => <p className="text-center">No</p>,
    accessorKey: "image",
    cell: () => <p className="text-center">{itemCount++}</p>,
  },
  {
    header: "Image",
    accessorKey: "image",
    cell: ({ row }) => (
      // <div className="capitalize">{row.getValue("status")}</div>
      <div>
        <img src={row.getValue("image")} className="w-10 h-10 rounded-md" />
      </div>
    ),
  },
  {
    header: "Name",
    accessorKey: "name",
    accessorFn: (row) => `${row.name},${row.brand}`,
    cell: ({ row }) => (
      <div className="capitalize min-w-48 ">
        <p className="font-medium">
          {(row.getValue("name") as string)?.split(",")[0]}
        </p>
        <p className="text-xs">
          Brand : {(row.getValue("name") as string)?.split(",")[1]}
        </p>
      </div>
    ),
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowsUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "price",
    cell: ({ row }) => (
      <div className="capitalize pl-4">${row.getValue("price")}</div>
    ),
  },
  {
    header: () => <div className="text-center">Ratings</div>,
    accessorKey: "rating",
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("rating")}</div>
    ),
  },
  {
    header: () => <div className="text-center">Quantity</div>,
    accessorKey: "quantity",
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "Actions",
    header: () => <div className="text-center ">Actions</div>,
    cell: ({ row }) => {
      const product: TProduct = row.original;
      const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(
        null
      );
      const [deleteProduct] = useDeleteAProductMutation();
      const handleDelete = async (id: string) => {
        try {
          const result = await deleteProduct(id).unwrap();
          if (result.success) {
            toast.success("Product deleted successfully");
          }
        } catch (error) {
          toast.error("Failed to delete this item!");
        }
      };

      return (
        <div className="text-center">
          <OpenModal
            product={selectedProduct}
            setProduct={setSelectedProduct}
            modalInnerType="allProductsForm"
          >
            <Button
              className="flex"
              variant={"ghost"}
              size={"sm"}
              onClick={() => setSelectedProduct(product)}
            >
              <PencilSquareIcon className="size-5" />
            </Button>
          </OpenModal>

          <PermitModal
            mainQuestionText="Delete this product?"
            permitButtonText="Yes, Delete It"
            permitButtonHandler={() => handleDelete(product?._id)}
          >
            <Button className="flex" variant={"ghost"} size={"sm"}>
              <TrashIcon className="size-5" />
            </Button>
          </PermitModal>
        </div>
      );
    },
  },
];
// TODO : Filter Imeplementing remaining

const AllProducts = () => {
  const [mahi, setMahi] = useState(0);
  // const [productQuery, setProductQuery] = React.useState({ limit: 5 });
  const [productQuery, setProductQuery] = useState<TProductSearchQuery>({
    limit: 20,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const { data: allProducts, isLoading } =
    useGetAllProductsForDashboardQuery(productQuery);
  const products: TProduct[] = allProducts?.data;
  data = products;
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

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
    <div className="w-full">
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
      {/* Lower Items */}
      <div className="flex items-center justify-end space-x-2 py-4"></div>
    </div>
  );
};

export default AllProducts;
