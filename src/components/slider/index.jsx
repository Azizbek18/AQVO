'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';



function SliderPage() {
  const {t} = useTranslation()
  const slides = [
      {
        id: 1,
        image: '/images/slider.jpg',
        title: t("sliderTitle1"),
        text:t("sliderText1")
      },
      {
        id: 2,
        image: '/images/slider2.jpg',
        title: t("sliderTitle2"),
        text:t("sliderText2")
      },
      {
        id: 3,
        image: '/images/slider3.jpg',
        title: t("sliderTitle3"),
        text:t("sliderText3"),
      },
    ];
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000); 
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${slide.id}`}
            layout="fill"
            objectFit="cover"
            className='w-full h-full object-cover '
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h2 className="box mb-4  text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[1000px] text-center uppercase leading-[110%] font-semibold z-10">
              {slide.title}
            </h2>
            <p className='text-white text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center z-10'>
            {slide.text}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-red-600' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default SliderPage