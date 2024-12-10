const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 gap-20">
          <div className="lg:w-2/5">
            <h2 className="text-2xl font-bold mb-4">
              Join the movement and get exclusive deals, promotions, and updates
              on your favorite brands
            </h2>
            <div className="flex items-center space-x-2 mb-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-2 w-full max-w-xs rounded-sm text-white outline-none  border-b border-white bg-transparent"
              />
              <button className="bg-green-700 text-white py-2 px-4 rounded-lg">
                Submit
              </button>
            </div>
            <p className="text-sm text-gray-300">
              By submitting your email address, you agree to receive marketing
              emails from Rivly, and accept our{" "}
              <a href="#" className="underline">
                terms & conditions
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                privacy policy
              </a>
              .
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Shop</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Homepage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shopper Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Articles
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Seller
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Orders & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center & FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
