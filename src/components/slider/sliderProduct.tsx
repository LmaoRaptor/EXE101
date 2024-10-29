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
            src="https://cdn.tgdd.vn/Files/2019/10/30/1213974/nguyen-ly-hoat-dong-cua-may-anh-co-the-ban-chua-biet.jpg"
            alt="Slide 1"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://cdn.tgdd.vn/Products/Images/44/325242/dell-inspiron-15-3520-i5-n5i5052w1-thumb-600x600.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://bizweb.dktcdn.net/100/412/747/products/fornix-ft26-trang.jpg?v=1696236458200"
            alt="Slide 3"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://nvs.tn-cdn.net/2022/01/0dea9651447c4d44927dee801583fcb0.png"
            alt="Slide 4"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96 shadow-lg"
            src="https://minhancomputercdn.com/media/product/5397_chu___t_m__y_t__nh_logitech_gaming_g102_gen_2__black__02.jpg"
            alt="Slide 5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderProduct;
