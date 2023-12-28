import { apiSlice } from "../../apis/apiSlice";
import { Product } from "../../types/index.type";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetail: builder.query<Product, string>({
      query: (id) => `/Product/${id}`,
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

export const { useGetProductDetailQuery, useAddToCartMutation } =
  productApiSlice;
