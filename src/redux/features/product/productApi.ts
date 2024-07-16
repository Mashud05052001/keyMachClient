import { TProduct } from "@/types/product.types";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          for (let item in query) {
            params.append(item, query[item]);
          }
        }
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: [{ type: "products" }],
    }),
    getAllProductsForDashboard: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          for (let item in query) {
            params.append(item, query[item]);
          }
        }
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: [{ type: "allDashboardProducts" }],
    }),
    getProductCount: builder.query({
      query: () => {
        return {
          url: "/products/productsCount/count",
          method: "GET",
        };
      },
      providesTags: [{ type: "productCount" }],
    }),
    getSingleProduct: builder.query({
      query: (id: string) => {
        if (id === "") return "";
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: (_result, _error, id) => [{ type: "products", id }],
    }),
    getSearchingSuggestion: builder.query({
      query: () => {
        return {
          url: `/products/search`,
          method: "GET",
        };
      },
    }),
    createNewProduct: builder.mutation({
      query: (payload: Partial<TProduct>) => {
        console.log(payload);
        return {
          url: "/products/create-product",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["products", "allDashboardProducts", "productCount"],
    }),
    updateAProduct: builder.mutation({
      query: ({ id, payload }: { id: string; payload: Partial<TProduct> }) => {
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: (_result, _error, {}) => [
        { type: "products" },
        { type: "allDashboardProducts" },
        { type: "productCount" },
      ],
    }),
    deleteAProduct: builder.mutation({
      query: (id: string) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products", "allDashboardProducts", "productCount"],
    }),
    updateProductQuantityWhileOrdering: builder.mutation({
      query: (payload: { _id: string; quantity: number }[]) => {
        return {
          url: "/products",
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["products", "allDashboardProducts", "productCount"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductCountQuery,
  useGetAllProductsForDashboardQuery,
  useGetSingleProductQuery,
  useGetSearchingSuggestionQuery,
  useCreateNewProductMutation,
  useUpdateAProductMutation,
  useDeleteAProductMutation,
  useUpdateProductQuantityWhileOrderingMutation,
} = productApi;

export default productApi;
