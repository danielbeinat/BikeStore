import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { Banner } from "../../assets/BannerSlider/BannerSlider";

interface Item {
  id: number;
  image: string;
}

interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slideContents: SlideContent[] = [
  {
    id: 1,
    title: "Descubre tu próxima aventura",
    subtitle: "Bicicletas premium",
    description: "Las mejores marcas del mercado con tecnología de vanguardia",
    ctaText: "Ver colección",
    ctaLink: "/bicicletas"
  },
  {
    id: 2,
    title: "Accesorios de calidad",
    subtitle: "Todo lo que necesitas",
    description: "Equipamiento profesional para tu experiencia ciclista",
    ctaText: "Explorar accesorios",
    ctaLink: "/accesorios"
  },
  {
    id: 3,
    title: "Indumentaria deportiva",
    subtitle: "Estilo y confort",
    description: "Ropa técnica diseñada para el rendimiento máximo",
    ctaText: "Ver indumentaria",
    ctaLink: "/indumentaria"
  }
];

export const Slider: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden"
    >
      {/* Glassmorphism Container */}
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          navigation={false}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={false}
          modules={[EffectFade, Autoplay]}
          className="mySwiper h-80 sm:h-96 md:h-[420px] lg:h-[500px] xl:h-[600px]"
        >
          {Banner.map((item: Item) => {
            const content = slideContents.find(c => c.id === item.id) || slideContents[0];

            return (
              <SwiperSlide key={item.id} className="swiper-slide relative">
                {/* Background Image */}
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={`Banner ${item.id}`}
                  loading="lazy"
                />

                {/* Gradient Overlay - Lighter on mobile for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 sm:from-black/70 via-black/30 sm:via-black/40 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
                    >
                      {/* Subtitle - Hidden on mobile, visible on larger screens */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="hidden sm:inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#fbbf24]/20 backdrop-blur-sm border border-[#fbbf24]/30 rounded-full mb-3 sm:mb-4"
                      >
                        <span className="text-[#fbbf24] font-semibold text-xs sm:text-sm uppercase tracking-wide">
                          {content.subtitle}
                        </span>
                      </motion.div>

                      {/* Title - Responsive sizing */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                      >
                        {content.title}
                      </motion.h1>

                      {/* Description - Adjusted for mobile */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-sm sm:text-base lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md"
                      >
                        {content.description}
                      </motion.p>

                      {/* CTA Button - Responsive sizing */}
                      <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        href={content.ctaLink}
                        className="inline-flex items-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group text-sm sm:text-base"
                      >
                        <span className="mr-1.5 sm:mr-2">{content.ctaText}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Elements - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:block absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                <div className="hidden sm:block absolute bottom-8 left-8 w-24 h-24 bg-[#fbbf24]/10 rounded-full blur-lg"></div>
              </SwiperSlide>
            );
          })}

        </Swiper>
      </div>


      {/* Scroll Indicator - Hidden on mobile, visible on larger screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center text-white/60"
      >
        <span className="text-xs font-medium mb-2">Desplázate</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
