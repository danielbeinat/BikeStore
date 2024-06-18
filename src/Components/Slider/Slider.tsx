import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Banner } from "../../assets/BannerSlider/BannerSlider";

interface Item {
  id: number;
  image: string;
}

export const Slider: React.FC = () => {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-size": "15px",
          "--swiper-pagination-fontsize": "10px",
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "13px",
          "--swiper-pagination-bullet-horizontal-gap": "5px",
          "--swiper-pagination-bullet-vertical-gap": "5px",
          "--swiper-navigation-color": "white",
        } as any
      } // Casting a 'any' para evitar el error
      spaceBetween={30}
      effect={"fade"}
      navigation={{
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      }}
      autoplay={{ delay: 5000 }}
      loop={true}
      pagination={{
        clickable: true,
        el: `.swiper-pagination`,
        bulletElement: `span`,
        bulletClass: `swiper-pagination-bullet`,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper h-40 lg:h-[500px]"
    >
      {Banner.map((item: Item) => (
        <SwiperSlide key={item.id} className="swiper-slide">
          <img
            className=" w-full h-40 lg:h-full object-cover"
            src={item.image}
            alt="Banner"
            loading="lazy"
          />
        </SwiperSlide>
      ))}

      {/* Estilos personalizados con Tailwind CSS */}
      <div className="swiper-button-next bg-gray-200 hidden lg:flex text-gray-800 h-10 w-10 p-6 rounded-lg text-xs"></div>
      <div className="swiper-button-prev bg-gray-200 hidden lg:flex text-gray-800 h-10 w-10 p-6 rounded-lg text-xs"></div>
      <div className="swiper-pagination text-white">
        <span className="swiper-pagination-bullet bg-white w-2.5 h-2.5 shadow-inner "></span>
      </div>
    </Swiper>
  );
};
