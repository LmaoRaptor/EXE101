import React, { useState } from "react";
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

  const onFinish = async (values) => {
    try {
      const payload = {
        title: values.title,
        description: values.description,
        price: values.price,
        subCategoryId: "01JM9YHATZVS4GTDWE7PGPMQKN",
        userId: "01JM9YGX6NJ9JW931MFDEZ06SA",
        contactPhone: values.contactPhone,
        contactOther: values.alternativeContact,
        images: ["fake-image"],
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

  return (
    <Card title="Đăng sản phẩm" style={{ margin: "50px auto" }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Hãy nhập tên sản phẩm" }]}
            style={{ width: "50%" }}
          >
            <Input placeholder="Enter title" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Price ($)"
            name="price"
            rules={[{ required: true, message: "Hãy nhập giá sản phẩm" }]}
            style={{ width: "50%" }}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              placeholder="Enter price"
            />
          </Form.Item>
        </div>

        <Form.Item label="Upload Images" name="images">
          <Upload listType="picture-card" maxCount={4}>
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
            {loading ? <Spin /> : "Generate AI Description"}
          </Button>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter description" />
        </Form.Item>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Form.Item
            label="Contact Phone"
            name="contactPhone"
            style={{ flex: 1 }}
            rules={[{ required: true, message: "Please enter contact phone" }]}
          >
            <Input placeholder="Enter contact phone" />
          </Form.Item>

          <Form.Item
            label="Alternative Contact"
            name="alternativeContact"
            style={{ flex: 1 }}
            rules={[
              {
                required: true,
                message: "Please enter alternative contact method",
              },
            ]}
          >
            <Input placeholder="Enter alternative contact" />
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
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreatePage;
