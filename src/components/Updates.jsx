import React from 'react';
import DecryptedText from './DecryptedText';
// 1. Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// 2. Import Swiper basic styles for functionality
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Updates1 from '../assets/Updates1.jpg';
import Updates2 from '../assets/Updates2.jpg';
import Updates3 from '../assets/Updates3.jpg';
import Updates4 from '../assets/Updates4.jpg';


// Original array of images
const placeholderImages = [
  Updates4,
  Updates3,
  Updates2,
  Updates1
];

// UPDATED: Create a new array with the images duplicated
// This provides enough slides for the loop to work correctly.
const allImages = [...placeholderImages, ...placeholderImages];


const Updates = () => {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden bg-[#1a052d] pt-12">
      
      <style>{`
        .swiper-slide {
          transition: filter 0.4s ease, transform 0.4s ease;
          filter: blur(5px);
        }
        .swiper-slide-active {
          filter: blur(0px);
        }
      `}</style>

      <h1 className="text-5xl font-bold text-white mb-10 drop-shadow-[0_0_10px_#a78bfa]">
        <DecryptedText
          text="UPDATES"
          animateOn="view"
          revealDirection="center"
          speed={120}
          maxIterations={12}
        />
      </h1>
      
      {/* Glassmorphism panes */}
      <div className="absolute left-[15%] top-[10%] h-[600px] w-[400px] -rotate-15 rounded-3xl border border-violet-500/10 bg-violet-500/5 backdrop-blur-xl -z-10"></div>
      <div className="absolute bottom-[5%] right-[10%] h-[500px] w-[700px] rotate-20 rounded-3xl border border-violet-500/10 bg-violet-500/5 backdrop-blur-xl -z-10"></div>

      {/* Swiper Carousel */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#FFFFFF',
          '--swiper-pagination-color': '#FFFFFF',
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        // You can often remove loopAdditionalSlides when duplicating the array, but it's fine to leave it.
        loopAdditionalSlides={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full max-w-6xl"
      >
        {/* UPDATED: Map over the new 'allImages' array */}
        {allImages.map((src, index) => (
          <SwiperSlide 
            key={index} 
            className="!w-[320px] !h-[320px] md:!w-[400px] md:!h-[400px] rounded-2xl overflow-hidden bg-[#2a0e4f] shadow-2xl shadow-black/30"
          >
            <img 
              src={src} 
              alt={`Event Poster ${index + 1}`} 
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Updates;