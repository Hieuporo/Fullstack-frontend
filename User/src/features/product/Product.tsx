import { useParams } from "react-router-dom";
import {
  useAddToCartMutation,
  useGetProductDetailQuery,
} from "./productApiSlice";
import { useEffect, useState } from "react";
import { ProductItem } from "../../types/index.type";

import toast from "react-hot-toast";
import { useGetCartQuery } from "../checkout/checkoutApiSlice";
const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState<number>(1);
  const { data: cart } = useGetCartQuery();
  if (id) {
    var { data: product } = useGetProductDetailQuery(id);
    var [addToCart] = useAddToCartMutation();
  }
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>();

  useEffect(() => {
    if (product) {
      setSelectedProduct(product.productItems[0]);
    }
  }, [product]);

  const addProductToCart = async () => {
    try {
      await addToCart({
        cartId: cart?.id,
        productItemId: selectedProduct?.id,
        quantity: quantity,
      }).unwrap();

      toast.success("Add to cart successfully");
    } catch (err: any) {}
  };

  return (
    <div>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full mb-8 md:w-1/2 md:mb-0">
              <div className="top-0 z-50 overflow-hidden ">
                <div className="relative w-96 mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src={selectedProduct?.imageUrl}
                    className="object-cover w-full lg:h-full "
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {selectedProduct?.name}
                  </h2>
                  <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>$ {selectedProduct?.price}</span>
                  </p>
                  <p className="max-w-md text-gray-700 dark:text-gray-400">
                    Quantity : {selectedProduct?.quantityInStock}
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="w-16 pb-1 mb-6 text-xl font-semibold border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">
                    Storage
                  </h2>
                  <div>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      {product?.productItems.map((pi, i) => (
                        <button
                          key={i}
                          className={`px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400 ${
                            selectedProduct?.id == pi.id
                              ? "border-black border"
                              : ""
                          }`}
                          onClick={() => setSelectedProduct(pi)}
                        >
                          <img src={pi.imageUrl} className={`w-12 h-12 `}></img>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-32 mb-8 ">
                  <label
                    htmlFor=""
                    className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600 dark:text-gray-400"
                  >
                    Quantity
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                    <button
                      onClick={() => {
                        if (quantity >= 1) setQuantity(quantity - 1);
                      }}
                      className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400"
                    >
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Number.parseInt(e.target.value))
                      }
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span
                        onClick={() => setQuantity(quantity + 1)}
                        className="m-auto text-2xl font-thin"
                      >
                        +
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={addProductToCart}
                    className="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700"
                  >
                    Add to cart
                  </button>
                  <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
