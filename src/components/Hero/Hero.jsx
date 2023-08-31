import React from 'react';
import { HeroCard, LinkTo } from './Hero.styled';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const Hero = ({ movies }) => {
  const baseURL = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {movies.map(({ backdrop_path, name, id }) => {
          return (
            <SwiperSlide key={id}>
              <LinkTo to={`/movies/${id}`}>
                <HeroCard src={baseURL + backdrop_path} alt={name}></HeroCard>
              </LinkTo>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
