import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DEFAULT_URL } from "../../settingHere";

function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setConfirmPassword(value); // Gán confirmPassword bằng password
    validatePassword(value);
  };

  const validatePassword = (value: string) => {
    const passwordCriteria = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    if (!passwordCriteria.test(value)) {
      setPasswordError(
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm một ký tự đặc biệt, một số và một chữ cái viết hoa."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordError) {
      toast.error("Vui lòng sửa lỗi trước khi gửi.");
      return;
    }

    try {
      const response = await fetch(DEFAULT_URL + "api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });
      if (response.ok) {
        toast.success("Đăng ký thành công!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  return (
    <form
      className="bg-white p-6 rounded shadow-md w-96"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl mb-4 text-center">Đăng ký</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-2">{passwordError}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-green-900 text-white p-2 rounded hover:bg-green-800"
        disabled={!!passwordError}
      >
        Đăng ký
      </button>
      <p className="text-center mt-4">
        Nếu bạn đã có tài khoản, hãy
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-green-600 ml-1"
        >
          đăng nhập ngay
        </button>
      </p>
    </form>
  );
}

export default RegisterForm;
