import { Secure } from "../../assets/securepurchase-resources/securepurchase-resources";
import { motion } from "framer-motion";
import { Truck, CreditCard, Package } from "lucide-react";

interface Item {
  icon: string;
  title: string;
  description: string;
}

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  Truck,
  CreditCard,
  Package,
};

export const SecurePurchase: React.FC = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden scroll-mt-40">
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Compra con
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
              {" "}
              total confianza
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Disfrutá de una experiencia de compra segura con beneficios
            exclusivos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {Secure.map((item: Item, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full flex flex-col items-center text-center group-hover:bg-white/90">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6 p-4 bg-gradient-to-br from-[#fbbf24]/20 to-[#f59e0b]/20 rounded-2xl border border-white/30 group-hover:from-[#fbbf24]/30 group-hover:to-[#f59e0b]/30 transition-all duration-300"
                >
                  {iconMap[item.icon] &&
                    (() => {
                      const IconComponent = iconMap[item.icon];
                      return (
                        <IconComponent className="w-16 h-16 text-[#fbbf24] group-hover:text-[#f59e0b] transition-colors duration-300" />
                      );
                    })()}
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#fbbf24]/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fbbf24]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#fbbf24]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl border border-white/30 px-6 py-3 shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              Compra 100% segura garantizada
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
