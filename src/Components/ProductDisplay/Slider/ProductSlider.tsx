import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

interface productprops {
  product: {
    id: number;
    image: string;
    name: string;
    price: number;
  };
}

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

export const ProductSlider: React.FC<productprops> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Simular múltiples imágenes del producto
  const productImages = [
    { id: 1, src: product.image, alt: `${product.name} - Vista principal` },
    { id: 2, src: product.image, alt: `${product.name} - Vista lateral` },
    { id: 3, src: product.image, alt: `${product.name} - Vista trasera` },
    { id: 4, src: product.image, alt: `${product.name} - Detalle` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full lg:w-1/2"
    >
      {/* Main Image Slider */}
      <div className="relative mb-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg border border-gray-200/50">
        <Swiper
          onSwiper={setThumbsSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          style={
            {
              "--swiper-pagination-color": "#fbbf24",
              "--swiper-pagination-bullet-inactive-color": "#d1d5db",
              "--swiper-pagination-bullet-size": "8px",
            } as any
          }
          loop={false}
          spaceBetween={0}
          pagination={{
            clickable: true,
            el: '.product-pagination-mobile',
            dynamicBullets: true,
          }}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="h-80 sm:h-96 lg:h-80 xl:h-96"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={image.id}>
              <motion.div
                className="relative w-full h-80 sm:h-96 lg:h-80 xl:h-96 bg-gray-50 flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image indicator */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                  {index + 1}/{productImages.length}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Pagination */}
        <div className="product-pagination-mobile absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 lg:hidden"></div>
      </div>

      {/* Thumbnail Slider */}
      <div className="relative">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-16"
          breakpoints={{
            320: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={`thumb-${image.id}`}>
              <motion.div
                className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 bg-white ${
                  activeIndex === index
                    ? 'border-[#fbbf24] shadow-lg ring-2 ring-[#fbbf24]/20'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-16 object-contain bg-gray-50"
                />
                {/* Active indicator */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-[#fbbf24]/10 border-2 border-[#fbbf24] rounded-lg"
                  >
                    <div className="absolute top-1 right-1 w-2 h-2 bg-[#fbbf24] rounded-full"></div>
                  </motion.div>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Image Counter - Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="hidden lg:flex justify-center mt-3"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full border border-gray-200">
          <span className="text-sm text-gray-600 font-medium">
            {activeIndex + 1} de {productImages.length}
          </span>
          <div className="flex gap-1">
            {productImages.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8 }}
                animate={{ scale: activeIndex === index ? 1.2 : 1 }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-[#fbbf24]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
