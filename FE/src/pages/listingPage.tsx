// import FilterSection from "../components/filter/FilterSection";
import ProductItem from "../components/product/productItem";

const oldProducts = [
  {
    id: 1,
    brand: "Máy ảnh Canon cũ",
    title: "Máy ảnh Canon EOS 700D, lens 18-55mm, hình thức 90%",
    price: "5.200.000đ",
    oldPrice: "6.000.000đ",
    discount: "13% Off",
    deliveryDate: "Miễn phí giao hàng nội thành",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/107/650/products/canon-eos-700d-1855-4.jpg?v=1603680414257",
  },
  {
    id: 2,
    brand: "Laptop Dell Latitude",
    title: "Laptop Dell Latitude E7450 Core i5, SSD 256GB, RAM 8GB",
    price: "7.800.000đ",
    oldPrice: "9.000.000đ",
    discount: "15% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://tuanminhstore.com/wp-content/uploads/ban-phim-dell-7450.jpeg",
  },
  {
    id: 3,
    brand: "Điện thoại iPhone X cũ",
    title: "iPhone X 64GB, pin 85%, máy đẹp",
    price: "6.500.000đ",
    oldPrice: "7.500.000đ",
    discount: "13% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://hnstoreshop.vn/wp-content/uploads/z6041991452794_114f228716a6e9c38bf7054388704019.jpg",
  },
  {
    id: 4,
    brand: "Máy tính bảng Samsung",
    title: "Samsung Galaxy Tab S6 Lite, màn hình 10.4 inch, bút S Pen",
    price: "5.000.000đ",
    oldPrice: "6.500.000đ",
    discount: "23% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc: "https://cdn.tgdd.vn/Files/2020/04/11/1248267/1_800x450.jpg",
  },
  {
    id: 5,
    brand: "Máy ảnh Nikon D5300",
    title: "Nikon D5300 với lens 18-140mm, tình trạng 95%",
    price: "7.200.000đ",
    oldPrice: "8.500.000đ",
    discount: "15% Off",
    deliveryDate: "Miễn phí giao hàng nội thành",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/297/199/products/277807656-5355789947806518-8061958576363745251-n.jpg?v=1670140497457",
  },
  {
    id: 6,
    brand: "Laptop HP EliteBook",
    title: "HP EliteBook 840 G3, Core i7, SSD 512GB, RAM 16GB",
    price: "9.500.000đ",
    oldPrice: "11.000.000đ",
    discount: "14% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://thegioiso365.vn/wp-content/uploads/2021/01/f67ee954daa53efb67b4.jpg",
  },
  {
    id: 7,
    brand: "Điện thoại Samsung Galaxy S9",
    title: "Samsung Galaxy S9 64GB, màu đen, hình thức 90%",
    price: "4.800.000đ",
    oldPrice: "6.000.000đ",
    discount: "20% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://duchuymobile.com/images/companies/1/samsung-galaxy-s9-plus/danh-gia-samsung-galaxy-s9-plus-cty-mat-lung.jpg",
  },
  {
    id: 8,
    brand: "Máy ảnh Sony Alpha A6000",
    title: "Sony Alpha A6000, lens kit 16-50mm, tình trạng tốt",
    price: "8.000.000đ",
    oldPrice: "9.500.000đ",
    discount: "16% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://mayanhtop1.com/thumbs/800x800x2/upload/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den-5721.jpg",
  },
  {
    id: 9,
    brand: "Laptop MacBook Air 2015",
    title: "MacBook Air 13 inch 2015, Core i5, SSD 128GB, RAM 4GB",
    price: "10.000.000đ",
    oldPrice: "12.000.000đ",
    discount: "17% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://tuanminhstore.com/wp-content/uploads/Macbook-Air-2015-3.jpg",
  },
  {
    id: 10,
    brand: "Điện thoại Xiaomi Mi 8",
    title: "Xiaomi Mi 8 128GB, màu xanh, pin 90%",
    price: "5.500.000đ",
    oldPrice: "6.500.000đ",
    discount: "15% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://truonggiang.vn/wp-content/uploads/2022/06/DIEN-THOAI-XIAOMI-MI-8-2.jpg",
  },
  {
    id: 11,
    brand: "Máy ảnh Fujifilm X-T20",
    title: "Fujifilm X-T20, lens 18-55mm, tình trạng 98%",
    price: "12.000.000đ",
    oldPrice: "14.000.000đ",
    discount: "14% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zmBlCrlchmeOR02c4CDGnNpMGWuhCSZ1qQ&s",
  },
  {
    id: 12,
    brand: "Laptop Lenovo ThinkPad X1 Carbon",
    title: "Lenovo ThinkPad X1 Carbon Gen 5, Core i7, SSD 256GB, RAM 8GB",
    price: "13.500.000đ",
    oldPrice: "16.000.000đ",
    discount: "16% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://laptopchat.vn/wp-content/uploads/2022/07/ThinkPad-X1-carbon-Gen-5-i7-1-1.jpg",
  },
  {
    id: 13,
    brand: "Điện thoại Oppo F11 Pro",
    title: "Oppo F11 Pro 64GB, màu tím, camera pop-up",
    price: "4.200.000đ",
    oldPrice: "5.500.000đ",
    discount: "24% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc: "https://cdn.tgdd.vn/Files/2019/03/26/1157024/5_800x450.jpg",
  },
  {
    id: 14,
    brand: "Máy ảnh Panasonic Lumix G7",
    title: "Panasonic Lumix G7, lens 14-42mm, quay 4K",
    price: "9.000.000đ",
    oldPrice: "10.500.000đ",
    discount: "14% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://bizweb.dktcdn.net/100/107/650/products/53314544-1180274628805385-7078149641891479552-n.jpg?v=1552905931560",
  },
  {
    id: 15,
    brand: "Laptop Asus ZenBook UX430",
    title: "Asus ZenBook UX430UA, Core i5, SSD 256GB, RAM 8GB",
    price: "11.000.000đ",
    discount: "14% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://gamalaptop.vn/wp-content/uploads/2020/12/ASUS-Zenbook-UX430UA-01.jpg",
  },
  {
    id: 16,
    brand: "Điện thoại Vivo V15",
    title: "Vivo V15, 128GB, camera trượt, màn hình tràn viền",
    price: "4.900.000đ",
    oldPrice: "6.000.000đ",
    discount: "18% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://trainghiemso.vn/wp-content/uploads/2019/03/Vivo-V15-1-600x338.jpg",
  },
  {
    id: 17,
    brand: "Máy ảnh Olympus OM-D E-M10",
    title: "Olympus OM-D E-M10 Mark II, lens 14-42mm, hình thức 95%",
    price: "8.500.000đ",
    oldPrice: "10.000.000đ",
    discount: "15% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://bizweb.dktcdn.net/100/107/650/products/o-m10ii.jpg?v=1698984058497",
  },
  {
    id: 18,
    brand: "Laptop Acer Aspire E5",
    title: "Acer Aspire E5, Core i5, HDD 1TB, RAM 8GB",
    price: "6.200.000đ",
    oldPrice: "7.500.000đ",
    discount: "17% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://cdn.tgdd.vn/Products/Images/44/115524/acer-aspire-e5-575-5730-nxglbsv008-core-i5-7200u-8-1-450x300.jpg",
  },
  {
    id: 19,
    brand: "Điện thoại Realme 6 Pro",
    title: "Realme 6 Pro, Snapdragon 720G, 90Hz, 64GB",
    price: "5.000.000đ",
    oldPrice: "6.000.000đ",
    discount: "16% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://didongviet.vn/dchannel/wp-content/uploads/2020/03/cover-realme-6-didongviet-1068x559.jpg",
  },
  {
    id: 20,
    brand: "Máy ảnh Pentax K-70",
    title: "Pentax K-70, lens 18-135mm WR, chống nước",
    price: "10.500.000đ",
    oldPrice: "12.000.000đ",
    discount: "13% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/grande/100/297/199/products/274453685-5214470228605158-1931334969246527435-n.jpg?v=1645335093010",
  },
  {
    id: 21,
    brand: "Laptop MSI GF63 Thin",
    title: "MSI GF63 Thin, Core i7, GTX 1650, SSD 512GB",
    price: "14.500.000đ",
    oldPrice: "17.000.000đ",
    discount: "15% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://laptoptitan.vn/wp-content/uploads/2021/09/Msi-GF65-10ser-08.jpg",
  },
  {
    id: 22,
    brand: "Điện thoại Google Pixel 4 XL",
    title: "Google Pixel 4 XL, Snapdragon 855, camera siêu nét",
    price: "7.800.000đ",
    oldPrice: "9.500.000đ",
    discount: "18% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22120-8a9lnwip7rkv3c",
  },
  {
    id: 23,
    brand: "Máy ảnh Leica D-Lux 7",
    title: "Leica D-Lux 7, cảm biến Micro Four Thirds, zoom quang học",
    price: "16.000.000đ",
    oldPrice: "18.500.000đ",
    discount: "14% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://bizweb.dktcdn.net/100/107/650/products/dsc09983.jpg?v=1709264545923",
  },
  {
    id: 24,
    brand: "Laptop Asus TUF Gaming FX505",
    title: "Asus TUF FX505, Ryzen 7, GTX 1660Ti, SSD 512GB",
    price: "15.000.000đ",
    oldPrice: "17.500.000đ",
    discount: "14% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://laptoptitan.vn/wp-content/uploads/2019/10/Asus-Gaming-TUF-FX505GE-05.jpg",
  },
  {
    id: 25,
    brand: "Điện thoại Sony Xperia 1 II",
    title: "Sony Xperia 1 II, màn hình 4K OLED, Snapdragon 865",
    price: "13.000.000đ",
    oldPrice: "15.500.000đ",
    discount: "16% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://product.hstatic.net/200000906097/product/upload_3596a1f67586437285ef7c810d115302_1024x1024.jpg",
  },
  {
    id: 26,
    brand: "Máy ảnh Canon EOS R",
    title: "Canon EOS R, Full-frame, Lens RF 24-105mm",
    price: "34.000.000đ",
    oldPrice: "38.000.000đ",
    discount: "11% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r/may-anh-eos-r24-105-f4-71-500x500.png",
  },
  {
    id: 27,
    brand: "Laptop Dell XPS 15",
    title: "Dell XPS 15, Core i9, 4K OLED, 32GB RAM, 1TB SSD",
    price: "38.500.000đ",
    oldPrice: "45.000.000đ",
    discount: "14% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://product.hstatic.net/1000374492/product/untitled-1_1ec8cee721bb43809348044f533eaa58_grande.gif",
  },
  {
    id: 28,
    brand: "Điện thoại Nokia 3310 (2017)",
    title: "Nokia 3310 bản 2017, màu xanh cổ điển",
    price: "1.500.000đ",
    oldPrice: "2.000.000đ",
    discount: "25% Off",
    deliveryDate: "Miễn phí ship toàn quốc",
    imgSrc:
      "https://alofone.vn/wp-content/uploads/2023/08/nokia-3310-1-sim-mau-xanh-ngoc.jpg",
  },
  {
    id: 29,
    brand: "Máy ảnh Sony A7 III",
    title: "Sony A7 III, cảm biến Full-frame, quay 4K",
    price: "30.000.000đ",
    oldPrice: "34.000.000đ",
    discount: "12% Off",
    deliveryDate: "Giao hàng trong 3 ngày",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1HqMo3MJVCkHlOJvO2MMJCVO8oN6LHXABg&s",
  },
  {
    id: 30,
    brand: "Laptop Razer Blade 15",
    title: "Razer Blade 15, RTX 3070, Core i7, SSD 1TB",
    price: "42.000.000đ",
    oldPrice: "48.000.000đ",
    discount: "12% Off",
    deliveryDate: "Giao hàng trong 2 ngày",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4raWDRS6bJSMdAp44tvRwux-XVCSr8O1JBw&s",
  },
];
const ListingPage = () => {
  return (
    <div className="flex mt-20 gap-8 mb-20">
      {/* <FilterSection /> */}
      <div className="w-4/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {oldProducts.map((product) => (
          <ProductItem
            idProduct={product.id}
            key={product.id}
            brand={product.brand}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            deliveryDate={product.deliveryDate}
            imgSrc={product.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
