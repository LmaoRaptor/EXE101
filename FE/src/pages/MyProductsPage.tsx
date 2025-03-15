import { useEffect, useState } from "react";
import { DEFAULT_URL } from "../settingHere";
import { Spin, Button, Switch } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userToken = sessionStorage.getItem("userToken");
  const parsedData = userToken ? JSON.parse(userToken) : null;
  const userId = parsedData?.userName?.replace("user_", "");

  useEffect(() => {
    if (!userToken) {
      toast.warn("Bạn cần đăng nhập để xem sản phẩm của mình!", {
        autoClose: 3000,
      });
      navigate("/login");
      return;
    }

    const fetchMyProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${DEFAULT_URL}api/post/filter?UserId=${userId}`
        );
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
        toast.error("Không thể tải sản phẩm!");
      } finally {
        setLoading(false);
      }
    };

    console.log(products);

    fetchMyProducts();
  }, [userId, userToken, navigate]);

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `${DEFAULT_URL}api/post/${id}/change-status?status=${status}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        toast.success("Cập nhật trạng thái thành công!");
      } else {
        toast.error("Cập nhật thất bại!");
      }

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id
            ? { ...product, status: status === "0" ? "New" : "SoldOut" }
            : product
        )
      );
      console.log(products);
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái:", error);
      toast.error("Lỗi server!");
    }
  };

  return (
    <div className="flex flex-col mt-20 gap-8 mb-20">
      <h1 className="text-2xl font-bold text-center">Sản phẩm của tôi</h1>

      {loading ? (
        <div className="flex justify-center items-center w-full h-64">
          <Spin size="large" style={{ color: "#008000" }} />
        </div>
      ) : products.length > 0 ? (
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col p-4 border rounded-lg shadow bg-white"
            >
              <div className="flex items-center gap-4">
                {/* Ảnh */}
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded cursor-pointer"
                  onClick={() => navigate(`/products/${product.id}`)}
                />

                {/* Thông tin sản phẩm */}
                <div className="flex-1 text-left">
                  <p
                    className="font-bold text-lg uppercase cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    {product.title}
                  </p>
                  <p className="text-gray-500">
                    Ngày tạo: {new Date(product.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {product.description || "Không có mô tả"}
                  </p>
                </div>

                {/* Giá */}
                <p className="font-semibold text-green-600">
                  {product.price.toLocaleString()} VNĐ
                </p>

                <Button
                  type="primary"
                  onClick={() => navigate(`/update/${product.id}`)}
                >
                  Cập nhật
                </Button>

                {/* Nút "Còn hàng / Hết hàng" */}
                <Switch
                  checked={product.status === "New"}
                  onChange={(checked) =>
                    handleUpdateStatus(product.id, checked ? "0" : "1")
                  }
                  checkedChildren="Còn hàng"
                  unCheckedChildren="Hết hàng"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Bạn chưa đăng sản phẩm nào.</p>
      )}
    </div>
  );
};

export default MyProductsPage;
