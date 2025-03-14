import { useNavigate } from "react-router-dom";
import SliderProduct from "../components/slider/sliderProduct";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  }, []);

  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={700} // Tăng kích thước modal
        closeIcon={
          <CloseOutlined style={{ fontSize: "24px", color: "black" }} />
        }
      >
        <img
          src="https://amis.misa.vn/wp-content/uploads/2024/10/169.png"
          alt="Thông báo"
          className="w-full rounded-lg"
        />
      </Modal>
      <div>
        <div className="mt-20 ml-10 mr-10">
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-8 items-center">
              <img
                alt="123"
                src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
                width={120}
                height={120}
                className="rounded-lg size-20 object-cover rotate-6"
              />
              <span className="flex flex-col items-center">
                <span className="font-sans font-semibold">Tại sao mua</span>
                <span className="font-sans text-gray-600"> trên Y.S?</span>
              </span>
            </div>
            <div className="flex flex-col items-center font-semibold text-[54px] leading-tight">
              <span>Mua sắm mọi thứ bạn cần</span>
              <span>trực tuyến bạn thích</span>
              <span>
                <span>từ</span>
                <span className="bg-gradient-to-r from-[#47da51] to-[#09772a] bg-clip-text text-transparent">
                  {" "}
                  yardsale
                </span>
              </span>
            </div>
            <div className="ml-14 rotate-12 flex text-center flex-col justify-center items-center rounded-full size-20 bg-gradient-to-r from-[#64d08f] from-0% via-slate-200 via-70% to-[#64eb98] to-90%">
              <span className="font-semibold">200+</span> sản phẩm
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end gap-4 mt-6">
          <div className="h-80 w-72 rounded-3xl bg-green-950"></div>
          <div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-gray-300">
                Và chỉ 1 thời gian nhất định...
              </div>
              <button
                className="rounded-2xl bg-green-950 p-2 text-white"
                onClick={() => navigate("/register")}
              >
                Đăng ký J.S hoàn toàn miễn phí
              </button>
              <div
                className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:mt-[0.5px] cursor-pointer"
                onClick={() => navigate("/products")}
              >
                Xem tất cả sản phẩm
              </div>
            </div>
            <div className="flex gap-4 items-end">
              <div className="h-56 w-48 bg-green-800 rounded-3xl"></div>
              <div className="h-36 w-48 bg-green-900 rounded-3xl"></div>
              <div className="h-56 w-48 bg-green-800 rounded-3xl"></div>
            </div>
          </div>
          <div className="h-80 w-72 rounded-3xl bg-green-900"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-start gap-2 mt-20">
          <div className="uppercase text-6xl font-bold text-black text-left pr-24">
            Sản phẩm
          </div>
          <div className="flex gap-2 justify-between w-1/2">
            <div className="w-1/2 text-left">
              Các sản phẩm đã có trên yardsale, hãy cùng trải nghiệm thử và mua
              sắm dễ dàng với yardsale ngày nào
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex gap-[0.5px] flex-col">
                <div className="flex gap-[0.5px]">
                  <div className="size-5 rounded-lg bg-green-800"></div>
                  <div className="size-5 rounded-lg bg-green-900"></div>
                </div>
                <div className="flex gap-[0.5px]">
                  <div className="size-5 rounded-lg bg-green-900"></div>
                  <div className="size-5 rounded-lg bg-green-800"></div>
                </div>
              </div>
              <div className="flex flex-col gap-[0.7px] text-left">
                <span className="text-[14px] leading-[14px]">YARDSALE</span>
                <span className="text-gray-300 text-[12px] leading-3">
                  Mua nào
                </span>
                <span className="text-[12px] leading-3">Đi thôi</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <div className="flex gap-2 flex-col w-1/2">
            <div className=" rounded-2xl h-44">
              <img
                className="size-full object-contain rounded-2xl"
                src="https://tiki.vn/blog/wp-content/uploads/2023/01/JQUxF-p2jppN9a2LO1jTMqSxHCi7N4RAHZ_xlrBW3GZKs0Lp7zr413HjYNMFEvEIelJOCDa3OVnXg1bDhuD_Wwv4jxmj9DMBORcZRUmkgXb6rnsYwpv17M7X2EsTExhP63rjrOy4DHVUcfZZ0Dz7KkUizwJ5UQrqq3mpclJF0GcZB4Ww2Qvv52FRWujMUA.png"
                alt=""
              />
            </div>
            <div className="size-full object-cover rounded-2xl h-44">
              <img
                className="size-full object-cover rounded-2xl"
                src="https://hondaotohaiphong.com.vn/wp-content/uploads/2020/12/Mausac_trangnga_tinhte.png"
                alt=""
              />
            </div>
            <div className="flex gap-2">
              <div className="rounded-2xl h-64 w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://product.hstatic.net/1000269316/product/230111-instax-mini-12-mint-green-hero-with-photo_0274_stack_05c898cfafa24d0aa9918d71609fcef9.jpg"
                  alt=""
                />
              </div>
              <div className="rounded-2xl h-64 w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://product.hstatic.net/200000293662/product/mufc-21-22-home-kit-cr7-02_3d383fd287f246e6b36599513135542e_1024x1024.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex gap-2 flex-1">
              <div className="rounded-2xl h-[420px] w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://cdn.tgdd.vn/Products/Images/42/250258/s16/iphone-13-blue-1-2-3-650x650.png"
                  alt=""
                />
              </div>
              <div className="rounded-2xl h-[420px] w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://giavichinsu.com/wp-content/uploads/2023/11/mockup-tuong-ot-chinsu-500g-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className=" rounded-2xl h-48">
              <img
                className="size-full object-contain rounded-2xl"
                src="https://cdn-i.vtcnews.vn/resize/th/upload/2023/09/18/xe-20545515.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <SliderProduct />
    </>
  );
};

export default HomePage;
