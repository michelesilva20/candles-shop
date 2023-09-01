import React from 'react'
import feedback from '../../assets/feedback.jpeg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Feedback = () => {
  return (
    <>
      <section className="container d-flex flex-wrap justify-content-between">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
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
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='card-feedback d-flex justify-content-center flex-column'>
            <div className='d-flex align-items-center'>
              <img src={feedback} alt="avatar" />
              <div className='ms-3'>
                <p className='name'>Aline de Castro</p>
                <p className='age'>26 anos</p>
                <div className='d-flex'>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-feedback d-flex justify-content-center flex-column'>
            <div className='d-flex align-items-center'>
              <img src={feedback} alt="avatar" />
              <div className='ms-3'>
                <p className='name'>Aline de Castro</p>
                <p className='age'>26 anos</p>
                <div className='d-flex'>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-feedback d-flex justify-content-center flex-column'>
            <div className='d-flex align-items-center'>
              <img src={feedback} alt="avatar" />
              <div className='ms-3'>
                <p className='name'>Aline de Castro</p>
                <p className='age'>26 anos</p>
                <div className='d-flex'>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card-feedback d-flex justify-content-center flex-column'>
            <div className='d-flex align-items-center'>
              <img src={feedback} alt="avatar" />
              <div className='ms-3'>
                <p className='name'>Aline de Castro</p>
                <p className='age'>26 anos</p>
                <div className='d-flex'>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                  <i class='bx bxs-star'></i>
                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </SwiperSlide>

        
      </Swiper>
      
        
      </section>
    </>
  )
}

export default Feedback
