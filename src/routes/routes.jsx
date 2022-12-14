import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Report from "../pages/Report";
import Header from "../shared/Header";
// import Footer from "../shared/Footer";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/reports" element={<Report />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
};

export default Router;
