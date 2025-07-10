'use client'
import Link from 'next/link'
import React from 'react'
import ContactForm from '../contactup'
import { useTranslation } from 'react-i18next'

const  ContactPage = () => {
const {t} = useTranslation()
return (
<div className="relative w-full h-auto lg:h-[600px]">
    <div className="absolute inset-0 z-0">
        <img src="/images/background.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
    </div>

    <div className="relative z-10  flex flex-col lg:flex-row items-center container justify-between mx-auto max-w-[1280px] px-[20px] lg:px-4 py-[30px] lg:py-20">
        <div className="w-full lg:w-[42%] flex flex-col gap-2 ">
            <h3 className="oswald text-[16px] lg:text-[32px] text-[white] uppercase font-[500]  mb-[10px] ">
                {t("contactTitle")}
            </h3>
            <p className=" text text-[12px] lg:text-[18px] text-gray-200 max-w-[800px] mb-2">
                {t("contactText")}
            </p>
            <p className="text text-[12px] lg:text-[18px] text-white mb-2">{t("contactText2")}</p>
            <div className="flex flex-col gap-1 text-white text-[15px]">
                <Link className=' text text-[12px] lg:text-[18px] ' href="tel:+998957724444">Tel: +998 95 772 44 44</Link>
                <Link className='text text-[12px] lg:text-[18px] '  href="tel:+998996440101">Tel: +998 99 644 01 01</Link>
            </div>
        </div>
        <div className="w-full lg:w-[45%] ">
            <ContactForm/>
        </div>
    </div>
</div>
)
}

export default ContactPage