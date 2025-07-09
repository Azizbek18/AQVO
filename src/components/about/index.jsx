import Image from 'next/image'
import React from 'react'

function AboutPage() {
  return (
    <div className="relative w-full h-auto lg:h-[700px]">

      <div className="absolute inset-0 z-0">
        <img src="/images/background2.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className=" container mx-auto px-[20px] max-w-[1280px] relative z-10 flex flex-col pt-[120px] py-[10px] lg:py-[60px] justify-center h-full lg:px-4">
        <h3 className="text-[32px] text-center text-white uppercase font-bold poppins">
          Bizning sertifikatlarimiz
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pb-[60px] pt-[15px] ">
            <div className="relative w-full h-[450px] lg:w-[300px] lg:h-[420px] ">
                <Image fill src="/images/sertifikat.png" alt='Photo' className='w-full h-full object-cover '  />
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
  )
}

export default AboutPage
