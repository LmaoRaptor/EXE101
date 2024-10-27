import ReviewSection from "../components/review/ReviewSection";
import SliderProduct from "../components/slider/sliderProduct";

const DetailPage = () => {
  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="col-span-2">
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-start justify-start gap-8">
              <img
                className="size-16 rounded-lg border border-gray-300 object-cover"
                src="https://congstudio.vn/wp-content/uploads/2022/04/Untitled-Session10690-scaled.jpg"
                alt="Thumbnail"
              />
              <img
                className="size-16 rounded-lg border border-gray-300 object-cover"
                src="https://congstudio.vn/wp-content/uploads/2022/04/Untitled-Session10690-scaled.jpg"
                alt="Thumbnail"
              />
              <img
                className="size-16 rounded-lg border border-gray-300 object-cover"
                src="https://congstudio.vn/wp-content/uploads/2022/04/Untitled-Session10690-scaled.jpg"
                alt="Thumbnail"
              />
            </div>
            <img
              className="rounded-lg w-5/6 object-cover"
              src="https://congstudio.vn/wp-content/uploads/2022/04/Untitled-Session10690-scaled.jpg"
              alt="Product Image"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800 ">
            Armchair HUNDESTED
          </h1>
          <p className="text-gray-600 text-sm">by Zenana</p>

          <div className="flex items-center space-x-1 mt-2">
            <span className="text-yellow-500 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </span>
            <span className="text-gray-600">(4.5)</span>
            <span className="text-gray-500">| 110 Reviews</span>
          </div>
          <p className="text-sm mt-2 bg-green-900 text-white uppercase inline-block p-2 rounded-lg">
            stock
          </p>
          <div className="mt-2 text-[12px] text-gray-400 leading-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-800">$900</span>
          </div>

          <div className="mt-6">
            <button className="bg-transparent border border-green-900 text-black p-2 rounded-lg font-medium hover:bg-green-700 hover:text-white transition-all">
              Show contact
            </button>
          </div>
        </div>
      </div>
      {/* Review Section */}
      <ReviewSection />
      <SliderProduct isHeading />
    </div>
  );
};

export default DetailPage;
