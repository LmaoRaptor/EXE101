const FilterSection = () => (
  <div className="w-1/4 p-4 rounded-lg shadow-md text-left h-fit">
    <h3 className="font-semibold text-lg mb-4">Brand</h3>
    <div className="space-y-2">
      {["Bare Bones", "Dove", "Loreal Paris", "Mama Earth"].map((brand) => (
        <div key={brand} className="flex items-center">
          <input type="checkbox" id={brand} className="mr-2" />
          <label htmlFor={brand} className="text-gray-700 text-sm">
            {brand}
          </label>
        </div>
      ))}
    </div>
    <h3 className="font-semibold text-lg mt-6 mb-4">Delivery</h3>
    <div className="space-y-2">
      {["Today", "Tomorrow", "Standard"].map((option) => (
        <div key={option} className="flex items-center">
          <input type="radio" name="delivery" id={option} className="mr-2" />
          <label htmlFor={option} className="text-gray-700 text-sm">
            {option}
          </label>
        </div>
      ))}
    </div>

    <h3 className="font-semibold text-lg mt-6 mb-4">Price</h3>
    <div className="space-y-2">
      {["$0 - $100", "$101 - $300", "$301 - $500"].map((priceRange) => (
        <div key={priceRange} className="flex items-center">
          <input type="checkbox" id={priceRange} className="mr-2" />
          <label htmlFor={priceRange} className="text-gray-700 text-sm">
            {priceRange}
          </label>
        </div>
      ))}
    </div>

    <h3 className="font-semibold text-lg mt-6 mb-4">Size</h3>
    <div className="space-y-2">
      {["20ml", "50ml", "100ml", "250ml", "500ml"].map((size) => (
        <div key={size} className="flex items-center">
          <input type="checkbox" id={size} className="mr-2" />
          <label htmlFor={size} className="text-gray-700 text-sm">
            {size}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default FilterSection;
