import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Form,
  Input,
  InputNumber,
  Button,
  Card,
  Upload,
  Spin,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { DEFAULT_URL } from "../settingHere";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { toast } from "react-toastify";

const REGION = import.meta.env.VITE_REGION;
const BUCKET_NAME = import.meta.env.VITE_BUCKET_NAME;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
});

const buttonStyle = {
  backgroundColor: "#14532d", // bg-green-900
  borderColor: "#14532d",
  color: "white",
  width: "30%",
};

const buttonHoverStyle = {
  backgroundColor: "#166534", // bg-green-800
  borderColor: "#166534",
  color: "white",
};

const descriptions = [
  "Qua nhanh! Còn đúng 1 slot cho {title}, giá chỉ ${price}! Ai nhanh tay thì có ngay, chậm là tiếc cả đời!",
  "Pass gấp! {title} giá cực hời ${price}, chỉ ưu tiên người chốt nhanh!",
  "Giảm sốc! {title} cần pass ngay, giá ${price}, fix nhẹ cho ai qua liền tay!",
  "Chốt đơn ngay! {title} giá chỉ ${price}, còn đúng 1 chiếc, không nhanh là hết!",
  "Còn đúng 1 suất! {title} giá đẹp ${price}, fix nhẹ cho ai qua liền!",
  "Nhanh tay kẻo lỡ! {title} cần pass giá ${price}, ưu tiên chốt ngay, không giữ slot!",
  "Giá đẹp nhất thị trường! {title} chỉ còn ${price}, cần người rước ngay!",
  "Pass nhanh trong hôm nay! {title} chỉ còn ${price}, không để lâu!",
  "Ai cần chốt lẹ! {title} giá ${price}, fix nhẹ cho ai qua ngay trong ngày!",
  "Pass lại giá hời! {title} chỉ còn ${price}, ai qua trước lấy trước!",
  "Hàng hot, pass gấp! {title} giá ${price}, không nhanh là bay!",
  "Chỉ còn 1 slot duy nhất! {title} giá cực tốt ${price}, chốt ngay!",
  "Để lại giá mềm! {title} chỉ ${price}, không giữ chỗ, ai nhanh có!",
  "Fix mạnh cho người chốt nhanh! {title} giá ${price}, qua ngay!",
  "Qua lẹ không tiếc! {title} pass giá tốt ${price}, không fix nhiều, nhanh tay!",
  "Ai chốt nhanh có quà! {title} chỉ còn ${price}, qua lấy liền!",
  "Mất cơ hội là tiếc! {title} giá quá rẻ ${price}, chỉ pass trong hôm nay!",
  "Săn ngay deal pass cực hời! {title} giá ${price}, ai qua chốt lẹ!",
  "Pass rẻ hơn siêu sale! {title} chỉ ${price}, fix nhiệt tình cho người qua nhanh!",
  "Qua ngay trong 1 nốt nhạc! {title} pass giá ${price}, không nhanh là bay!",
];

