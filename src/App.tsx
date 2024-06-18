import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Account } from "./Pages/Account";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import { Category } from "./Pages/Category";
import { Product } from "./Pages/Product";
import { HeaderPromo } from "./Components/HeaderPromo/HeaderPromo";
import { ChatBox } from "./Components/ChatBox/ChatBox";
import { Checkout } from "./Components/Checkout/Checkout";
export const App: React.FC = () => {
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

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <ChatBox />

      <Footer />
    </>
  );
};
