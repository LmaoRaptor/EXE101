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
            className="w-full object-cover rounded-2xl h-96"
            src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp"
            alt="Slide 1"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96"
            src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp"
            alt="Slide 2"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96"
            src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp"
            alt="Slide 3"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96"
            src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp"
            alt="Slide 4"
          />
        </div>
        <div className="pr-4 mr-[-1rem]">
          <img
            className="w-full object-cover rounded-2xl h-96"
            src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-44.jpg.webp"
            alt="Slide 5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderProduct;
