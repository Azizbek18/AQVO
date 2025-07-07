import Image from 'next/image'
import React from 'react'

function InforPage() {
return (
<div className='bg-red-800'>
    <div className="pt-[150px] bg-red-800 ">
        <marquee behavior="" direction="">
            <p className='oswald text-[12vw] uppercase text-white  font-medium mr-4'>
                Tabiiy mahsulotlar! Sifat va ishonch!
            </p>
        </marquee>
    </div>
    <div className="container mx-auto max-w-[1280px] ">
        <div className="flex justify-between  py-[60px] items-center ">
            <p className='text w-[300px] text-[18px] '>
                AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida mujassam etgan, jiz mahsulotlarini
                yangicha ta’m va zamonaviy dizaynda taqdim etuvchi yetakchi brend.
            </p>
            <div className="border-2  border-[#9e9e9e] p-1 rounded-[50%]">
                <div className="w-[160px] h-[160px] bg-red-950 p-[25px] rounded-[50%] relative overflow-hidden group">
                    <img className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                        src="/images/logoImg.png" alt="Logo" />
                    <div
                        className="absolute inset-0 flex items-center bg-[#a78861] justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-[20px] font-semibold">Buyurtma</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default InforPage