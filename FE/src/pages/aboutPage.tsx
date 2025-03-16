import { Card } from "antd";
import "tailwindcss/tailwind.css";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20 my-10">
      <h1 className="font-semibold uppercase text-4xl mb-6">Về chúng tôi</h1>
      <Card className="shadow-lg rounded-2xl p-6 md:p-10 max-w-4xl mx-auto mb-10 text-left">
        Chào mừng bạn đến với Yard Sales (Y.S) – nền tảng mua bán đồ cũ an toàn,
        tiện lợi, và thân thiện, giúp bạn tiết kiệm chi phí và đồng thời đóng
        góp vào một lối sống xanh, bền vững.
      </Card>
      <div className="max-w-4xl mx-auto space-y-10">
        <Card className="shadow-lg rounded-2xl p-6 md:p-10">
          <div className="md:flex md:items-center md:space-x-6">
            <img
              src="../public/img/Cơ bản.png"
              alt="Founder"
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800">
                Sứ Mệnh Của Chúng Tôi
              </h2>
              <p className="mt-2 text-gray-600">
                Chúng tôi tin rằng mỗi món đồ đều có giá trị và một cuộc đời thứ
                hai. Y.S được tạo ra để kết nối những người có nhu cầu mua và
                bán đồ cũ, giúp việc trao đổi trở nên dễ dàng, an toàn và minh
                bạch hơn. Sứ mệnh của chúng tôi là không chỉ mang đến một nền
                tảng giao dịch đáng tin cậy mà còn khuyến khích một lối sống bền
                vững, giảm thiểu rác thải và tối ưu hóa tài nguyên.
              </p>
            </div>
          </div>
        </Card>

        <Card className="shadow-lg rounded-2xl p-6 md:p-10">
          <div className="md:flex md:items-center md:space-x-6">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">
                Giá Trị Cốt Lõi
              </h2>
              <ul className="mt-2 text-gray-600 text-left list-disc">
                <li>
                  <span className="font-semibold text-black">Minh bạch:</span>{" "}
                  Chúng tôi cam kết mang lại trải nghiệm mua bán rõ ràng, đáng
                  tin cậy với hệ thống đánh giá người dùng và các tiêu chí kiểm
                  duyệt nghiêm ngặt.
                </li>
                <li>
                  <span className="font-semibold text-black">Chia sẻ:</span> Y.S
                  không chỉ là một nền tảng thương mại mà còn là một cộng đồng
                  nơi mọi người có thể dễ dàng trao đổi, tương tác và học hỏi từ
                  nhau.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    An toàn & bảo mật:
                  </span>{" "}
                  Tất cả giao dịch đều được bảo vệ bằng các công nghệ tiên tiến,
                  giúp bạn yên tâm khi mua bán trên nền tảng.
                </li>
              </ul>
            </div>
            <img
              src="../public/img/Tiêu chuẩn.png"
              alt="Growth"
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
          </div>
        </Card>

        <Card className="shadow-lg rounded-2xl p-6 md:p-10">
          <div className="md:flex md:items-center md:space-x-6">
            <img
              src="../public/img/Cao cấp.png"
              alt="Funding"
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">
                Chúng Tôi Cung Cấp Những Gì?
              </h2>
              <ul className="mt-2 text-gray-600 text-left list-disc">
                <li>
                  <span className="font-semibold text-black">
                    Nền tảng thân thiện, dễ sử dụng:
                  </span>{" "}
                  Với giao diện trực quan, người dùng có thể dễ dàng tìm kiếm
                  sản phẩm hoặc đăng tin bán chỉ trong vài bước đơn giản.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Tính năng mô tả sản phẩm tự động:
                  </span>{" "}
                  Hệ thống AI thông minh giúp người bán tiết kiệm thời gian bằng
                  cách tự động tạo nội dung mô tả sản phẩm chuyên nghiệp.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Mua bán nhanh chóng, tiện lợi:
                  </span>{" "}
                  Người dùng có thể trực tiếp trao đổi với nhau thông qua tính
                  năng chat tích hợp mà không cần thông qua bên trung gian.
                </li>
                <li>
                  <span className="font-semibold text-black">Bảo mật cao:</span>{" "}
                  Chúng tôi đảm bảo bảo mật thông tin cá nhân của người dùng,
                  giúp bạn mua bán mà không lo bị lộ thông tin cá nhân.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Cộng đồng mua bán đáng tin cậy:
                  </span>{" "}
                  Với hệ thống đánh giá và phản hồi, bạn có thể dễ dàng kiểm tra
                  mức độ uy tín của người mua hoặc người bán trước khi giao
                  dịch.
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="shadow-lg rounded-2xl p-6 md:p-10">
          <div className="md:flex md:items-center md:space-x-6 flex-row-reverse">
            <img
              src="../public/img/Cơ bản.png"
              alt="Funding"
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800">
                Tại Sao Chọn Y.S?
              </h2>
              <ul className="mt-2 text-gray-600 text-left list-disc">
                <li>
                  <span className="font-semibold text-black">
                    Phù hợp với sinh viên, người lao động trẻ:
                  </span>{" "}
                  Chúng tôi hiểu rằng tiết kiệm chi phí là ưu tiên của bạn, và
                  Y.S chính là giải pháp giúp bạn mua sắm thông minh mà vẫn đảm
                  bảo chất lượng.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Góp phần vào lối sống bền vững:
                  </span>{" "}
                  Thay vì vứt bỏ những món đồ không còn dùng đến, bạn có thể
                  trao đổi chúng với người khác, giảm rác thải và bảo vệ môi
                  trường.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Công nghệ tiên tiến, tối ưu trải nghiệm:
                  </span>{" "}
                  Chúng tôi không ngừng cải tiến nền tảng, ứng dụng AI và các
                  công nghệ hiện đại để giúp việc mua bán đồ cũ trở nên dễ dàng,
                  nhanh chóng và hiệu quả hơn.
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
