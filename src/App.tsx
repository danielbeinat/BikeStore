import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Pages/Account/Login";
import { Register } from "./Pages/Account/Register";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import { Category } from "./Pages/Category";
import { Product } from "./Pages/Product";
import { ChatBox } from "./Components/ChatBox/ChatBox";
import { Checkout } from "./Components/Checkout/Checkout";
import { NewLetter } from "./Components/NewsLetter/NewLetter";
import { SearchResults } from "./Pages/SearchResults";

export const App: React.FC = () => {
  return (
    <>
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
        <Route path="/search/:query" element={<SearchResults />} />

        <Route path="bicicletas" element={<Category Category="Bicicletas" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <ChatBox />

      <NewLetter />

      <Footer />
    </>
  );
};
