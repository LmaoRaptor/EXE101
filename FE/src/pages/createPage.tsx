import React, { useState } from "react";
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
  "🔥 {title} - Chỉ với ${price}! Sản phẩm chất lượng, giá tốt, nhanh tay sở hữu ngay!",
  "💥 Ưu đãi sốc! {title} chỉ còn ${price}, cơ hội vàng cho bạn!",
  "🚀 Mua ngay {title} với giá chỉ ${price}, chất lượng đảm bảo, đừng bỏ lỡ!",
  "🎯 Đặc biệt {title} đang giảm giá còn ${price}, mua ngay kẻo hết!",
  "✨ Sản phẩm hot {title} giá siêu tốt ${price}, nhanh tay đặt ngay!",
  "🔥 Cơ hội có 1-0-2! {title} giá chỉ ${price}, chốt đơn ngay!",
  "⚡ Flash Sale! {title} siêu rẻ chỉ còn ${price}, mua ngay kẻo lỡ!",
  "🛍️ Siêu phẩm {title} giá chỉ ${price}, deal hời không thể bỏ qua!",
  "💎 {title} đang giảm sốc còn ${price}, nhanh tay kẻo hết hàng!",
  "🚀 Siêu ưu đãi! {title} với mức giá chỉ ${price}, đặt ngay hôm nay!",
  "🎉 Hot deal! {title} giá cực sốc chỉ ${price}, cơ hội duy nhất!",
  "🔥 Săn sale ngay! {title} giảm chỉ còn ${price}, mua ngay kẻo tiếc!",
  "⚡ Giá hủy diệt! {title} chỉ với ${price}, chốt đơn ngay kẻo lỡ!",
  "💥 Siêu tiết kiệm! {title} giá giảm chỉ còn ${price}, đừng bỏ lỡ!",
  "🎯 Mua ngay {title} với giá ưu đãi chỉ ${price}, số lượng có hạn!",
  "🌟 Không thể tin nổi! {title} chỉ còn ${price}, đặt hàng ngay!",
  "🔥 Mức giá cực hời! {title} chỉ với ${price}, cơ hội không thể bỏ qua!",
  "⚡ Siêu giảm giá! {title} hiện chỉ còn ${price}, mua ngay trước khi hết hàng!",
  "💎 Deal hấp dẫn! {title} với giá chỉ ${price}, đặt hàng ngay hôm nay!",
  "🚀 Mua ngay {title} với giá sốc ${price}, sản phẩm chất lượng, số lượng có hạn!",
  "🎉 Săn ngay {title} giá ưu đãi chỉ còn ${price}, chốt đơn ngay!",
  "🔥 Chỉ còn ít hàng! {title} với giá chỉ ${price}, nhanh tay sở hữu ngay!",
  "💥 Siêu hot! {title} giảm giá chỉ còn ${price}, đừng chần chừ nữa!",
  "⚡ Sản phẩm cực chất {title} đang giảm giá còn ${price}, đặt ngay kẻo hết!",
];

const CreatePage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
      }, 1000);
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
