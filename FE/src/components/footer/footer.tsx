const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 gap-20">
          <div className="lg:w-2/5">
            <h2 className="text-2xl font-bold mb-4">
              Hãy tham gia cùng Y.S để có thể tìm được những đồ vật bạn cần
              thiết
            </h2>
            <div className="flex items-center space-x-2 mb-2 gap-4">
              <input
                type="email"
                placeholder="Hãy nhập email"
                className="p-2 w-full max-w-xs rounded-sm text-white outline-none  border-b border-white bg-transparent"
              />
              <button className="bg-green-700 text-white py-2 px-4 rounded-lg">
                Nhập
              </button>
            </div>
            <p className="text-sm text-gray-300">
              Bằng cách gửi địa chỉ email của bạn, bạn đồng ý nhận email tiếp
              thị từ Y.S và chấp nhận{" "}
              <a href="#" className="underline">
                điều khoản và điều kiện
              </a>{" "}
              và{" "}
              <a href="#" className="underline">
                chính sách bảo mật
              </a>
              .
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Cửa hàng</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:underline">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Messeger
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Về</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Nhiệm Vụ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sự nghiệp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Đồng hành
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tác giả
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Trao đổi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Mua bán
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Trung tâm hỗ trợ & FAQ
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
