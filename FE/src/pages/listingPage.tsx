// import FilterSection from "../components/filter/FilterSection";
import { useEffect, useState } from "react";
import ProductItem from "../components/product/productItem";
import { DEFAULT_URL } from "../settingHere";

const oldProducts = [
  {
    id: 1,
    title: "Máy ảnh Canon cũ",
    description: "Máy ảnh Canon EOS 700D, lens 18-55mm, hình thức 90%",
    price: "5.200.000",
    status: "6.000.000",
    subCategoryName: "13% Off",
    createdAt: "Miễn phí giao hàng nội thành",
    mainImage:
      "https://bizweb.dktcdn.net/thumb/grande/100/107/650/products/canon-eos-700d-1855-4.jpg?v=1603680414257",
  },
  {
    id: 2,
    title: "Laptop Dell Latitude",
    description: "Laptop Dell Latitude E7450 Core i5, SSD 256GB, RAM 8GB",
    price: "7.800.000",
    status: "9.000.000",
    subCategoryName: "15% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://tuanminhstore.com/wp-content/uploads/ban-phim-dell-7450.jpeg",
  },
  {
    id: 3,
    title: "Điện thoại iPhone X cũ",
    description: "iPhone X 64GB, pin 85%, máy đẹp",
    price: "6.500.000",
    status: "7.500.000",
    subCategoryName: "13% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://hnstoreshop.vn/wp-content/uploads/z6041991452794_114f228716a6e9c38bf7054388704019.jpg",
  },
  {
    id: 4,
    title: "Xoong nồi 99%",
    description:
      "🔥 Bộ xoong nồi inox 5 món cao cấp - Chỉ với 1.500.000đ! Sản phẩm chất lượng, giá tốt, nhanh tay sở hữu ngay!",
    price: "500.000",
    status: "2.000.000",
    subCategoryName: "25% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Vq1aK8jTLnmEgfpIXkmQyqNhXhYUhzFMPQ&s",
  },
  {
    id: 5,
    title: "Gucci gang bộ",
    description:
      "💥 Ưu đãi sốc! Bộ quần áo gucci gang cotton thoáng mát chỉ còn 500.000đ, cơ hội vàng cho bạn!",
    price: "213.000",
    status: "700.000",
    subCategoryName: "28% Off",
    createdAt: "Miễn phí giao hàng nội thành",
    mainImage:
      "https://yenlanh.com/wp-content/uploads/2024/06/bo-quan-ao-gucci-nam-yenlanh-com-1654.jpg",
  },
  {
    id: 6,
    title: "Bát đĩa",
    description:
      "🚀 Mua ngay bộ bát đĩa sứ trắng cao cấp với giá chỉ 750.000đ, chất lượng đảm bảo, đừng bỏ lỡ!",
    price: "75.000",
    status: "900.000",
    subCategoryName: "16% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoo8UxHr04otwCZ1IWcD2Qs4jHw3rd4pieGw&s",
  },
  {
    id: 7,
    title: "Đồ kệ",
    description:
      "🎯 Đặc biệt kệ gỗ đa năng đang giảm giá còn 2.000.000đ, mua ngay kẻo hết!",
    price: "2.000.000",
    status: "2.500.000",
    subCategoryName: "20% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/357/040/products/ke-da-nang-4-tang-e11b70c1-0e66-4b50-a39d-baf34883d236.jpg?v=1623680798073",
  },
  {
    id: 8,
    title: "Máy ảnh Sony Alpha A6000",
    description: "Sony Alpha A6000, lens kit 16-50mm, tình trạng tốt",
    price: "8.000.000",
    status: "9.500.000",
    subCategoryName: "16% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://mayanhtop1.com/thumbs/800x800x2/upload/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den-5721.jpg",
  },
  {
    id: 9,
    title: "Laptop MacBook Air 2015",
    description: "MacBook Air 13 inch 2015, Core i5, SSD 128GB, RAM 4GB",
    price: "10.000.000",
    status: "12.000.000",
    subCategoryName: "17% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://tuanminhstore.com/wp-content/uploads/Macbook-Air-2015-3.jpg",
  },
  {
    id: 10,
    title: "Điện thoại Xiaomi Mi 8",
    description: "Xiaomi Mi 8 128GB, màu xanh, pin 90%",
    price: "5.500.000",
    status: "6.500.000",
    subCategoryName: "15% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://truonggiang.vn/wp-content/uploads/2022/06/DIEN-THOAI-XIAOMI-MI-8-2.jpg",
  },
  {
    id: 11,
    title: "Máy ảnh Fujifilm X-T20",
    description: "Fujifilm X-T20, lens 18-55mm, tình trạng 98%",
    price: "12.000.000",
    status: "14.000.000",
    subCategoryName: "14% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zmBlCrlchmeOR02c4CDGnNpMGWuhCSZ1qQ&s",
  },
  {
    id: 12,
    title: "Laptop Lenovo ThinkPad X1 Carbon",
    description: "Lenovo ThinkPad X1 Carbon Gen 5, Core i7, SSD 256GB, RAM 8GB",
    price: "13.500.000",
    status: "16.000.000",
    subCategoryName: "16% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://laptopchat.vn/wp-content/uploads/2022/07/ThinkPad-X1-carbon-Gen-5-i7-1-1.jpg",
  },
  {
    id: 13,
    title: "Điện thoại Oppo F11 Pro",
    description: "Oppo F11 Pro 64GB, màu tím, camera pop-up",
    price: "4.200.000",
    status: "5.500.000",
    subCategoryName: "24% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage: "https://cdn.tgdd.vn/Files/2019/03/26/1157024/5_800x450.jpg",
  },
  {
    id: 14,
    title: "Máy ảnh Panasonic Lumix G7",
    description: "Panasonic Lumix G7, lens 14-42mm, quay 4K",
    price: "9.000.000",
    status: "10.500.000",
    subCategoryName: "14% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://bizweb.dktcdn.net/100/107/650/products/53314544-1180274628805385-7078149641891479552-n.jpg?v=1552905931560",
  },
  {
    id: 15,
    title: "Laptop Asus ZenBook UX430",
    description: "Asus ZenBook UX430UA, Core i5, SSD 256GB, RAM 8GB",
    price: "11.000.000",
    subCategoryName: "14% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://gamalaptop.vn/wp-content/uploads/2020/12/ASUS-Zenbook-UX430UA-01.jpg",
  },
  {
    id: 16,
    title: "Điện thoại Vivo V15",
    description: "Vivo V15, 128GB, camera trượt, màn hình tràn viền",
    price: "4.900.000",
    status: "6.000.000",
    subCategoryName: "18% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://trainghiemso.vn/wp-content/uploads/2019/03/Vivo-V15-1-600x338.jpg",
  },
  {
    id: 17,
    title: "Máy ảnh Olympus OM-D E-M10",
    description: "Olympus OM-D E-M10 Mark II, lens 14-42mm, hình thức 95%",
    price: "8.500.000",
    status: "10.000.000",
    subCategoryName: "15% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://bizweb.dktcdn.net/100/107/650/products/o-m10ii.jpg?v=1698984058497",
  },
  {
    id: 18,
    title: "Laptop Acer Aspire E5",
    description: "Acer Aspire E5, Core i5, HDD 1TB, RAM 8GB",
    price: "6.200.000",
    status: "7.500.000",
    subCategoryName: "17% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://cdn.tgdd.vn/Products/Images/44/115524/acer-aspire-e5-575-5730-nxglbsv008-core-i5-7200u-8-1-450x300.jpg",
  },
  {
    id: 19,
    title: "Điện thoại Realme 6 Pro",
    description: "Realme 6 Pro, Snapdragon 720G, 90Hz, 64GB",
    price: "5.000.000đ",
    status: "6.000.000đ",
    subCategoryName: "16% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://didongviet.vn/dchannel/wp-content/uploads/2020/03/cover-realme-6-didongviet-1068x559.jpg",
  },
  {
    id: 20,
    title: "Máy ảnh Pentax K-70",
    description: "Pentax K-70, lens 18-135mm WR, chống nước",
    price: "10.500.000đ",
    status: "12.000.000đ",
    subCategoryName: "13% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://bizweb.dktcdn.net/thumb/grande/100/297/199/products/274453685-5214470228605158-1931334969246527435-n.jpg?v=1645335093010",
  },
  {
    id: 21,
    title: "Laptop MSI GF63 Thin",
    description: "MSI GF63 Thin, Core i7, GTX 1650, SSD 512GB",
    price: "14.500.000đ",
    status: "17.000.000đ",
    subCategoryName: "15% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://laptoptitan.vn/wp-content/uploads/2021/09/Msi-GF65-10ser-08.jpg",
  },
  {
    id: 22,
    title: "Điện thoại Google Pixel 4 XL",
    description: "Google Pixel 4 XL, Snapdragon 855, camera siêu nét",
    price: "7.800.000đ",
    status: "9.500.000đ",
    subCategoryName: "18% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22120-8a9lnwip7rkv3c",
  },
  {
    id: 23,
    title: "Máy ảnh Leica D-Lux 7",
    description: "Leica D-Lux 7, cảm biến Micro Four Thirds, zoom quang học",
    price: "16.000.000đ",
    status: "18.500.000đ",
    subCategoryName: "14% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://bizweb.dktcdn.net/100/107/650/products/dsc09983.jpg?v=1709264545923",
  },
  {
    id: 24,
    title: "Laptop Asus TUF Gaming FX505",
    description: "Asus TUF FX505, Ryzen 7, GTX 1660Ti, SSD 512GB",
    price: "15.000.000đ",
    status: "17.500.000đ",
    subCategoryName: "14% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://laptoptitan.vn/wp-content/uploads/2019/10/Asus-Gaming-TUF-FX505GE-05.jpg",
  },
  {
    id: 25,
    title: "Điện thoại Sony Xperia 1 II",
    description: "Sony Xperia 1 II, màn hình 4K OLED, Snapdragon 865",
    price: "13.000.000đ",
    status: "15.500.000đ",
    subCategoryName: "16% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://product.hstatic.net/200000906097/product/upload_3596a1f67586437285ef7c810d115302_1024x1024.jpg",
  },
  {
    id: 26,
    title: "Máy ảnh Canon EOS R",
    description: "Canon EOS R, Full-frame, Lens RF 24-105mm",
    price: "34.000.000đ",
    status: "38.000.000đ",
    subCategoryName: "11% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r/may-anh-eos-r24-105-f4-71-500x500.png",
  },
  {
    id: 27,
    title: "Laptop Dell XPS 15",
    description: "Dell XPS 15, Core i9, 4K OLED, 32GB RAM, 1TB SSD",
    price: "38.500.000đ",
    status: "45.000.000đ",
    subCategoryName: "14% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://product.hstatic.net/1000374492/product/undescriptiond-1_1ec8cee721bb43809348044f533eaa58_grande.gif",
  },
  {
    id: 28,
    title: "Điện thoại Nokia 3310 (2017)",
    description: "Nokia 3310 bản 2017, màu xanh cổ điển",
    price: "1.500.000đ",
    status: "2.000.000đ",
    subCategoryName: "25% Off",
    createdAt: "Miễn phí ship toàn quốc",
    mainImage:
      "https://alofone.vn/wp-content/uploads/2023/08/nokia-3310-1-sim-mau-xanh-ngoc.jpg",
  },
  {
    id: 29,
    title: "Máy ảnh Sony A7 III",
    description: "Sony A7 III, cảm biến Full-frame, quay 4K",
    price: "30.000.000đ",
    status: "34.000.000đ",
    subCategoryName: "12% Off",
    createdAt: "Giao hàng trong 3 ngày",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1HqMo3MJVCkHlOJvO2MMJCVO8oN6LHXABg&s",
  },
  {
    id: 30,
    title: "Laptop Razer Blade 15",
    description: "Razer Blade 15, RTX 3070, Core i7, SSD 1TB",
    price: "42.000.000đ",
    status: "48.000.000đ",
    subCategoryName: "12% Off",
    createdAt: "Giao hàng trong 2 ngày",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4raWDRS6bJSMdAp44tvRwux-XVCSr8O1JBw&s",
  },
];

const ListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(DEFAULT_URL + "api/post");
        const data = await response.json();
        setProducts([...data, ...oldProducts]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex mt-20 gap-8 mb-20">
      {/* <FilterSection /> */}
      <div className="w-4/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem
            idProduct={product.id as any}
            key={product.id}
            brand={product.description}
            title={product.title}
            price={product.price}
            oldPrice={product.subCategoryName}
            discount={product.status}
            deliveryDate={product.createdAt}
            imgSrc={product.mainImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
