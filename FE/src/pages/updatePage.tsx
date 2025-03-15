import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
import { toast } from "react-toastify";

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

const UpdatePage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const userToken = sessionStorage.getItem("userToken");
  const parsedData = userToken ? JSON.parse(userToken) : null;
  const userRole = parsedData?.role?.[parsedData.role.length - 1];
  const [product, setProduct] = useState(null);

  const onFinish = async (values) => {
    try {
      const payload = {
        title: values.title,
        description: values.description,
        price: values.price,
        subCategoryId: "01JM9YHATZVS4GTDWE7PGPMQKN",
        status: product?.status === "New" ? "0" : "1",
      };

      const response = await fetch(DEFAULT_URL + `api/post/${id}/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Đã cập nhật thành công");
        form.resetFields();
        navigate("/products");
      } else {
        message.error("Failed to create item.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
    }
  };

  const { id } = useParams();

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
        const response = await fetch(`${DEFAULT_URL}api/post/${id}`);
        if (!response.ok) throw new Error("Sản phẩm không tồn tại");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      }
    };
    fetchProductDetail();
  }, [id, navigate, userRole]);

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (product) {
      const formattedImages = product.images.map((img, index) => ({
        uid: String(index),
        name: `image-${index}.png`,
        status: "done",
        url: img,
      }));
      setFileList(formattedImages);
      form.setFieldsValue({
        title: product?.title,
        price: product?.price,
        images: product?.images?.map((img, index) => ({
          uid: `${index}`,
          name: `image-${index}.png`,
          status: "done",
          url: img,
        })),
        description: product?.description,
        contactPhone: product.contactPhone,
        alternativeContact: product.contactOther,
      });
    }
  }, [product, form]);

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
                style={{ width: "50%" }}
              >
                <Input placeholder="Enter title" style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Giá sản phẩm(vnđ)"
                name="price"
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
                listType="picture-card"
                maxCount={4}
                fileList={fileList}
                disabled
              >
                <Button icon={<UploadOutlined />} disabled></Button>
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
                disabled
              ></Button>
            </Form.Item>

            <Form.Item label="Chú thích sản phẩm" name="description">
              <Input.TextArea
                rows={4}
                placeholder="Nhập chú thích về sản phẩm"
                disabled
              />
            </Form.Item>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <Form.Item
                label="Số điện thoại liên lạc"
                name="contactPhone"
                style={{ flex: 1 }}
              >
                <Input placeholder="Hãy nhập số điện thoại" disabled />
              </Form.Item>

              <Form.Item
                label="Phương thức trao đổi khác"
                name="alternativeContact"
                style={{ flex: 1 }}
              >
                <Input placeholder="Nhập phương thức trao đổi khác" disabled />
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
                Cập nhật bài viết
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

export default UpdatePage;
