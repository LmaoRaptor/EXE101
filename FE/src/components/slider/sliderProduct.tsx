import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100,
  pauseOnHover: true,
};
interface Props {
  isHeading?: boolean;
}

const SliderProduct = ({ isHeading = false }: Props) => {
  return (
    <div className="max-w-[1280px] rounded-2xl overflow-hidden mt-20">
      {isHeading ? (
        <h2 className="text-2xl font-bold text-center mb-10">
          Sản phẩm liên quan
        </h2>
      ) : (
        <></>
      )}
      <Slider {...settings}>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://product.hstatic.net/200000664119/product/analog_house_may_anh_lay_lien_instax_mini_12_thumbnail_93a931065a3a4ab3b2fe4b8a4618fd68.jpg"
            alt="Slide 1"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://product.hstatic.net/1000312752/product/ystu063-1v__1__f837d90830864b848bb2f32e8ac077da_master.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://www.tncstore.vn/media/product/8917-chuot-may-tinh-khong-day-monsgeek-d1-black-1.jpeg"
            alt="Slide 3"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://sonysl.vn/wp-content/uploads/2021/01/Son-YSL-85.png"
            alt="Slide 4"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://hidosport.vn/wp-content/uploads/2024/06/qua-bong-da-euro-2024-so-5-1.webp"
            alt="Slide 5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderProduct;
