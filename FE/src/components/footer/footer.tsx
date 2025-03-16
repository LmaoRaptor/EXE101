import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) return;
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };
  return (
    <footer className="bg-green-900 text-white py-10 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 gap-20">
          <div className="lg:w-2/5">
            <h2 className="text-2xl font-bold mb-4">
              Hãy tham gia cùng Y.S để có thể tìm được những đồ vật bạn cần
              thiết
            </h2>
            <div className="flex flex-col space-y-2 max-w-xs">
              <div className="flex items-center space-x-2 gap-4 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Hãy nhập email"
                  className="p-2 w-full rounded-sm text-white outline-none border-b border-white bg-transparent"
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-green-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-500 whitespace-nowrap"
                >
                  {loading ? "Đang xử lý..." : "Nhập"}
                </button>
              </div>
              {success && (
                <p className="text-green-500 text-sm mb-2">Cảm ơn quý khách</p>
              )}
            </div>
            <p className="text-sm text-gray-300">
              Bằng cách gửi địa chỉ email của bạn, bạn đồng ý nhận email tiếp
              thị từ Y.S và chấp nhận <a href="#">điều khoản và điều kiện</a> và{" "}
              <a href="#">chính sách bảo mật</a>.
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Cửa hàng</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    onClick={() => navigate("/")}
                    className="hover:underline cursor-pointer"
                  >
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/term")}
                    className="hover:underline cursor-pointer"
                  >
                    Chính sách
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Về</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    onClick={() => navigate("/products")}
                    className="hover:underline cursor-pointer"
                  >
                    Danh sách sản phẩm
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/register")}
                    className="hover:underline cursor-pointer"
                  >
                    Đăng ký
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/login")}
                    className="hover:underline cursor-pointer"
                  >
                    Đăng nhập
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/payment")}
                    className="hover:underline cursor-pointer"
                  >
                    Thanh toán
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/aboutus")}
                    className="hover:underline cursor-pointer"
                  >
                    Tác giả
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