const CreatePage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState([]);
  const userToken = sessionStorage.getItem("userToken");
  const parsedData = userToken ? JSON.parse(userToken) : null;
  const userRole = parsedData?.role?.[parsedData.role.length - 1];

  const handleUpload = async ({ file, onSuccess, onError }) => {
    const fileName = `${Date.now()}-${file.name}`;
    try {
      const fileBuffer = await file.arrayBuffer(); // Chuyển thành ArrayBuffer
      const fileUint8Array = new Uint8Array(fileBuffer); // Chuyển thành Uint8Array

      const uploadParams = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileUint8Array, // Sử dụng Uint8Array thay vì file trực tiếp
        ContentType: file.type,
      };
      await s3Client.send(new PutObjectCommand(uploadParams));
      const imageUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`;
      setImageUrls((prev) => [...prev, imageUrl]);
      onSuccess(imageUrl);
      message.success("Upload thành công!");
    } catch (error) {
      console.error("Upload failed:", error);
      onError(error);
      message.error("Upload thất bại!");
    }
  };

  const onFinish = async (values) => {
    try {
      const payload = {
        title: values.title,
        description: values.description,
        price: values.price,
        subCategoryId: "01JM9YHATZVS4GTDWE7PGPMQKN",
        userId: JSON.parse(userToken).userName.replace("user_", ""),
        contactPhone: values.contactPhone,
        contactOther: values.alternativeContact,
        images: imageUrls,
      };

      const response = await fetch(DEFAULT_URL + "api/post/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        message.success("Item created successfully!");
        form.resetFields();
        navigate("/products");
      } else {
        message.error("Failed to create item.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
    }
  };

  const generateDescription = () => {
    const title = form.getFieldValue("title");
    const price = form.getFieldValue("price");
    if (title && price) {
      setLoading(true);
      setTimeout(() => {
        const randomDescription = descriptions[
          Math.floor(Math.random() * descriptions.length)
        ]
          .replace("{title}", title)
          .replace("${price}", price);
        form.setFieldsValue({ description: randomDescription });
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    if (!userToken) {
      toast.warning("Hãy đăng nhập để trải nghiệm!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div style={{ position: "relative", margin: "50px auto" }}>
      {/* Nội dung chính */}
      <Card title="Đăng sản phẩm" style={{ position: "relative" }}>
        <div
          style={{
            filter: userRole === "user" ? "blur(3px)" : "none",
            opacity: userRole === "user" ? 0.4 : 1,
            pointerEvents: userRole === "user" ? "none" : "auto",
          }}
        >
          <img
            src="../public/img/1.png"
            alt=""
            className="absolute h-[55px] left-[10px] top-0"
          />
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <Form.Item
                label="Tên sản phẩm"
                name="title"
                rules={[{ required: true, message: "Hãy nhập tên sản phẩm" }]}
                style={{ width: "50%" }}
              >
                <Input
                  placeholder="Nhập tên sản phẩm"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Form.Item
                label="Giá sản phẩm(vnđ)"
                name="price"
                rules={[{ required: true, message: "Hãy nhập giá sản phẩm" }]}
                style={{ width: "50%" }}
              >
                <InputNumber
                  min={0}
                  style={{ width: "100%" }}
                  placeholder="Nhập giá sản phẩm"
                />
              </Form.Item>
            </div>

            <Form.Item label="Đăng tải ảnh" name="images">
              <Upload
                customRequest={handleUpload}
                listType="picture-card"
                maxCount={4}
              >
                <Button icon={<UploadOutlined />}></Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button
                type="default"
                block
                style={buttonStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
                onClick={generateDescription}
                disabled={loading}
              >
                {loading ? <Spin /> : "Khởi tạo chú thích với AI"}
              </Button>
            </Form.Item>

            <Form.Item
              label="Chú thích sản phẩm"
              name="description"
              rules={[
                { required: true, message: "Hãy nhập chú thích về sản phẩm" },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Nhập chú thích về sản phẩm"
              />
            </Form.Item>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <Form.Item
                label="Số điện thoại liên lạc"
                name="contactPhone"
                style={{ flex: 1 }}
                rules={[{ required: true, message: "Hãy nhập số điện thoại" }]}
              >
                <Input placeholder="Hãy nhập số điện thoại" />
              </Form.Item>

              <Form.Item
                label="Phương thức trao đổi khác"
                name="alternativeContact"
                style={{ flex: 1 }}
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập phương thức trao đổi khác",
                  },
                ]}
              >
                <Input placeholder="Nhập phương thức trao đổi khác" />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={buttonStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Tạo bài viết
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Overlay hiển thị nếu userRole === "user" */}
        {userRole === "user" && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <p>
              Hãy nâng cấp tài khoản của bạn để có thể trải nghiệm nội dung này.
            </p>
            <button
              className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-md"
              onClick={() => navigate("/payment")}
              style={{ marginTop: "10px" }}
            >
              Nâng cấp
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CreatePage;
