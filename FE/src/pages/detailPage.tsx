import { useParams } from "react-router-dom";
import ReviewSection from "../components/review/ReviewSection";
import SliderProduct from "../components/slider/sliderProduct";
import { useState, useEffect } from "react";
import { Modal, Button } from "antd"; // Import Ant Design modal

// Danh sách dữ liệu giả lập
const fakeProducts = [
  {
    id: 1,
    title: "Máy ảnh Canon cũ",
    sellerName: "Nguyễn Văn Khánh",
    rating: 4.5,
    reviewCount: 3,
    stock: 5,
    description: "Máy ảnh Canon EOS 700D, lens 18-55mm, hình thức 90%",
    price: "5.200.000đ",
    contact: {
      phone: "0987 654 321",
      other: "Facebook: fb.com/nguyenvankhanh",
    },
    images: [
      "https://bizweb.dktcdn.net/thumb/grande/100/107/650/products/canon-eos-700d-1855-4.jpg?v=1603680414257",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/297/199/products/mg-6692-jpg.jpg?v=1543051514740",
    ],
    mainImage:
      "https://bizweb.dktcdn.net/thumb/grande/100/107/650/products/canon-eos-700d-1855-4.jpg?v=1603680414257",
  },
  {
    id: 2,
    title: "Laptop Dell Latitude",
    sellerName: "Nguyễn Ngọc",
    rating: 4.2,
    reviewCount: 20,
    stock: 3,
    description: "Laptop Dell Latitude E7450 Core i5, SSD 256GB, RAM 8GB",
    price: "7.800.000đ",
    contact: {
      phone: "0987 654 829",
      other: "Zalo: 0342775784",
    },
    images: [
      "https://tuanminhstore.com/wp-content/uploads/ban-phim-dell-7450.jpeg",
      "https://tuanminhstore.com/wp-content/uploads/ban-phim-dell-7450.jpeg",
    ],
    mainImage:
      "https://tuanminhstore.com/wp-content/uploads/ban-phim-dell-7450.jpeg",
  },
  {
    id: 3,
    title: "Điện thoại iPhone X cũ",
    sellerName: "Kim Ngân",
    rating: 4.8,
    reviewCount: 35,
    stock: 2,
    description: "iPhone X 64GB, pin 85%, máy đẹp, chưa thay thế linh kiện.",
    price: "6.500.000đ",
    contact: {
      phone: "0342 694 771",
      other: "Facebook: KNgaan",
    },
    images: [
      "https://hnstoreshop.vn/wp-content/uploads/z6041991452794_114f228716a6e9c38bf7054388704019.jpg",
      "https://hnstoreshop.vn/wp-content/uploads/z6041991452794_114f228716a6e9c38bf7054388704019.jpg",
    ],
    mainImage:
      "https://hnstoreshop.vn/wp-content/uploads/z6041991452794_114f228716a6e9c38bf7054388704019.jpg",
  },
];

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const foundProduct = fakeProducts.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p className="text-center text-red-500">Sản phẩm không tồn tại</p>;
  }

  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="col-span-2">
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-start justify-start gap-8">
              {product.images.map((img, index) => (
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
              src={product.mainImage}
              alt="Product Image"
            />
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-sm">by {product.sellerName}</p>

          <div className="flex items-center space-x-1 mt-2">
            <span className="text-yellow-500 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </span>
            <span className="text-gray-600">({product.rating})</span>
            <span className="text-gray-500">
              | {product.reviewCount} đánh giá
            </span>
          </div>
          <p
            className={`text-sm mt-2 uppercase inline-block p-2 rounded-lg ${
              product.stock > 0
                ? "bg-green-900 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {product.stock > 0 ? "Còn hàng" : "Hết hàng"}
          </p>
          <div className="mt-2 text-[12px] text-gray-400 leading-[18px]">
            {product.description}
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-800">
              {product.price}
            </span>
          </div>

          <div className="mt-6">
            <Button
              className="border border-green-900 text-black p-2 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-all"
              onClick={() => setIsModalVisible(true)}
            >
              Xem thông tin liên hệ
            </Button>
          </div>
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
          <strong>Số điện thoại:</strong> {product.contact.phone}
        </p>
        <p>
          <strong>Khác:</strong> {product.contact.other}
        </p>
      </Modal>

      {/* Review Section */}
      <ReviewSection />
      <SliderProduct isHeading />
    </div>
  );
};

export default DetailPage;
