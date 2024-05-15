import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Account } from "./Pages/Account.jsx";
import { Cart } from "./Pages/Cart.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { Category } from "./Pages/Category.jsx";
import { Product } from "./Pages/Product.jsx";
import { HeaderPromo } from "../src/Components/HeaderPromo/HeaderPromo.jsx";
import { ChatBox } from "../src/Components/ChatBox/ChatBox.jsx";

export const App = () => {
  return (
    <>
      <HeaderPromo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/accesorios"
          element={<Category Category="Accesorios" />}
        />
        <Route
          path="/indumentaria"
          element={<Category Category="Indumentaria" />}
        />
        <Route path="bicicletas" element={<Category Category="Bicicletas" />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>

      <ChatBox />

      <Footer />
    </>
  );
};
