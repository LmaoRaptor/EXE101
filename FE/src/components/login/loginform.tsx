import { useState } from "react";
import { DEFAULT_URL } from "../../settingHere";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  handleLoginSuccess: () => void;
}

function LoginForm({ handleLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setPassword(value);
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
    if (passwordError || loading) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(DEFAULT_URL + "/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      sessionStorage.setItem("userToken", JSON.stringify(data));
      handleLoginSuccess();
    } catch (error: any) {
      setErrorMessage(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white p-6 rounded shadow-md w-96"
      onSubmit={handleSubmit}
      style={{ position: "absolute", marginTop: "120px", width: "500px" }}
    >
      <h2 className="text-2xl mb-4 text-center">Đăng nhập</h2>
      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}

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
        className="w-full bg-green-900 text-white p-2 rounded hover:bg-green-800 disabled:opacity-50"
        disabled={!!passwordError || loading}
      >
        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      <p className="text-center mt-4 text-gray-700">
        Nếu bạn chưa có tài khoản, hãy
        <button
          onClick={() => navigate("/register")}
          className="text-green-600 ml-1"
        >
          đăng ký với chúng tôi
        </button>
      </p>
    </form>
  );
}

export default LoginForm;
