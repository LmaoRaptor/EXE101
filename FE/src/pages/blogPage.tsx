import React from "react";
import { Card, Row, Col } from "antd";

const blogPosts = [
  {
    id: 1,
    title: "Mua bán đồ cũ: Hướng dẫn chi tiết",
    description: "Tìm hiểu cách mua bán đồ cũ hiệu quả và an toàn.",
  },
  {
    id: 2,
    title: "Vòng đời của sản phẩm: Từ mới đến cũ",
    description:
      "Khám phá vòng đời của sản phẩm và tầm quan trọng của việc tái sử dụng.",
  },
  {
    id: 3,
    title: "Tái chế đồ cũ: Bảo vệ môi trường",
    description:
      "Lợi ích của việc tái chế đồ cũ đối với môi trường và cộng đồng.",
  },
  {
    id: 4,
    title: "Cách định giá đồ cũ khi bán",
    description: "Những yếu tố cần xem xét để định giá hợp lý cho đồ cũ.",
  },
  {
    id: 5,
    title: "Những lưu ý khi mua đồ cũ trực tuyến",
    description: "Kinh nghiệm mua đồ cũ trực tuyến an toàn và hiệu quả.",
  },
  {
    id: 6,
    title: "Tự làm mới đồ cũ: Ý tưởng sáng tạo",
    description: "Biến đồ cũ thành mới với những ý tưởng sáng tạo.",
  },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      {blogPosts.map((post, index) => (
        <React.Fragment key={post.id}>
          {index % 3 === 0 && (
            <Row gutter={16} className="mb-4">
              {blogPosts.slice(index, index + 3).map((item) => (
                <Col span={8} key={item.id}>
                  <Card title={item.title}>
                    <p>{item.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          {(index + 1) % 3 === 0 && (
            <div className="mb-8">
              <div className="bg-blue-500 text-white text-center p-4">
                <p>Quảng cáo: Liên hệ thuê quảng cáo với chúng tôi nhé</p>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogPage;
