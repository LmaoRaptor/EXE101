import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <img
        src="https://play-lh.googleusercontent.com/PBaSSruwuNhxncBMFow9U6JlXc5z5izVB1dryEXrmov9QatM2a4fSVss2v6Zlw8nJ1o"
        alt="123"
        height={40}
        width={40}
        className="size-10"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-4 mr-5 ml-5">
        <div className="flex gap-[0.5px] flex-col">
          <div className="flex gap-[0.5px]">
            <div className="size-5 rounded-lg bg-gray-300"></div>
            <div className="size-5 rounded-lg bg-gray-300"></div>
          </div>
          <div className="flex gap-[0.5px]">
            <div className="size-5 rounded-lg bg-gray-300"></div>
            <div className="size-5 rounded-lg bg-gray-300"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.7px]">
          <span className="text-[14px] leading-[14px]">DEPARTMENT</span>
          <span className="text-gray-300 text-[12px] leading-3">
            Description
          </span>
          <span className="text-[12px] leading-3">Let go</span>
        </div>
      </div>

      <div className="flex gap-4 justify-center items-center w-full flex-wrap">
        <div className="w-full flex gap-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 
              0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-100 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 
             outline-none"
              placeholder="Search branch name..."
              required
            />
          </div>
          <div className="size-10 bg-gray-100 rounded-lg">A</div>
        </div>
        <ul className="flex gap-10 items-center justify-center list-none text-[12px]">
          <li>Xe đạp</li>
          <li>Điện thoại</li>
          <li>Máy ảnh</li>
          <li>Bàn học</li>
          <li>Ghế ngồi</li>
          <li>Chuột máy tính</li>
        </ul>
      </div>
      <div className="h-10 bg-black rounded-lg text-white ">Premium</div>

      <img
        src="https://www.themeparkinsider.com/assets/PROF_NewUserIcon.png"
        alt="123"
        width={60}
        height={40}
        className="w-16 h-10 rounded-xl object-cover"
      />
    </div>
  );
};

export default Navbar;
