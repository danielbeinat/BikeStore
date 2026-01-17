import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load components for code splitting
const Navbar = lazy(() => import("./Components/Navbar/Navbar").then(module => ({ default: module.Navbar })));
const Home = lazy(() => import("./Pages/Home").then(module => ({ default: module.Home })));
const Login = lazy(() => import("./Pages/Account/Login").then(module => ({ default: module.Login })));
const Register = lazy(() => import("./Pages/Account/Register").then(module => ({ default: module.Register })));
const Cart = lazy(() => import("./Pages/Cart").then(module => ({ default: module.Cart })));
const Footer = lazy(() => import("./Components/Footer/Footer").then(module => ({ default: module.Footer })));
const Category = lazy(() => import("./Pages/Category").then(module => ({ default: module.Category })));
const Product = lazy(() => import("./Pages/Product").then(module => ({ default: module.Product })));
const ChatBox = lazy(() => import("./Components/ChatBox/ChatBox").then(module => ({ default: module.ChatBox })));
const Checkout = lazy(() => import("./Components/Checkout/Checkout").then(module => ({ default: module.Checkout })));
const NewLetter = lazy(() => import("./Components/NewsLetter/NewLetter").then(module => ({ default: module.NewLetter })));
const News = lazy(() => import("./Components/News/News").then(module => ({ default: module.News })));
const SearchResults = lazy(() => import("./Pages/SearchResults").then(module => ({ default: module.SearchResults })));


// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fbbf24] mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando BiciShoop...</p>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="animate-pulse text-gray-400">Cargando...</div></div>}>
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
          <Route path="/novedades" element={<News />} />

          <Route path="bicicletas" element={<Category Category="Bicicletas" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>

      <ChatBox />
      <NewLetter />
      <Footer />
    </Suspense>
  );
};
