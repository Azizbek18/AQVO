import AboutPage from '@/components/about';
import ReklamaPage from '@/components/reklama';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
function HeroPage() {
return (
<div className='bg-red-800'>
  <div className="container px-[20px] mx-auto pt-[80px] lg:pt-[200px] max-w-[1280px] ">
    <div className="flex relative items-center justify-center">
      <h2 className='oswald text-center px-[80px] lg:px-[5px] text-[20px] text-[white] lg:text-[40px] '>
        Aqvo - sifatli konserva mahsulotlari
      </h2>
      <div className="absolute left-4 lg:left-0 ">
        <Link href='/'>
        <FaArrowLeftLong className='text-white text-[10px] lg:text-[25px] hover:bg-orange-300 rounded-[50%] p-2 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] ' />
        </Link>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row py-[60px] gap-2 lg:gap-10">
      <div className="relative w-full lg:w-[50%] h-[300px] lg:h-auto rounded-[20px] overflow-hidden ">
        <Image fill className='w-full h-full object-cover' src='/images/background2.jpg' alt='background' />
      </div>
      <div className="w-full lg:w-[50%] ">
        <h2 className='text  lg:text-start text-[28px] text-orange-500 '>
          AQVO Jiz Mahsulotlari
        </h2>
        <h2 className='text  lg:text-start text-white text-[18px] lg:text-[28px]'>
          AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida mujassam etgan, jiz mahsulotlarini yangicha
          ta’m va zamonaviy dizaynda taqdim etuvchi yetakchi brend.
        </h2>
        <p className='text  lg:text-start text-white  mt-5 text-[18px] '>
          AQVO O‘zbekistondagi yetakchi jiz va kanserva mahsulotlari ishlab chiqaruvchi kompaniyalardan biridir. Biz
          mijozlarimizga sifat va halollikni o‘zida mujassam etgan, xalqaro talab va standartlarga javob beradigan jiz
          mahsulotlarini taqdim etishga intilamiz. Zamonaviy uskunalar va ilg‘or texnologiyalarni qo‘llagan holda,
          mahsulotlarimiz ishlab chiqarish jarayoni qat'iy sifat nazorati ostida amalga oshiriladi. Har bir AQVO jiz
          mahsuloti, uning xavfsizligi va iste’molga yaroqliligini ta'minlash uchun bir nechta sinov va tekshiruv
          bosqichlaridan o‘tkaziladi. AQVO – bu sifat, halollik va xavfsizlikning ramzi.
        </p>
      </div>
    </div>
    <div className="flex flex-col-reverse lg:flex-row py-[30px] lg:py-[60px] gap-10">
      <div className="w-full lg:w-[50%] ">
        <h2 className='text  lg:text-start text-[18px] lg:text-[28px] text-[#ffb300] '>
          AQVO
        </h2>
        <h2 className='text  lg:text-start mb-[0px] lg:mb-[100px] text-white text-[18px] lg:text-[28px]'>
          AQVO Jiz Mahsulotlari : Yangi Dizayn, Yangicha Ta’m
        </h2>
        <p className='text  lg:text-start text-white pt-[20px] lg:pt-[40px]  text-[18px] '>
          AQVO brendi jiz mahsulotlarini yangi, zamonaviy qadoq dizayni va o‘ziga xos ta’mi bilan taqdim etadi. Bizning
          mahsulotlarimiz nafaqat yuqori sifatli, balki jozibali va ekologik jihatdan toza qadoqlarda taqdim etiladi.
          Har bir paket AQVO mahsuloti o‘zining betakror ta’mi va o‘zgacha dizayni bilan mijozlarga nafaqat sifatli,
          balki vizual zavq ham taqdim etadi. </p>
      </div>
      <div className="relative w-full lg:w-[50%] h-[300px] lg:h-auto rounded-[20px] overflow-hidden ">
        <Image fill className='w-full h-full object-cover' src='/images/about.jpg' alt='background' />
      </div>
    </div>
    <ReklamaPage />
    <div className="py-4">
      <p className='text text-[18px] text-gray-200 '>
        AQVO brendi, jiz mahsulotlarini yangicha ta’m va zamonaviy qadoq dizayni bilan taqdim etadi. Mahsulotlarimiz
        yuqori sifatli, halol va xavfsiz bo‘lib, har bir qadoq o‘zining innovatsion dizayni bilan ajralib turadi.
        Bizning jiz mahsulotlarimiz xalqaro sifat standartlariga javob berib, zamonaviy texnologiyalar yordamida ishlab
        chiqariladi. Har bir mahsulot bir nechta qat'iy tekshiruvlardan o‘tkazilib, ta'mi va sifatiga kafolat beradi.
        AQVO mahsulotlari nafaqat mazali, balki dizayni va ekotexnologiyasi bilan ham mijozlarimizni qadrlashadi. Biz
        sifat va dizaynning mukammal uyg‘unligini ta’minlab, har bir iste’molchiga yuqori sifatli mahsulotlarni taqdim
        etishga intilamiz. AQVO – bu yangicha ta’m va zamonaviy dizaynni
      </p>
    </div>
    <div
      className=" container mx-auto max-w-[1280px] relative z-10 flex flex-col pt-[120px] py-[60px] justify-center h-full px-4">
      <h3 className="oswald text-[32px] text-center mb-6 text-white uppercase font-bold ">
        Bizning sertifikatlarimiz
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-[60px] pt-[15px] ">
        <div className="relative w-full h-[450px] lg:w-[300px] lg:h-[420px] ">
          <Image fill src="/images/sertifikat.png" alt='Photo' className='w-full h-full object-cover ' />
        </div>
        <div className="relative w-full h-[450px] lg:w-[300px] lg:h-[420px] ">
          <Image fill className='w-full h-full object-cover ' alt='Photo' src="/images/sertifikat2.png" />
        </div>
        <div className="relative w-full h-[450px] lg:w-[300px] lg:h-[420px] ">
          <Image fill className='w-full h-full object-cover ' alt='Photo' src="/images/sertifikat3.png" />
        </div>
        <div className="relative w-full h-[450px] lg:w-[300px] lg:h-[420px] ">
          <Image fill className='w-full h-full object-cover ' alt='Photo' src="/images/sertifikat4.png" />
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default HeroPage