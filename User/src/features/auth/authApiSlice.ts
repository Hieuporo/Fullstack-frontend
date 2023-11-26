import { apiSlice } from "../../apis/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/Account/Login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (registerInfomation) => ({
        url: "/Account/Register",
        method: "POST",
        body: registerInfomation,
      }),
    }),
    confirmEmail: builder.mutation({
      query: (confirmBody) => ({
        url: "/Account/ConfirmEmail",
        method: "POST",
        body: confirmBody,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useConfirmEmailMutation,
} = authApiSlice;
