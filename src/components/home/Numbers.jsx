import React from 'react'
import feedback from '../../assets/feedback.jpeg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Numbers = () => {
  return (
    <>
      <section className='number container d-flex justify-content-between'>
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,

          },
          640: {
            slidesPerView: 1,

          },
          768: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='numbers'>
            <h3>+300</h3>
            <p className='fw-bold'>Velas vendidas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='numbers'>
            <h3>+300</h3>
            <p className='fw-bold'>Feedbacks positivos</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='numbers'>
            <h3>+300</h3>
            <p className='fw-bold'>Lojas espalhadas</p>
          </div>
        </SwiperSlide>
     
      </Swiper>
      
      </section>
    </>
  )
}

export default Numbers
