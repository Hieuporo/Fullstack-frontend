import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useCheckCouponMutation,
  useGetCartQuery,
  useGetShippingQuery,
} from "./checkoutApiSlice";
import ProductItem from "./components/ProductItem";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Coupon } from "../../types/index.type";

const Checkout = () => {
  const [checkCoupon] = useCheckCouponMutation();
  const { data: cart } = useGetCartQuery();
  const [shippingMethodSelect, setShippingMethodSelect] = useState<number>();
  const [shipfee, setShipfee] = useState<number>(0);
  const [couponCode, setCouponCode] = useState<string>();
  const [coupon, setCoupon] = useState<Coupon | null>();

  const [total, setTotal] = useState<number>();
  const dispatch = useDispatch();
  const { data: shippingMethods } = useGetShippingQuery();

  const formik = useFormik({
    initialValues: {
      couponId: 0,
      shippingMethodId: 0,
      customerName: "",
      address: "",
      phoneNumber: "",
      cartItemIdList: cart?.cartItems.map((cartItem) => cartItem.id),
    },
    // validationSchema: Yup.object({
    //   couponId: Yup.number(),
    //   shippingMethodId: Yup.number().required(),
    //   customerName: Yup.string().required("This field cannot be left blank"),
    //   address: Yup.string().required("This field cannot be left blank"),
    //   phoneNumber: Yup.string().required("This field cannot be left blank"),
    //   cartItemIdList: Yup.array().min(0),
    // }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        toast.success("Successfully logged in");
      } catch (err: any) {
        toast.error(err.data.ErrorMessage);
      }
    },
  });

  useEffect(() => {
    setTotal(
      cart?.cartItems.reduce((total, cartItem) => {
        const productPrice = cartItem.productItem.price;
        const quantity = cartItem.quantity;
        const itemTotal = productPrice * quantity;
        return total + itemTotal;
      }, 0)
    );
  }, [cart]);

  useEffect(() => {
    var fee = shippingMethods?.find(
      (s) => s.id === shippingMethodSelect
    )?.price;
    if (fee) {
      setShipfee(fee);
    }
  }, [shippingMethodSelect]);

  const submitCode = async () => {
    try {
      if (couponCode) {
        const coupon = await checkCoupon(couponCode).unwrap();
        setCoupon(coupon);
      }
    } catch (error) {
      toast.error("Coupon is not exist");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart?.cartItems.map((item, i) => (
              <ProductItem key={i} item={item} />
            ))}
          </div>
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <div className="mt-5 grid gap-6">
            {shippingMethods?.map((shippingMethod) => (
              <div
                key={shippingMethod.id}
                className="relative"
                onClick={() => setShippingMethodSelect(shippingMethod.id)}
              >
                <input
                  className="peer hidden"
                  type="radio"
                  value={shippingMethod.id}
                  readOnly={true}
                  name="radio"
                />
                <span
                  className={`${
                    shippingMethodSelect === shippingMethod.id
                      ? "border-gray-700"
                      : ""
                  }  absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white`}
                />
                <label
                  className={`${
                    shippingMethodSelect === shippingMethod.id
                      ? "border-2 border-gray-700"
                      : ""
                  }   flex cursor-pointer select-none rounded-lg border border-gray-300 p-4`}
                  htmlFor="radio_1"
                >
                  <img
                    className="w-14 object-contain"
                    src="https://png.pngtree.com/element_our/png_detail/20181228/delivery-truck-vector-icon-png_296956.jpg"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      {shippingMethod.name.toUpperCase()}
                    </span>
                    <p className="text-slate-500 text-sm leading-6">
                      Price: $ {shippingMethod.price}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="0123456789"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 512 512"
                  width={16}
                  height={16}
                  fill="currentColor"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="customerName"
                id="customerName"
                value={formik.values.customerName}
                onChange={formik.handleChange}
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Address
            </label>
            <div className="relative">
              <input
                name="address"
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                type="text"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your address here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40"
                  height={16}
                  width={16}
                  viewBox="0 0 512 512"
                >
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                  <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Coupon
            </label>
            <div className="relative">
              <input
                onChange={(e) => setCouponCode(e.target.value)}
                value={couponCode}
                type="text"
                className="w-3/4 rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your coupon here"
              />
              {!coupon ? (
                <button
                  onClick={submitCode}
                  className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
                >
                  Apply
                </button>
              ) : (
                <button
                  onClick={() => setCoupon(null)}
                  className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
                >
                  Remove
                </button>
              )}

              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40"
                  height={16}
                  width={18}
                  viewBox="0 0 576 512"
                >
                  <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                </svg>
              </div>
            </div>
            {coupon && (
              <div className="relative mt-2">
                <label
                  className={`flex cursor-pointer select-none rounded-lg border border-gray-300 p-4`}
                  htmlFor="radio_1"
                >
                  <div className="flex flex-wrap">
                    <div className="text-slate-500 text-sm leading-6 w-full">
                      CouponCode: {coupon?.couponCode}
                    </div>
                    <div className="text-slate-500 text-sm leading-6 w-full mt-2">
                      MinAmount: $ {coupon?.minAmount}
                    </div>
                    <div className="text-slate-500 text-sm leading-6 w-full mt-2">
                      DiscountAmount: $ {coupon?.discountAmount}
                    </div>
                  </div>
                </label>
              </div>
            )}
            {/* Total */}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">${total}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Coupon</p>
                <p className="font-semibold text-gray-900">
                  - ${coupon?.discountAmount}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">+ ${shipfee}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                $
                {total
                  ? total + shipfee - (coupon ? coupon.discountAmount : -0)
                  : shipfee + 0}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
