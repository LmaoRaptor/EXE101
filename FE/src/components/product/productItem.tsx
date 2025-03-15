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
  idProduct: string;
  isHide?: boolean;
};

const ProductItem: FC<ProductCardProps> = ({
  brand,
  title,
  price,
  imgSrc,
  idProduct,
  isHide = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm text-left relative transition">
      <img
        src="../public/img/1.png"
        alt=""
        className="absolute h-[55px] left-[30px] top-[-30px]"
      />
      <img
        src={imgSrc}
        alt={title}
        className={`w-full h-48 object-cover rounded-md ${
          isHide
            ? "opacity-90 pointer-events-none cursor-pointer blur-sm"
            : "opacity-100"
        }`}
      />
      <h3
        className="mt-4 text-xs font-bold text-gray-600 line-clamp-1"
        title={brand}
      >
        {brand}
      </h3>
      <p className="text-[12px] font-sm text-gray-400 mt-1">{title}</p>
      <div className="flex items-center mt-2">
        <span className="text-lg font-semibold text-gray-800">
          {price.toLocaleString("vi-VN")} vnđ
        </span>
      </div>
      <img
        src="../public/img/4.png"
        alt=""
        className="absolute h-[55px] right-[60px] bottom-[70px]"
      />
      <button
        className={`mt-4 w-full text-black border border-green-900 py-2 rounded-md hover:bg-green-900 hover:text-white transition ${
          isHide
            ? "opacity-50 pointer-events-none cursor-pointer"
            : "opacity-100"
        }`}
        onClick={() => navigate(`/products/${idProduct}`)}
        disabled={isHide}
      >
        Mua ngay
      </button>
      <img
        src="../public/img/2.png"
        alt=""
        className="absolute h-[55px] right-[-30px] bottom-[100px]"
      />
    </div>
  );
};

export default ProductItem;
