import { Link } from "react-router-dom";
import { Product } from "../../../types/index.type";
import { EyeIcon } from "@heroicons/react/24/outline";
const HomeProduct = ({ product }: { product: Product }) => {
  return (
    <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full">
      {/* Start Single Product */}
      <div className="single-product">
        <div className="product-image">
          <img className="p-4 h-72" src={product.imageUrl} alt="#" />
          <div className="button">
            <Link
              to={`/product/${product.id}`}
              className="cursor-pointer flex items-center justify-center bg-[#0167f3] text-white w-36 border-zinc-500 align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-2 leading-normal no-underline"
            >
              <EyeIcon className="w-4 h-4 mr-1" />
              View Detail
            </Link>
          </div>
        </div>
        <div className="product-info">
          <h4 className="text-xl title truncate ...">{product.name}</h4>
          <div className="price">
            <span>${product.productItems[0].price}</span>
          </div>
        </div>
      </div>
      {/* End Single Product */}
    </div>
  );
};

export default HomeProduct;
