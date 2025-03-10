import React, { useState } from "react";
import { Modal, Button, Card, Row, Col } from "antd";

const PaymentPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Gói Tiêu Chuẩn 7 ngày",
      price: "29.000 VND",
      bank: "Ngân hàng A",
      des: "Dịch vụ cung cấp Đăng bán sản phẩm không giới hạn trong 7 ngày Không giới hạn lượt xem mô tả chi tiết của các sản phẩm trong 7 ngày",
      qrCode: "link_to_qr_code_1",
    },
    {
      id: 2,
      name: "Gói Tiêu Chuẩn",
      price: "200,000 VND",
      bank: "Ngân hàng B",
      des: "Dịch vụ cung cấp: Tất cả các chức năng của gói Tiêu Chuẩn 7 ngày. Không giới hạn lượt xem mô tả chi tiết của các sản phẩm trong 15 ngày Đăng bán sản phẩm không giới hạn với tính năng tự động làm mới (cập nhật sản phẩm mỗi ngày để luôn ở vị trí cao). Hiển thị sản phẩm nổi bật hơn so với sản phẩm khác (sản phẩm sẽ xuất hiện ở vị trí ưu tiên trong danh sách tìm kiếm). Tính năng tìm kiếm sản phẩm đồ cũ theo vị trí địa lý, theo cá nhân hóa.",
      qrCode: "link_to_qr_code_2",
    },
    {
      id: 3,
      name: "Gói Cao Cấp",
      price: "300,000 VND",
      bank: "Ngân hàng C",
      des: "Dịch vụ cung cấp: Tất cả các chức năng của gói Cao Cấp 15 ngày Không giới hạn lượt xem mô tả chi tiết của các sản phẩm trong 30 ngày Trang cửa hàng riêng, tùy chỉnh giao diện  Đội ngũ chăm sóc khách hàng riêng 24/7. Tự động quảng cáo mặt hàng ngẫu nhiên trong gian hàng trên website Hỗ trợ tính năng viết lại mô tả",
      qrCode: "link_to_qr_code_3",
    },
  ];

  const showModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Row gutter={16}>
        {packages.map((pkg) => (
          <Col span={8} key={pkg.id}>
            <Card title={pkg.name} className="mb-4">
              <p>Giá: {pkg.price}</p>
              <p className="my-10">{pkg.des}</p>
              <Button
                type="primary"
                onClick={() => showModal(pkg)}
                style={{ background: "#15803d" }}
              >
                Thanh toán
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedPackage && (
        <Modal
          title={`Thanh toán ${selectedPackage.name}`}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <p>Ngân hàng: {selectedPackage.bank}</p>
          <p>Nội dung chuyển khoản: Thanh toán {selectedPackage.name}</p>
          <img
            src={selectedPackage.qrCode}
            alt="QR Code"
            className="w-full h-auto mt-4"
          />
        </Modal>
      )}
    </div>
  );
};

export default PaymentPage;
