import LoginForm from "../components/login/loginform";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const navigate = useNavigate();
  const handleSubmitForm = () => {
    toast.success("Login successful!");
    navigate("/");
    sessionStorage.setItem("token", "pass");
  };
  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen overflow-hidden">
      <LoginForm handleSubmitForm={handleSubmitForm} />
    </div>
  );
}

export default LoginPage;
