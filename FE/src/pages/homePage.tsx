import { useNavigate } from "react-router-dom";
import SliderProduct from "../components/slider/sliderProduct";
import { useEffect, useState } from "react";
import { DEFAULT_URL } from "../settingHere";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${DEFAULT_URL}api/post/filter?PageSize=3&Index=3`,
          {}
        );
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  //const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsModalOpen(true);
  //   }, 3000);
  // }, []);

  return (
    <>
      {/* <Modal
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
      </Modal> */}
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
              <span className="font-semibold">100+</span> sản phẩm
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end gap-4 mt-6">
          <div
            onClick={() => navigate("/products")}
            className="h-80 w-72 rounded-3xl bg-green-950 flex items-center justify-center text-white font-black text-[20px] cursor-pointer"
          >
            Xem sản phẩm
          </div>
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
              <div className="h-56 w-48  flex items-end justify-center">
                <img
                  src="../public/img/Cơ bản.png"
                  alt=""
                  className="scale-150"
                />
              </div>
              <div className="relative">
                <img
                  src="../public/img/Cao cấp.png"
                  alt=""
                  className="bottom-[37px] z-[-1] scale-[2.5] absolute"
                />
                <div
                  onClick={() => navigate("/payment")}
                  className="h-24 w-48 bg-green-900 rounded-3xl flex items-center justify-center text-white font-black text-[20px] cursor-pointer"
                >
                  Nâng cấp
                </div>
              </div>

              <div className="h-56 w-48 flex items-end justify-center">
                <img
                  src="../public/img/Cơ bản.png"
                  alt=""
                  className="scale-150"
                />
              </div>
            </div>
          </div>
          <div
            className="h-80 w-72 rounded-3xl bg-green-900 flex items-center justify-center text-white font-black text-[20px] cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/profile.php?id=61572443900116")
            }
          >
            Liên hệ
          </div>
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
        <div className="mt-6 flex gap-4 flex-col">
          <div className="flex gap-2 flex-col w-full">
            <div className=" rounded-2xl h-[240px]">
              <img
                className="size-full object-contain rounded-2xl"
                src="../public/img/Betterimage.ai_1742132875078.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex gap-2 flex-1">
              {products.map((item) => (
                <div className="rounded-2xl h-[240px] w-1/2">
                  <img
                    onClick={() =>
                      toast.warning(
                        "Vui lòng nâng cấp gói để xem nội dung này!",
                        {
                          position: "top-center",
                          autoClose: 3000,
                        }
                      )
                    }
                    className="size-full object-cover rounded-2xl cursor-pointer"
                    src={item?.mainImage}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SliderProduct />
    </>
  );
};

export default HomePage;
