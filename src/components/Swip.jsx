// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, FreeMode} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "../styles/styles-swip.css";


export default function App() {
  return (
    <>
      <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,

          },
        }}
        loop={true}
        freeMode={true}
        modules={[Autoplay, FreeMode, Pagination, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="/blog/beethoven/">
            <img src="Beethoven.jpg" className="block m-auto"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="mozart.jpg" className="block m-auto"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="chopin.jpg" className="block m-auto"/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="bach.jpg" className="block m-auto"/>
          </a>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
