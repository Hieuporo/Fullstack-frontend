import { apiSlice } from "../../apis/apiSlice";
import { Cart, ShippingMethod } from "../../types/index.type";

export const checkoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<Cart, void>({
      query: () => `/Cart`,
    }),
    getShipping: builder.query<ShippingMethod[], void>({
      query: () => `/ShippingMethod`,
    }),
    deleteItem: builder.query<Cart, number>({
      query: (id) => `/Cart/${id}`,
    }),

    minusItem: builder.mutation({
      query: (minusInfomation) => ({
        url: "/Cart/minus",
        method: "PUT",
        body: minusInfomation,
      }),
    }),
    plusItem: builder.mutation({
      query: (minusInfomation) => ({
        url: "/Cart/plus",
        method: "PUT",
        body: minusInfomation,
      }),
    }),
  }),
});

export const { useGetCartQuery, useGetShippingQuery } = checkoutApiSlice;
