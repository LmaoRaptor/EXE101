import { Card } from "antd";

const termsData = [
  {
    title: "Định nghĩa và phạm vi áp dụng",
    time: "Cập nhật lần cuối: 23/2/2025",
    content: [
      "**Y.S Platform** là một trang web trung gian kết nối người mua và người bán các sản phẩm đã qua sử dụng.",
      "**Người dùng** là bất kỳ cá nhân hoặc tổ chức nào truy cập và sử dụng nền tảng Y.S, bao gồm cả người mua và người bán.",
      "**Sản phẩm** là hàng hóa đã qua sử dụng được người bán đăng tải trên nền tảng.",
    ],
  },
  {
    title: "Quyền và nghĩa vụ của người dùng",
    content: [
      "**Quyền của người dùng**",
      "- Đăng tin bán hàng, tìm kiếm và mua sản phẩm thông qua nền tảng.",
      "- Sử dụng các tính năng hỗ trợ như tìm kiếm, nhắn tin trực tiếp, đánh giá và báo cáo sản phẩm vi phạm.",
      "- Yêu cầu hỗ trợ kỹ thuật khi gặp vấn đề liên quan đến tài khoản hoặc giao dịch.",
      "**Nghĩa vụ của người dùng**",
      "- Cung cấp thông tin chính xác khi đăng ký tài khoản và chịu trách nhiệm về nội dung đăng tải.",
      "- Không đăng tải sản phẩm vi phạm pháp luật, hàng cấm, hàng giả, hoặc nội dung có tính chất lừa đảo.",
      "- Tự chịu trách nhiệm về giao dịch giữa người mua và người bán, bao gồm chất lượng sản phẩm và phương thức thanh toán.",
      "- Không lợi dụng nền tảng để lừa đảo, thực hiện các hành vi gian lận hoặc gây ảnh hưởng xấu đến người dùng khác.",
    ],
  },
  {
    title: "Chính sách đăng bán sản phẩm",
    content: [
      "**Danh mục sản phẩm được phép đăng bán**",
      "- Quần áo, giày dép, phụ kiện",
      "- Sách, truyện, đồ chơi",
      "- Đồ điện tử, điện thoại, máy tính, linh kiện",
      "- Đồ gia dụng, nội thất, thiết bị nhà bếp",
      "**Các sản phẩm bị cấm đăng bán**",
      "- Hàng giả, hàng nhái, hàng vi phạm bản quyền",
      "- Đồ ăn, thực phẩm, thuốc, chất kích thích",
      "- Vũ khí, vật liệu nguy hiểm, hóa chất cấm",
      "- Sản phẩm vi phạm pháp luật hoặc thuần phong mỹ tục",
    ],
  },
  {
    title: "Trách nhiệm và miễn trừ trách nhiệm",
    content: [
      "**Trách nhiệm của nền tảng**",
      "- Y.S chỉ đóng vai trò trung gian kết nối người mua và người bán, không trực tiếp tham gia vào giao dịch và không chịu trách nhiệm về chất lượng sản phẩm.",
      "- Chúng tôi cung cấp công cụ hỗ trợ người dùng tìm kiếm, đăng bán, nhắn tin và đánh giá đối tác giao dịch.",
      "- Y.S không chịu trách nhiệm về thiệt hại phát sinh do giao dịch giữa người mua và người bán.",
      "**Miễn trừ trách nhiệm**",
      "- Y.S không đảm bảo tính chính xác của thông tin sản phẩm do người bán cung cấp.",
      "- Người mua cần tự kiểm tra sản phẩm trước khi giao dịch để tránh rủi ro.",
      "- Chúng tôi không chịu trách nhiệm nếu có tranh chấp giữa người mua và người bán, bao gồm các vấn đề liên quan đến hoàn tiền, đổi trả hay chất lượng sản phẩm.",
    ],
  },
  {
    title: "Chính sách bảo mật thông tin",
    content: [
      "- Chúng tôi cam kết không chia sẻ thông tin cá nhân của người dùng cho bên thứ ba nếu không có sự đồng ý.",
      "- Người dùng có quyền ẩn danh khi giao dịch và chỉ chia sẻ thông tin cần thiết cho đối tác giao dịch.",
      "- Hệ thống bảo mật của Y.S sử dụng công nghệ mã hóa dữ liệu, giúp bảo vệ tài khoản người dùng trước các rủi ro bảo mật.",
    ],
  },
  {
    title: "Cơ chế giải quyết tranh chấp",
    content: [
      "- Y.S khuyến nghị hai bên tự thương lượng trước để giải quyết vấn đề.",
      "- Nếu không thể giải quyết, người dùng có thể báo cáo vi phạm và cung cấp bằng chứng để nền tảng hỗ trợ xem xét.",
      "- Chúng tôi có quyền khóa tài khoản của những người dùng vi phạm chính sách hoặc có hành vi gian lận.",
    ],
  },
  {
    title: "Chính sách thanh toán và phí dịch vụ",
    content: [
      "- Người dùng có thể sử dụng nền tảng miễn phí để đăng tin bán sản phẩm.",
      "- Y.S cung cấp gói nâng cấp giúp tăng hiển thị bài đăng với mức phí cụ thể.",
      "- Các khoản phí không được hoàn trả sau khi đã thanh toán trừ trường hợp có lỗi hệ thống.",
    ],
  },
  {
    title: "Chấm dứt và tạm ngừng tài khoản",
    content: [
      "- Chúng tôi có quyền tạm ngừng hoặc xóa tài khoản nếu phát hiện người dùng vi phạm điều khoản sử dụng.",
      "- Người dùng có thể tự yêu cầu xóa tài khoản nếu không muốn tiếp tục sử dụng dịch vụ.",
      "- Tài khoản bị khóa vĩnh viễn sẽ không được khôi phục.",
    ],
  },
  {
    title: "Thay đổi điều khoản",
    content: [
      "- Y.S có quyền cập nhật Chính sách & Điều khoản sử dụng bất cứ lúc nào.",
      "- Người dùng sẽ được gửi email thông báo về những thay đổi quan trọng.",
      "- Việc tiếp tục sử dụng nền tảng sau khi cập nhật chính sách đồng nghĩa với việc bạn đã chấp nhận các điều khoản mới.",
    ],
  },
];

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="font-semibold uppercase text-4xl mb-6">
        CHÍNH SÁCH & ĐIỀU KHOẢN SỬ DỤNG
      </h1>
      {termsData.map((section, index) => (
        <Card
          key={index}
          className="shadow-lg rounded-2xl p-6 md:p-8 mb-6 text-left"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            {section.title}
          </h2>
          {section?.time && (
            <h3 className="text-left font-medium mb-4 italic">
              {section?.time}
            </h3>
          )}
          <div className="text-gray-600 space-y-2">
            {section.content.map((item, idx) => (
              <p
                key={idx}
                className={item.startsWith("**") ? "font-semibold" : ""}
              >
                {item.replaceAll("**", "")}
              </p>
            ))}
          </div>
        </Card>
      ))}
      <Card className="shadow-lg rounded-2xl p-6 md:p-8 mb-6 text-left">
        <div className="flex flex-col gap-2">
          <span>
            📌 Liên hệ hỗ trợ Nếu bạn có bất kỳ câu hỏi hoặc khiếu nại nào, vui
            lòng liên hệ:
          </span>
          <span>📧 Email: YardSaleFlatform@gmail.com</span>
          <span>📞 Hotline: 091 342 30 41</span>
          <span>
            📌 Chúng tôi cam kết xây dựng một nền tảng mua bán đồ cũ an toàn,
            minh bạch và đáng tin cậy. Cảm ơn bạn đã sử dụng Y.S!
          </span>
        </div>
      </Card>
    </div>
  );
};

export default TermsOfUse;
