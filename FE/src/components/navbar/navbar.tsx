import { useNavigate } from "react-router-dom";
import UserDropdown from "../user/userDrop";
import { MessageOutlined } from "@ant-design/icons";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const userToken = sessionStorage.getItem("userToken");
  const parsedData = userToken ? JSON.parse(userToken) : null;
  const userRole = parsedData?.role?.[parsedData.role.length - 1];

  const [searchTerm, setSearchTerm] = useState("");

  const notifyUpgrade = () => {
    toast.warn("Hãy nâng cấp tài khoản để trải nghiệm đầy đủ tính năng!", {
      position: "top-right",
    });
  };

  const handleSearch = () => {
    if (!userRole || userRole === "user") {
      notifyUpgrade();
      return;
    }
    navigate(
      `/products?search=${encodeURIComponent(
        searchTerm.replace(/\s+/g, " ").trim()
      )}`
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex gap-4">
      <img
        src="../../public/img/473011454_2406611166391019_8921612744282241904_n.png"
        alt="123"
        height={40}
        width={40}
        className="size-10 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="flex gap-4 mr-5 ml-5">
        <div className="flex gap-[0.5px] flex-col">
          <div className="flex gap-[0.5px]">
            <div className="size-5 rounded-lg bg-green-800"></div>
            <div className="size-5 rounded-lg bg-green-900"></div>
          </div>
          <div className="flex gap-[0.5px]">
            <div className="size-5 rounded-lg bg-green-800"></div>
            <div className="size-5 rounded-lg bg-green-900"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.7px] text-left">
          <span className="text-[14px] leading-[14px]">YARDSALE</span>
          <span className="text-gray-300 text-[12px] leading-3">Mua nào</span>
          <span className="text-[12px] leading-3">Đi thôi</span>
        </div>
      </div>

      <div className="flex gap-4 justify-center items-center w-full flex-wrap">
        <div className="w-full flex gap-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 
              0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-100 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 outline-none"
              placeholder="Nhập tên sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown} // Bắt sự kiện Enter
            />
          </div>
        </div>
        <ul className="flex gap-10 items-center justify-center list-none text-[12px]">
          <li className="cursor-pointer" onClick={() => navigate("products")}>
            Sản phẩm
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Trang chủ
          </li>
          <li className="cursor-pointer" onClick={() => navigate("/aboutus")}>
            Về chúng tôi
          </li>
        </ul>
      </div>

      {/* Hiển thị UserDropdown nếu có user */}

      {/* Điều kiện hiển thị các nút nâng cấp/đăng nhập */}
      {userRole === "user" && (
        <div
          className="h-10 bg-green-900 rounded-lg text-white uppercase 
          flex items-center justify-center font-medium text-[14px] pl-3 pr-3 
          whitespace-nowrap cursor-pointer"
          onClick={() => navigate("/payment")}
        >
          Nâng cấp
        </div>
      )}

      {userRole === "pre1" && (
        <div
          className="h-10 bg-green-900 rounded-lg text-white uppercase 
            flex items-center justify-center font-medium text-[14px] pl-3 pr-3 
            whitespace-nowrap"
        >
          Gói cơ bản
        </div>
      )}

      {userRole === "pre2" && (
        <div
          className="h-10 bg-green-900 rounded-lg text-white uppercase 
            flex items-center justify-center font-medium text-[14px] pl-3 pr-3 
            whitespace-nowrap cursor-pointer"
        >
          Gói tiêu chuẩn
        </div>
      )}

      {userRole === "pre3" && (
        <div
          className="h-10 bg-green-900 rounded-lg text-white uppercase 
            flex items-center justify-center font-medium text-[14px] pl-3 pr-3 
            whitespace-nowrap cursor-pointer"
        >
          Gói cao cấp
        </div>
      )}

      {/* Nếu chưa đăng nhập, hiển thị nút đăng nhập và nâng cấp */}
      {!userRole && (
        <>
          <div
            className="h-10 bg-green-900 rounded-lg text-white uppercase 
            flex items-center justify-center font-medium text-[14px] pl-3 pr-3 
            whitespace-nowrap cursor-pointer"
            onClick={() => navigate("/payment")}
          >
            Nâng cấp
          </div>
          <div
            className="h-10 bg-green-900 rounded-lg text-white uppercase 
            flex items-center justify-center font-medium text-[14px] pl-3 pr-3 
            whitespace-nowrap cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </div>
        </>
      )}

      {/* Nút Đăng đồ nếu đã đăng nhập */}
      {userToken && (
        <div
          className="h-10 bg-green-900 rounded-lg text-white uppercase 
          flex items-center justify-center font-medium text-[14px] pl-3 pr-3 
          whitespace-nowrap cursor-pointer"
          onClick={() => navigate("/create")}
        >
          Đăng đồ
        </div>
      )}

      {userRole && <UserDropdown />}

      {/* Nút liên hệ Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61572443900116"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <MessageOutlined style={{ fontSize: "32px" }} />
      </a>
    </div>
  );
};

export default Navbar;
