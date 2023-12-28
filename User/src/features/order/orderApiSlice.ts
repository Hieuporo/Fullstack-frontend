import { apiSlice } from "../../apis/apiSlice";
import { Cart, Coupon, Order, ShippingMethod } from "../../types/index.type";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query<Order[], void>({
      query: () => `/Order`,
    }),
  }),
});

export const { useGetOrderQuery } = orderApiSlice;
