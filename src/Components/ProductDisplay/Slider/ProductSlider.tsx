import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface productprops {
  product: {
    id: number;
    image: string;
    name: string;
    price: number;
  };
}

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const ProductSlider: React.FC<productprops> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <div className="relative w-full mb-4 lg:w-1/2 lg:h-1/2 ">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as any
          }
          loop={false}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="lg:h-96 lg:w-full lg:mb-4 w-full flex items-center lg:flex-col justify-center border border-black-300 lg:border-none lg:shadow-2xl"
        >
          <SwiperSlide>
            <img className="object-cover w-full h-full" src={product.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full h-full" src={product.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full h-full" src={product.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full h-full" src={product.image} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="hidden lg:block box-border h-1/5 w-full
    "
        >
          <SwiperSlide>
            <img className="cursor-pointer" src={product.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={product.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={product.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="cursor-pointer" src={product.image} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
