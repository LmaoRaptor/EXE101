import { useNavigate } from "react-router-dom";
import SliderProduct from "../components/slider/sliderProduct";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
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
                <span className="font-sans font-semibold">Why shop</span>
                <span className="font-sans text-gray-600"> on Y.S?</span>
              </span>
            </div>
            <div className="flex flex-col items-center font-semibold text-[54px] leading-tight">
              <span>Shop everything you need</span>
              <span>online from the US</span>
              <span>
                <span>bussiness</span>
                <span className="bg-gradient-to-r from-[#47da51] to-[#09772a] bg-clip-text text-transparent">
                  {" "}
                  you love
                </span>
              </span>
            </div>
            <div className="ml-14 rotate-12 flex text-center flex-col justify-center items-center rounded-full size-20 bg-gradient-to-r from-[#64d08f] from-0% via-slate-200 via-70% to-[#64eb98] to-90%">
              <span className="font-semibold">200K+</span> Products
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end gap-4 mt-6">
          <div className="h-80 w-72 rounded-3xl bg-green-950">
            <img
              className="size-full object-cover rounded-2xl"
              src="https://fact-depot.com/media/product/55363/Chau-nhua-trong-cay-2-day-PY-Tropical-2066-N-mau-nau-27.8-x-28cm-10-lit-.webp"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-gray-300">
                And for a limited time only...
              </div>
              <button className="rounded-2xl bg-green-950 p-2 text-white">
                Join the Y.S for FREE
              </button>
              <div
                className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:mt-[0.5px] cursor-pointer"
                onClick={() => navigate("/products")}
              >
                Show all products
              </div>
            </div>
            <div className="flex gap-4 items-end">
              <div className="h-56 w-48 rounded-3xl border border-solid border-gray-300">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://product.hstatic.net/200000560101/product/img_6797_84396c9f0f014ef9bf2d5511af9fddf7_large.png"
                  alt=""
                />
              </div>
              <div className="h-36 w-48 bg-green-900 rounded-3xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2021/07/lol-t1-1.jpg"
                  alt=""
                />
              </div>
              <div className="h-56 w-48 bg-green-800 rounded-3xl">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://i.pinimg.com/736x/30/b5/49/30b54999b098050158ed13a1ecdcaab0.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="h-80 w-72 rounded-3xl bg-green-900">
            <img
              className="size-full object-cover rounded-2xl"
              src="https://www.phucanh.vn/media/news/2312_laptop-moi-cua-lenovo-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-start gap-2 mt-20">
          <div className="uppercase text-6xl font-bold text-black text-left pr-24">
            explore products
          </div>
          <div className="flex gap-2 justify-between w-1/2">
            <div className="w-1/2 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex gap-[0.5px] flex-col">
                <div className="flex gap-[0.5px]">
                  <div className="size-5 rounded-lg bg-gray-300"></div>
                  <div className="size-5 rounded-lg bg-gray-300"></div>
                </div>
                <div className="flex gap-[0.5px]">
                  <div className="size-5 rounded-lg bg-gray-300"></div>
                  <div className="size-5 rounded-lg bg-gray-300"></div>
                </div>
              </div>
              <div className="flex flex-col gap-[0.7px] text-left">
                <span className="text-[14px] leading-[14px]">DEPARTMENT</span>
                <span className="text-gray-300 text-[12px] leading-3">
                  Description
                </span>
                <span className="text-[12px] leading-3">Let go</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <div className="flex gap-2 flex-col w-1/2">
            <div className="bg-green-900 rounded-2xl h-44">
              <img
                className="size-full object-cover rounded-2xl"
                src="https://i.upanh.org/2023/05/12/wp11849501-219-4k-wallpapers3b55a43b520d0456.jpeg"
                alt=""
              />
            </div>
            <div className="bg-green-900 rounded-2xl h-44">
              <img
                className="size-full object-cover rounded-2xl"
                src="https://e0.pxfuel.com/wallpapers/985/881/desktop-wallpaper-21-9-dump.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-2">
              <div className="bg-green-900 rounded-2xl h-64 w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://i.scdn.co/image/ab67616d0000b273c7550ff04fd6d0e4fd83cdbc"
                  alt=""
                />
              </div>
              <div className="bg-green-900 rounded-2xl h-64 w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://images8.alphacoders.com/126/thumb-1920-1268734.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex gap-2 flex-1">
              <div className="bg-green-900 rounded-2xl h-[420px] w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://macone.vn/wp-content/uploads/2021/12/269902633_648553806568650_2291142193696422643_n-1024x1024.jpeg"
                  alt=""
                />
              </div>
              <div className="bg-green-900 rounded-2xl h-[420px] w-1/2">
                <img
                  className="size-full object-cover rounded-2xl"
                  src="https://i.pinimg.com/736x/30/65/ba/3065baa066cf332bdebf83dd4a4169cf.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-green-900 rounded-2xl h-48">
              <img
                className="size-full object-cover rounded-2xl"
                src="https://wallpapers.com/images/featured/ultrawide-7qegghybz7ab8a7q.jpg"
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
