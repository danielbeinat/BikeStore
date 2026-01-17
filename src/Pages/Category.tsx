import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Context, ContextValue } from "../Context/Context.jsx";
import { Item } from "../Components/Item/Item.jsx";
import { Link } from "react-router-dom";

interface propsproduct {
  Category: string;
}

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  type?: any;
}

export const Category: React.FC<propsproduct> = (props) => {
  const { AllProducts } = useContext(Context) as ContextValue;

  const [sortedProducts, setSortedProducts] = useState<Product[]>([
    ...AllProducts,
  ]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let newSortedProducts = [...AllProducts];

    switch (value) {
      case "Menor a Mayor":
        newSortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Mayor a Menor":
        newSortedProducts.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    setSortedProducts(newSortedProducts);
  };

  return (
    <>
      <div className="font-poppins mt-10 px-4 lg:px-5">
        <div className="flex flex-col gap-8 lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-10">
          {/* Breadcrumbs Mejorado */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 shadow-lg hover:bg-white/70 transition-all duration-300"
          >
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-[#fbbf24] transition-colors duration-200 flex items-center gap-1"
              onClick={() => window.scrollTo(0, 0)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Inicio
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-sm font-semibold text-[#fbbf24] capitalize">{props.Category}</span>
          </motion.div>

          {/* Selector de Orden Mejorado */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col lg:flex-row lg:items-center items-start gap-3"
          >
            <span className="text-sm font-medium text-gray-700">Ordenar por:</span>

            <div className="relative">
              <select
                className="appearance-none bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl px-4 py-2.5 pr-8 text-sm font-medium text-gray-700 shadow-lg hover:bg-white/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#fbbf24]/50 focus:border-[#fbbf24] transition-all duration-300 cursor-pointer min-w-[200px] sm:min-w-[240px]"
                id="sort"
                name="sort"
                onChange={handleSortChange}
              >
                <option value="Menor a Mayor">
                  💰 Precio: Menor a Mayor
                </option>
                <option value="Mayor a Menor">
                  💰 Precio: Mayor a Menor
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:place-items-center mt-20">
          {sortedProducts.map((product, i) => {
            if (product.category === props.Category) {
              return (
                <Item
                  key={i}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  type={product.type}
                />
              );
            } else {
              return null;
            }
          })}
        </section>
        <div className="flex justify-center py-10">
          <button
            className="color-white bg-black hover:bg-gray-700 text-white mt-10 font-bold py-2 px-10 rounded"
            type="button"
          >
            Ver mas
          </button>
        </div>
      </div>
    </>
  );
};
