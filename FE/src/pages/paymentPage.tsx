import React, { useState } from "react";
import { Modal, Button, Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const userToken = sessionStorage.getItem("userToken");
  const navigate = useNavigate();
  const parsedData = JSON.parse(userToken);

  const packages = [
    {
      id: 1,
      name: "Gói Tiêu Chuẩn 7 ngày",
      price: "29.000 VND",
      bank: "Ngân hàng BIDV",
      des: "Dịch vụ cung cấp Đăng bán sản phẩm không giới hạn trong 7 ngày Không giới hạn lượt xem mô tả chi tiết của các sản phẩm trong 7 ngày",
      qrCode: "../public/img/bb55a01b-04e4-4d07-9d73-6985ba853c82.jfif",
      imgSrc: "../public/img/Cơ bản.png",
    },
    {
      id: 2,
      name: "Gói Nâng Cao 15 ",
      price: "49.000 VND",
      bank: "Ngân hàng BIDV",
      des: "Dịch vụ cung cấp: Tất cả các chức năng của gói Tiêu Chuẩn 7 ngày. Không giới hạn lượt xem mô tả chi tiết của các sản phẩm trong 15 ngày Đăng bán sản phẩm không giới hạn trong 15 ngày.",
      qrCode: "../public/img/bb55a01b-04e4-4d07-9d73-6985ba853c82.jfif",
      imgSrc: "../public/img/Tiêu chuẩn.png",
    },
    {
      id: 3,
      name: "Gói Cao Cấp 30 ngày",
      price: "59.000 VND",
      bank: "Ngân hàng BIDV",
      des: "Dịch vụ cung cấp: Tất cả các chức năng của gói Cao Cấp 15 ngày. Không giới hạn lượt xem mô tả chi tiết của các sản phẩm trong 30 ngày Trang cửa hàng riêng, Đội ngũ chăm sóc khách hàng riêng 24/7. Tự động quảng cáo mặt hàng ngẫu nhiên trong gian hàng trên website, Hỗ trợ tính năng viết lại mô tả, Hiển thị sản phẩm nổi bật hơn so với sản phẩm khác (sản phẩm sẽ xuất hiện ở vị trí ưu tiên trong danh sách tìm kiếm).",
      qrCode: "../public/img/bb55a01b-04e4-4d07-9d73-6985ba853c82.jfif",
      imgSrc: "../public/img/Cao cấp.png",
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
              <img src={pkg.imgSrc} alt="" />
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
          {parsedData ? (
            <>
              <p>Ngân hàng: {selectedPackage.bank}</p>
              <p>
                Nội dung chuyển khoản: Thanh toán {selectedPackage.name}{" "}
                {parsedData.userName}
              </p>
              <p className="my-10">{selectedPackage.des}</p>
              <img
                src={selectedPackage.qrCode}
                alt="QR Code"
                className="w-2/5 h-auto mt-4"
              />
            </>
          ) : (
            <p className="flex flex-col gap-10 justify-center items-center mt-10">
              Đăng nhập để có thể thanh toán nào{" "}
              <Button
                onClick={() => {
                  navigate("/login");
                }}
                className="bg-green-800 text-white"
              >
                Đăng nhập
              </Button>
            </p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default PaymentPage;
