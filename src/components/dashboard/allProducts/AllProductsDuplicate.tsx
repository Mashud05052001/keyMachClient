import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

import LoadingSpinner from "@/components/loading/LoadingSpinner";
import OpenModal from "@/components/modal/OpenModal";
import PermitModal from "@/components/modal/PermitModal";
import { Button } from "@/components/ui/button";
import {
  useDeleteAProductMutation,
  useGetAllProductsForDashboardQuery,
  useGetProductCountQuery,
} from "@/redux/features/product/productApi";
import { TProduct, TProductSearchQuery } from "@/types/product.types";
import {
  ArrowsUpDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { toast } from "sonner";
import ProductsTable from "./ProductsTable";

const getColumns = (currentPage: number, productsPerPage: number) => {
  const skip = (currentPage - 1) * productsPerPage;

  const columns: ColumnDef<TProduct>[] = [
    {
      header: () => <p className="text-center">No</p>,
      accessorKey: "no",
      cell: ({ row }) => <p className="text-center">{skip + row.index + 1}</p>,
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
  return columns;
};

const AllProductsDuplicate = () => {
  const [productQuery, setProductQuery] = useState<TProductSearchQuery>({
    limit: 5,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(
    productQuery?.limit ? productQuery?.limit : 10
  );
  const { data: totalProductsResponse, isLoading: countLoading } =
    useGetProductCountQuery(undefined);
  const totalProduct = totalProductsResponse?.data;

  const { data, isLoading } = useGetAllProductsForDashboardQuery(productQuery);
  const productsData = data?.data;
  if (isLoading || countLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      {productsData && (
        <ProductsTable
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          setProductsPerPage={setProductsPerPage}
          data={productsData}
          totalData={totalProduct}
          isLoading={isLoading}
          columns={getColumns(currentPage, productsPerPage)}
          productSearchQuery={productQuery}
          setProductSearchQuery={setProductQuery}
        />
      )}
    </div>
  );
};

export default AllProductsDuplicate;
