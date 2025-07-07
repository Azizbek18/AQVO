'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const slides = [
    {
      id: 1,
      image: '/images/slider.jpg',
      title: 'Aqvo Brendi Haqida',
      text:'Aqvo – sifat va halollikni o‘zida mujassam etgan, innovatsion yondashuv orqali mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi brend. O‘zbekistonda birinchi bo‘lib jiz mahsulotlarini yuqori sifat va halollik tamoyillariga asoslangan holda ishlab chiqarishni yo‘lga qo‘ygan Aqvo, mijozlar ishonchini qozonib kelmoqda.'
    },
    {
      id: 2,
      image: '/images/slider2.jpg',
      title: 'Mahsulot turlari',
      text:'Aqvo brendi hozirda mol go‘shtli, tovuq go‘shtli va qo‘y go‘shtli mahsulotlar bilan iste’molchilarga xizmat ko‘rsatmoqda. Har bir mahsulotimiz o‘ziga xos yuqori sifat, yangicha ta’m va halollik tamoyillariga asoslangan holda ishlab chiqariladi. Aqvo – bu mazali va ishonchli mahsulotlarning yorqin timsoli.'
    },
    {
      id: 3,
      image: '/images/slider3.jpg',
      title: "Yetkazib berish ko'lami",
      text:'Aqvo brendi o‘z mahsulotlarini keng hududlarga yetkazib berishni tashkil etib, sifat va tezkorlikni birinchi o‘ringa qo‘yadi. Bizning yetkazib berish tarmog‘imiz orqali mahsulotlar O‘zbekistonning barcha hududlariga o‘z vaqtida yetib boradi. Aqvo – har doim sizga yaqin, har doim ishonchli.',
    },
  ];

function SliderPage() {

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
            <h2 className="text  text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[1060px] text-center uppercase leading-[110%] font-semibold z-10">
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