import { apiSlice } from "../../apis/apiSlice";
import { Cart, Coupon, ShippingMethod } from "../../types/index.type";

export const checkoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<Cart, void>({
      query: () => `/Cart`,
      providesTags: ["Cart"],
    }),
    getShipping: builder.query<ShippingMethod[], void>({
      query: () => `/ShippingMethod`,
    }),
    deleteItem: builder.mutation<Cart, number>({
      query: (id) => ({
        url: `/Cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    plusItem: builder.mutation({
      query: (minusInfomation) => ({
        url: "/Cart/plus",
        method: "PUT",
        body: minusInfomation,
      }),
      invalidatesTags: ["Cart"],
    }),
    minusItem: builder.mutation({
      query: (minusInfomation) => ({
        url: "/Cart/minus",
        method: "PUT",
        body: minusInfomation,
      }),
      invalidatesTags: ["Cart"],
    }),
    checkCoupon: builder.mutation<Coupon, string>({
      query: (coupon) => ({
        url: `/Coupon/GetCouponByCode/${coupon}`,
      }),
    }),
    createOrder: builder.mutation({
      query: (orderInfomation) => ({
        url: "/Order",
        method: "POST",
        body: orderInfomation,
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useGetShippingQuery,
  useDeleteItemMutation,
  useMinusItemMutation,
  usePlusItemMutation,
  useCheckCouponMutation,
  useCreateOrderMutation,
} = checkoutApiSlice;
