import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Slider = () => {

    return (
        <div className='mb-9 z-0 container mx-auto'>

            <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={50}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true}}
                 onSwiper={(swiper) => console.log(swiper)}
                 onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img className='w-full h-[30rem]' src="https://i.ibb.co/PDXjdgd/istockphoto-157612839-1024x1024.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[30rem]' src="https://i.ibb.co/ChdCqDW/istockphoto-1487450655-1024x1024.jpg" alt=""  />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[30rem]' src="https://i.ibb.co/VgHF8R9/istockphoto-543319020-1024x1024.jpg" alt=""  />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[30rem]' src="https://i.ibb.co/b2vk7Y0/istockphoto-1390998235-1024x1024.jpg" alt=""  />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Slider;