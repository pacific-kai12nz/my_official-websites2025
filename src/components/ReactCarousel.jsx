import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ lang = 'ja' }) => {
  const works = [
    { src: "/images/topicks1.png", title: "WORK1", link: "/topicks" },
    { src: lang === 'en' ? "/images/create-banner-en.jpeg" : "/images/create-banner-jp.jpeg", title: "WORK2", link: lang === 'en' ? "/en/topicks2" : "/topicks2" },
    { src: "/images/topicks3.png", title: "WORK3", link: lang === 'en' ? "/en/topicks3" : "/topicks3" },
    { src: "/images/comigsoon.jpg", title: "WORK4", link: "" },
  ];
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        loopAdditionalSlides={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <a href={work.link}>
              <img src={work.src} alt={work.title} className="carousel-image" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
