import React from "react";
import { motion } from "framer-motion";
import { Bike } from "../../assets/BikeBrands/BikeBrands";

interface Item {
  id: number;
  img: string;
}

export const Brands: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br font-poppins from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestras Marcas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {Bike.map((item: Item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                className="w-full h-auto max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                src={item.img}
                alt={`Brand ${item.id}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
