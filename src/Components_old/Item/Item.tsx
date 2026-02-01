"use client";

import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { Heart, ShoppingCart, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Context, ContextValue } from "@/src/context/Context";

interface propsitem {
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
}

const Item: React.FC<propsitem> = (props) => {
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCart } = useContext(
    Context
  ) as ContextValue;

  const installmentPrice = (props.price / 12)
    .toFixed(3)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(props.id)) {
      removeFromWishlist(props.id);
    } else {
      addToWishlist(props.id);
    }
  };

  const handleCardClick = () => {
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(props.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-full max-w-sm"
    >
      {/* Glassmorphism Card Container */}
      <Link href={`/product/${props.id}`} onClick={handleCardClick} className="block">
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:bg-white/90 cursor-pointer">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Free Shipping Badge */}
        {props.price >= 50000 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute top-4 left-4 z-20"
          >
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-white px-3 py-1.5 rounded-full shadow-lg">
              <Truck className="w-3 h-3" />
              <span className="text-xs font-bold uppercase tracking-wide">Envío Gratis</span>
            </div>
          </motion.div>
        )}

        {/* Wishlist Button */}
        <motion.div
          className="absolute top-4 right-4 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleWishlistToggle}
            className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            aria-label="Agregar a favoritos"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isInWishlist(props.id)
                  ? "fill-red-500 text-red-500 scale-110"
                  : "text-gray-600 hover:text-red-500 hover:scale-110"
              }`}
            />
          </button>
        </motion.div>

        {/* Product Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={props.image}
            alt={props.name}
            className="h-64 w-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Product Content */}
        <div className="relative p-6 bg-gradient-to-b from-transparent to-gray-50/50">
          {/* Price */}
          <motion.div
            className="flex justify-between items-start mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                ${props.price.toLocaleString()}
              </span>
              <span className="text-xs text-gray-500 font-medium">Precio final</span>
            </div>
          </motion.div>

          {/* Product Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3"
          >
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#fbbf24] transition-colors duration-300 line-clamp-2 leading-tight">
              {props.name}
            </h3>
          </motion.div>

          {/* Installments Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <div className="flex items-center gap-2 text-sm text-green-700 font-medium bg-green-50/80 px-3 py-2 rounded-xl border border-green-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>12 cuotas de ${installmentPrice}</span>
            </div>
          </motion.div>

          {/* Add to Cart Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-white font-bold py-3 px-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
            <span>Agregar al carrito</span>
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#fbbf24]/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export const MemoizedItem = React.memo(Item);
export { MemoizedItem as Item };
