import { TProduct } from "@/types/product.types";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => {
        console.log(query);
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
    getSingleProduct: builder.query({
      query: (id: string) => {
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
      query: (payload: TProduct) => {
        return {
          url: "/create-product",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateAProduct: builder.mutation({
      query: ({ id, payload }: { id: string; payload: Partial<TProduct> }) => {
        return {
          url: `/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: (_result, _error, { id }) => [{ type: "products", id }],
    }),
    deleteAProduct: builder.mutation({
      query: (id: string) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetSearchingSuggestionQuery,
  useCreateNewProductMutation,
  useUpdateAProductMutation,
  useDeleteAProductMutation,
} = productApi;

export default productApi;
