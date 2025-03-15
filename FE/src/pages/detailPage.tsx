import { useNavigate, useParams } from "react-router-dom";
import SliderProduct from "../components/slider/sliderProduct";
import { useState, useEffect, useRef } from "react";
import { Modal, Button, Spin } from "antd"; // Import loading Spin
import { DEFAULT_URL } from "../settingHere";
import dayjs from "dayjs"; // Dùng để format ngày tháng
import { toast } from "react-toastify";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const navigate = useNavigate();
  const userToken = sessionStorage.getItem("userToken");
  const parsedData = userToken ? JSON.parse(userToken) : null;
  const userRole = parsedData?.role?.[parsedData.role.length - 1];

  const hasShownToastRef = useRef(false);

  useEffect(() => {
    if (!["pre1", "pre2", "pre3"].includes(userRole)) {
      if (!hasShownToastRef.current) {
        toast.warning("Vui lòng nâng cấp gói để xem nội dung này!", {
          position: "top-center",
          autoClose: 3000,
        });
        hasShownToastRef.current = true;
      }
      navigate("/");
      return;
    }

    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${DEFAULT_URL}api/post/${id}`);
        if (!response.ok) throw new Error("Sản phẩm không tồn tại");
        const data = await response.json();
        setProduct(data);
        setMainImage(data.images?.[0] || "");
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id, navigate, userRole]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (!product) {
    return <p className="text-center text-red-500">Sản phẩm không tồn tại</p>;
  }

  const isAvailable = product.status === "New";

  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {/* Hình ảnh sản phẩm */}
        <div className="col-span-2">
          <div className="flex items-start gap-8">
            {/* Hình ảnh nhỏ */}
            <div className="flex flex-col items-start gap-4">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  className="size-16 rounded-lg border border-gray-300 object-cover cursor-pointer hover:opacity-75"
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            {/* Ảnh chính */}
            <img
              className="rounded-lg w-5/6 h-[438px] object-cover"
              src={mainImage}
              alt="Product Image"
            />
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800 uppercase">
            {product.title}
          </h1>
          <p className="text-gray-600 text-sm mt-4">
            Người bán: {product.user.username}
          </p>
          <p className="text-gray-500 text-sm">
            Ngày đăng: {dayjs(product.createdAt).format("DD/MM/YYYY HH:mm")}
          </p>
          {/* Giá tiền */}
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-800">
              {Number(product.price).toLocaleString("vi-VN")} vnđ
            </span>
          </div>

          {/* Trạng thái sản phẩm */}
          <div
            className={`mt-2 text-sm font-medium ${
              isAvailable ? "text-green-600" : "text-red-600"
            }`}
          >
            {isAvailable ? "Còn hàng" : "Hết hàng"}
          </div>

          <div className="mt-2 text-[12px] text-gray-400 leading-[18px]">
            {product.description}
          </div>

          {/* Nút xem thông tin liên hệ */}
          {isAvailable && (
            <div className="mt-6">
              <Button
                className="border border-green-900 text-black p-2 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-all"
                onClick={() => setIsModalVisible(true)}
              >
                Xem thông tin liên hệ
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Modal hiển thị thông tin liên hệ */}
      <Modal
        title="Thông tin liên hệ"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button
            key="close"
            onClick={() => setIsModalVisible(false)}
            className="bg-transparent border border-green-900 text-black p-2 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-all"
          >
            Đóng
          </Button>,
        ]}
      >
        <p>
          <strong>Số điện thoại:</strong> {product.contactPhone}
        </p>
        <p>
          <strong>Khác:</strong> {product.contactOther}
        </p>
      </Modal>

      {/* Review Section */}
      {/* <ReviewSection /> */}
      <SliderProduct isHeading />
    </div>
  );
};

export default DetailPage;
