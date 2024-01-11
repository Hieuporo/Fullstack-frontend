import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByCategoryMutation } from "./productApiSlice";
import { Paging } from "../../types/index.type";
import HomeProduct from "../home/components/HomeProduct";

const ProductList = () => {
  const { categoryId, page } = useParams();
  const [products, setProducts] = useState<Paging | null>();

  const [getProduct] = useGetProductByCategoryMutation();

  const getProducts = async (
    categoryId: string | undefined,
    page: string | undefined
  ) => {
    try {
      var paging = await getProduct({ categoryId, page }).unwrap();
      setProducts(paging);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts(categoryId, page);
  }, [categoryId, page]);
  return (
    <div className="container mx-auto sm:px-24">
      <div className="flex flex-wrap">
        {products?.items?.map((product, i) => (
          <HomeProduct key={i} product={product} />
        ))}
      </div>

      <div className="flex justify-center my-6">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
