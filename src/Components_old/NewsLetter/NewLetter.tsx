"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const NewLetter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar la suscripción al newsletter
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Main content container with glassmorphism */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              🔔 <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                Únete a nuestra comunidad
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mantente al día con nuestros lanzamientos, promociones exclusivas y
              las últimas novedades del mundo del ciclismo. ¡No te pierdas nada!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto"
          >
            <div className="relative w-full sm:flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent transition-all duration-300"
                required
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/10 to-[#f59e0b]/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black font-bold rounded-2xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 whitespace-nowrap"
            >
              🚀 Suscribirse
            </motion.button>
          </motion.form>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Sin spam</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Cancelación fácil</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse"></div>
              <span>Contenido exclusivo</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#fbbf24]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>
    </section>
  );
};
