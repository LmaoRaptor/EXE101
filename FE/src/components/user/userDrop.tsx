import { useState, useEffect } from "react";
import { Dropdown, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const UserDropdown = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    if (userToken) {
      try {
        const userData = JSON.parse(userToken);
        setUsername(userData.userName || "Guest");
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Lỗi khi parse userToken:", error);
        setIsLoggedIn(false);
      }
    }
  }, []);

  // Xử lý đăng xuất
  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    setIsLoggedIn(false);
    window.location.reload();
  };

  // Menu dropdown
  const menu = (
    <Menu className="rounded-xl shadow-lg">
      <Menu.Item key="1" className="p-2 font-semibold text-gray-800">
        {username}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="2"
        onClick={handleLogout}
        className="p-2 flex items-center text-white bg-green-900 hover:bg-green-800"
      >
        <LogoutOutlined className="mr-2" /> Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    isLoggedIn && ( // Chỉ hiển thị khi đã đăng nhập
      <Dropdown overlay={menu} trigger={["click"]}>
        <img
          src="https://www.themeparkinsider.com/assets/PROF_NewUserIcon.png"
          alt="User Avatar"
          width={60}
          height={40}
          className="w-16 h-10 rounded-xl object-cover cursor-pointer"
        />
      </Dropdown>
    )
  );
};

export default UserDropdown;
