import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const works = [
  { src: "/images/ANOTHER-SKY-in-NZ.jpg", title: "WORK1", link: "/topicks" },
  { src: "/images/important.png", title: "WORK2", link: "/topicks2" },
  { src: "/images/comigsoon.jpg", title: "WORK3", link: "/works/work3" },
  { src: "/images/comigsoon.jpg", title: "WORK4", link: "/works/work4" },
];

const Carousel = () => {
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
              <img
                src={work.src}
                alt={work.title}
                className="carousel-image"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
