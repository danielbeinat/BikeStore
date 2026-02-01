"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Search from "./Search/Search";
import {
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  Package,
  RotateCcw,
  Truck,
  Wallet,
} from "lucide-react";
import { Context, ContextValue } from "@/src/context/Context";
import { CartModal } from "../CartModal/CartModal";
import { WishlistModal } from "../WishlistModal/WishlistModal";
import Bikeshoop from "@/src/assets/Bikeshoop.png";

export default function Navbar() {
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { getTotalcartItems, getTotalWishlistItems, cartModalOpen, setCartModalOpen } = useContext(
    Context
  ) as ContextValue;

  const Navlink = [
    { name: "INICIO", to: "/" },
    { name: "NOVEDADES", to: "/novedades" },
    { name: "BICICLETAS", to: "/bicicletas" },
    { name: "ACCESORIOS", to: "/accesorios" },
    { name: "INDUMENTARIA", to: "/indumentaria" },
  ];

  const benefits = [
    { icon: Package, text: "Retiro en tienda en 48hs" },
    { icon: RotateCcw, text: "Cambios y devoluciones" },
    { icon: Truck, text: "Envío rápido" },
    { icon: Wallet, text: "Hasta 12 cuotas sin interés" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Piso Superior - Fondo Negro */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 py-4">
            {/* Logo - Izquierda */}
            <Link
              href="/"
              className="flex-shrink-0"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Image src={Bikeshoop} className="h-14 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-sm border border-white/10 rounded-md" alt="BiciShoop" width={60} height={56} />
            </Link>

            {/* Nav Links - Centrados */}
            <nav className="hidden lg:flex items-center gap-4 flex-1 justify-center">
              {Navlink.map((link) => (
                <Link
                  key={link.name}
                  href={link.to}
                  className={`text-sm font-bold uppercase transition-colors text-white hover:text-yellow-400`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side - Search, Icons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Search Bar - Derecha */}
              <div className="hidden lg:block w-48">
                <Search />
              </div>

              {/* Icons - Usuario, Favoritos, Carrito */}
              <div className="flex items-center gap-3">
                {/* User Icon */}
                <Link
                  href="/login"
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                  aria-label="Usuario"
                >
                  <User className="w-5 h-5" />
                </Link>

                {/* Favorites Icon */}
                <button
                  onClick={() => setIsWishlistOpen(!isWishlistOpen)}
                  className="relative p-2 text-gray-300 hover:text-white transition-colors"
                  aria-label="Favoritos"
                >
                  <Heart className="w-5 h-5" />
                  {getTotalWishlistItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center min-w-[16px]">
                      {getTotalWishlistItems()}
                    </span>
                  )}
                </button>

                {/* Cart Icon */}
                <button
                  onClick={() => setCartModalOpen(!cartModalOpen)}
                  className="relative p-2 text-gray-300 hover:text-white transition-colors"
                  aria-label="Carrito"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {getTotalcartItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center min-w-[16px]">
                      {getTotalcartItems()}
                    </span>
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                  aria-label="Menú"
                >
                  {menuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search & Menu */}
          <div className="lg:hidden pb-4">
            <div className="mb-4">
              <Search />
            </div>
            {menuOpen && (
              <div className="space-y-2">
                {Navlink.map((link) => (
                  <Link
                    key={link.name}
                    href={link.to}
                    className="block px-4 py-2 text-sm font-bold uppercase transition-colors text-white hover:text-yellow-400"
                    onClick={() => {
                      setMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Piso Inferior - Fondo Blanco - Barra de Beneficios */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    {/* Icon background with glassmorphism */}
                    <div className="w-10 h-10 bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl shadow-sm flex items-center justify-center group-hover:bg-white/90 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[#fbbf24]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-sm font-medium whitespace-nowrap group-hover:text-[#fbbf24] transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <CartModal open={cartModalOpen} setOpen={setCartModalOpen} />
      <WishlistModal open={isWishlistOpen} setOpen={setIsWishlistOpen} />
    </div>
  );
};
