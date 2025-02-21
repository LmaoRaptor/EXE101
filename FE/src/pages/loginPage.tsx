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
    <div
      className="flex items-center justify-center h-screen overflow-hidden"
      style={{
        backgroundColor: "#f8ecdb",
      }}
    >
      <LoginForm handleSubmitForm={handleSubmitForm} />
      <img src="../public/img/login.png" alt="" />
    </div>
  );
}

export default LoginPage;
