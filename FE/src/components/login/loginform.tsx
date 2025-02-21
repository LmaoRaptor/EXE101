import { useState } from "react";

interface LoginFormProps {
  handleSubmitForm: () => void;
}
function LoginForm({ handleSubmitForm }: LoginFormProps) {
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const validatePassword = (value: string) => {
    const passwordCriteria = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    if (!passwordCriteria.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long, include a special character, a number, and an uppercase letter."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordError) {
      handleSubmitForm();
    }
  };

  return (
    <form
      className="bg-white p-6 rounded shadow-md w-96"
      onSubmit={handleSubmit}
      style={{ position: "absolute", marginTop: "120px", width: "500px" }}
    >
      <h2 className="text-2xl mb-4 text-center">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
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
        Login
      </button>
    </form>
  );
}

export default LoginForm;
