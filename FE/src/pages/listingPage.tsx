import { useEffect, useState } from "react";
import ProductItem from "../components/product/productItem";
import { DEFAULT_URL } from "../settingHere";
import { Spin, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isHide, setIsHide] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    const sessionData = sessionStorage.getItem("userToken");
    if (!sessionData) {
      setIsHide(true);
    } else {
      try {
        const parsedData = JSON.parse(sessionData);
        const userRole = parsedData?.role?.[parsedData.role.length - 1];

        if (!["pre1", "pre2", "pre3"].includes(userRole)) {
          setIsHide(true);
        }
      } catch (error) {
        console.error("Error parsing sessionStorage:", error);
      }
    }

    const fetchProducts = async () => {
      try {
        setLoading(true); // Hiển thị loading khi bắt đầu tìm kiếm
        const response = await fetch(
          `${DEFAULT_URL}api/post/filter?search=${searchTerm}`
        );
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    setOpacity(0);
  }, [searchTerm]);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("userToken");
    if (!sessionData) {
      setIsHide(true);
    } else {
      try {
        const parsedData = JSON.parse(sessionData);
        const userRole = parsedData?.role?.[parsedData.role.length - 1];

        if (!["pre1", "pre2", "pre3"].includes(userRole)) {
          setIsHide(true);
        }
      } catch (error) {
        console.error("Error parsing sessionStorage:", error);
      }
    }

    const fetchProducts = async () => {
      try {
        setLoading(true); // Hiển thị loading khi bắt đầu tìm kiếm
        const response = await fetch(
          `${DEFAULT_URL}api/post/filter?search=${searchTerm}`
        );
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    setOpacity(0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);
      setOpacity(Math.min(1, scrollY / 500));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex mt-20 gap-8 mb-20 relative">
      {loading ? (
        <div className="flex justify-center items-center w-full h-64">
          <Spin size="large" style={{ color: "#008000" }} />
        </div>
      ) : products.length === 0 ? (
        <div className="w-full flex justify-center items-center">
          <p className="text-lg text-gray-500">
            Không có kết quả cho "{searchTerm}"
          </p>
        </div>
      ) : (
        <div className="w-4/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {products.map((product, index) => (
            <ProductItem
              isHide={isHide && index > 2}
              idProduct={product.id}
              key={product.id}
              brand={product.description}
              title={product.title}
              price={product.price}
              oldPrice={product.subCategoryName}
              discount={product.status}
              deliveryDate={product.createdAt}
              imgSrc={product.mainImage}
            />
          ))}
        </div>
      )}

      {isHide && (
        <div
          className="w-full flex justify-center absolute top-96"
          style={{ opacity }}
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center fixed">
            <p className="mb-4">
              Nâng cấp tài khoản của bạn để có thể trải nghiệm nhiều hơn!
            </p>
            <button
              onClick={() => navigate("/payment")}
              className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-md"
            >
              Nâng cấp ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingPage;
