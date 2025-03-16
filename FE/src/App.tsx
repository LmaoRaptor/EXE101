import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import DetailPage from "./pages/detailPage";
import HomePage from "./pages/homePage";
import ListingPage from "./pages/listingPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import { ToastContainer } from "react-toastify";
import CreatePage from "./pages/createPage";
import PaymentPage from "./pages/paymentPage";
import BlogPage from "./pages/blogPage";
import NotFoundPage from "./components/error/ErrorPage";
import GoogleAnalytics from "./utils/googleAnalytics";
import MyProductsPage from "./pages/MyProductsPage";
import UpdatePage from "./pages/updatePage";
import AboutPage from "./pages/aboutPage";
import TermsOfUse from "./pages/policyPage";

function AppWrapper() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      {!isAuthPage && (
        <>
          <div id="contentComponent" className="min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ListingPage />} />
              <Route path="/products/:id" element={<DetailPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/myproduct" element={<MyProductsPage />} />
              <Route path="/update/:id" element={<UpdatePage />} />
              <Route path="/aboutus" element={<AboutPage />} />
              <Route path="/term" element={<TermsOfUse />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <ToastContainer />
      <AppWrapper />
    </Router>
  );
}
