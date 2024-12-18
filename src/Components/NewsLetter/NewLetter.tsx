import React, { useState } from "react";
import { motion } from "framer-motion";

export const NewLetter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar la suscripción
    console.log("Email suscrito:", email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
          Únete a nuestra comunidad
        </h2>
        <p className="mt-6 text-xl text-purple-100 max-w-3xl mx-auto">
          Mantente al día con nuestros lanzamientos, promociones exclusivas y
          las últimas novedades. ¡No te pierdas nada!
        </p>
        <form onSubmit={handleSubmit} className="mt-10 sm:flex justify-center">
          <div className="relative rounded-full shadow-sm w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="block w-full sm:w-96 px-6 py-4 text-purple-900 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 sm:mt-0 sm:ml-4 px-8 py-4 bg-purple-500 text-white font-bold rounded-full shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-100 transition-colors duration-200"
          >
            Suscribirse
          </motion.button>
        </form>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="currentColor"
            className="text-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};
