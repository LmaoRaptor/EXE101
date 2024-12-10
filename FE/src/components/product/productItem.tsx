import { FC } from "react";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  brand: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  deliveryDate: string;
  imgSrc: string;
};

const ProductItem: FC<ProductCardProps> = ({ brand, title, price, imgSrc }) => {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm text-left">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 text-xs font-bold text-gray-600">{brand}</h3>
      <p className="text-[12px] font-sm text-gray-400 mt-1">{title}</p>
      <div className="flex items-center mt-2">
        <span className="text-lg font-semibold text-gray-800">{price}</span>
      </div>

      <button
        className="mt-4 w-full text-black border border-green-900 py-2 rounded-md hover:bg-green-900 hover:text-white transition"
        onClick={() => navigate("/products/1")}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductItem;
