'use client'
import React, { useState } from 'react'
import ContactModal from '../modal'
import { useTranslation } from 'react-i18next';

function InforPage() {
    const [open,setOpen] = useState(false);
    const { t } = useTranslation()
return (
<div className='bg-red-800'>
    <div className="pt-[150px] bg-red-800 overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee animate-delay-[1s]">
            <p className="oswald text-[12vw] uppercase text-white font-medium mr-4">
                {t("infortext1")}
            </p>
            <p className="oswald text-[12vw] uppercase text-white font-medium mr-4">
                {t("infortext1")}            
            </p>
        </div>
    </div>

    <div className="container px-[20px] mx-auto max-w-[1280px] ">
        <div className="flex flex-col lg:flex-row justify-between gap-[30px]  py-[60px] items-center ">
            <p className='text text-white w-full text-center lg:text-start lg:w-[400px] text-[20px] '>
            {t("infortext2")}
            </p>
            <div className="border-2  border-[#9e9e9e] p-1 rounded-[50%]">
                <div className="w-[160px] h-[160px] bg-red-950 p-[25px] rounded-[50%] relative overflow-hidden group">
                    <img className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                        src="/images/logoImg.png" alt="Logo" />
                    <div
                        onClick={()=>setOpen(true)}
                        className="absolute inset-0 flex items-center bg-[#a78861] justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-[20px] font-semibold">{t("inforButton")}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ContactModal isOpen={open} onClose={()=>setOpen(false)} />
</div>
)
}
export default InforPage