import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://keymach.vercel.app/api" }),
  tagTypes: ["products", "allDashboardProducts", "productCount"],
  endpoints: () => ({}),
});
