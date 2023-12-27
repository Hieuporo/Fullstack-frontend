import { apiSlice } from "../../apis/apiSlice";
import { Category, Paging } from "../../types/index.type";

export const homeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/Category",
    }),
    getProducts: builder.query<Paging, void>({
      query: () => "/Product?Page=1&PageSize=8",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = homeApiSlice;
