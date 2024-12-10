import FilterSection from "../components/filter/FilterSection";
import ProductItem from "../components/product/productItem";

const ListingPage = () => {
  return (
    <div className="flex mt-20 gap-8 mb-20">
      <FilterSection />
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {[5, 4, 3, 2, 1].map((item) => (
          <ProductItem
            key={item}
            brand="L'OREAL PARIS"
            title="Moisture Filling Shampoo, With Hyaluronic acid, For Dry & Dehydrated Hair, Adds"
            price="$99.00"
            oldPrice="$120.00"
            discount="20% Off"
            deliveryDate="FREE delivery by Tomorrow"
            imgSrc="https://i.pinimg.com/originals/35/94/79/3594793ee69d85ab8e82e780537fa83e.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
