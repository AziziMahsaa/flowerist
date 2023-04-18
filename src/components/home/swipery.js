"use client";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Swipery() {
  return (
    <Swiper
      className="mySwiper h-[250px]"
      // install Swiper modules
      modules={[Autoplay]}
      direction={"vertical"}
      //effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}
