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
                <span className="bg-gradient-to-r from-[#47dada] to-[#625df6] bg-clip-text text-transparent">
                  {" "}
                  you love
                </span>
              </span>
            </div>
            <div className="ml-14 rotate-12 flex text-center flex-col justify-center items-center rounded-full size-20 bg-gradient-to-r from-[#9dfdfd] from-0% via-slate-200 via-70% to-[#a7a5f0] to-90%">
              <span className="font-semibold">200K+</span> Products
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end gap-4 mt-6">
          <div className="h-80 w-72 rounded-3xl bg-[#918efc]"></div>
          <div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-gray-300">
                And for a limited time only...
              </div>
              <button className="rounded-2xl bg-[#635ef7] p-2">
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
              <div className="h-56 w-48 bg-purple-300 rounded-3xl"></div>
              <div className="h-36 w-48 bg-gray-200 rounded-3xl"></div>
              <div className="h-56 w-48 bg-purple-100 rounded-3xl"></div>
            </div>
          </div>
          <div className="h-80 w-72 rounded-3xl bg-[#2a61db]"></div>
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
            <div className="bg-green-900 rounded-2xl h-44"></div>
            <div className="bg-green-900 rounded-2xl h-44"></div>
            <div className="flex gap-2">
              <div className="bg-green-900 rounded-2xl h-64 w-1/2"></div>
              <div className="bg-green-900 rounded-2xl h-64 w-1/2"></div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex gap-2 flex-1">
              <div className="bg-green-900 rounded-2xl h-[420px] w-1/2"></div>
              <div className="bg-green-900 rounded-2xl h-[420px] w-1/2"></div>
            </div>
            <div className="bg-green-900 rounded-2xl h-48"></div>
          </div>
        </div>
      </div>
      <SliderProduct />
    </>
  );
};

export default HomePage;
