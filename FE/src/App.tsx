import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import DetailPage from "./pages/detailPage";
import HomePage from "./pages/homePage";
import ListingPage from "./pages/listingPage";

function App() {
  return (
    <>
      <div id="contentComponent">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ListingPage />} />
            <Route path="/products/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
