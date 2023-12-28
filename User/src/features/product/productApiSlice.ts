import { apiSlice } from "../../apis/apiSlice";
import { Paging, Product } from "../../types/index.type";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetail: builder.query<Product, string>({
      query: (id) => `/Product/${id}`,
    }),
    getProductByCategory: builder.mutation<Paging, any>({
      query: ({ page, categoryId }) =>
        `/Product?Page=${page}&PageSize=8&CategoryId=${categoryId}`,
    }),
    addToCart: builder.mutation({
      query: (productInfo) => ({
        url: "/Cart",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductDetailQuery,
  useAddToCartMutation,
  useGetProductByCategoryMutation,
} = productApiSlice;
