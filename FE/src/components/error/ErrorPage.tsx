// src/pages/NotFoundPage.js
import { Link } from "react-router-dom";
import { Button } from "antd";
import { FrownOutlined } from "@ant-design/icons";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <FrownOutlined className="text-6xl text-gray-500 my-4" />
      <h2 className="text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mt-2 mb-6 text-center max-w-md">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link to="/">
        <Button className="bg-green-800 text-white" size="large">
          Go to Home
        </Button>
      </Link>
    </div>
  );
}
