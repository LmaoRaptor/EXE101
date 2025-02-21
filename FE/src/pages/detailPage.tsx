import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewSection from "../components/review/ReviewSection";
import SliderProduct from "../components/slider/sliderProduct";
import { DEFAULT_URL } from "../settingHere";

const DetailPage = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(DEFAULT_URL + `api/post/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="col-span-2">
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-start justify-start gap-8">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  className="size-16 rounded-lg border border-gray-300 object-cover"
                  src={img}
                  alt={`Thumbnail ${index}`}
                />
              ))}
            </div>
            <img
              className="rounded-lg w-5/6 object-cover"
              src={product.mainImage || product.images?.[0]}
              alt="Product Image"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800 ">{product.title}</h1>
          <p className="text-gray-600 text-sm">
            by {product.sellerName || "Unknown"}
          </p>

          <div className="flex items-center space-x-1 mt-2">
            <span className="text-yellow-500 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </span>
            <span className="text-gray-600">({product.rating || "N/A"})</span>
            <span className="text-gray-500">
              | {product.reviewCount || 0} Reviews
            </span>
          </div>
          <p
            className={`text-sm mt-2 uppercase inline-block p-2 rounded-lg ${
              product.stock > 0
                ? "bg-green-900 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <div className="mt-2 text-[12px] text-gray-400 leading-[18px]">
            {product.description}
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-800">
              ${product.price}
            </span>
          </div>

          <div className="mt-6">
            <button className="bg-transparent border border-green-900 text-black p-2 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-all">
              Show contact
            </button>
          </div>
        </div>
      </div>
      {/* Review Section */}
      <ReviewSection />
      <SliderProduct isHeading />
    </div>
  );
};

export default DetailPage;
