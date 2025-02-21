import RegisterForm from "../components/register/RegisterForm";

function RegisterPage() {
  return (
    <div
      className="flex items-center justify-center h-screen overflow-hidden"
      style={{
        backgroundColor: "#f1f4e9",
      }}
    >
      <img
        src="../public/img/479565170_929069559386069_6615115608816055641_n.png"
        alt=""
        style={{ height: "1260px", marginTop: "-100px" }}
      />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
