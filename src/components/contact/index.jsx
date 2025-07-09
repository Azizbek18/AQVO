import Link from 'next/link'
import React from 'react'
import ContactForm from '../contactup'

function ContactPage() {
return (
<div className="relative w-full h-auto lg:h-[600px]">
    <div className="absolute inset-0 z-0">
        <img src="/images/background.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
    </div>

    <div className="relative z-10  flex flex-col lg:flex-row items-center container justify-between mx-auto max-w-[1280px] px-[20px] lg:px-4 py-[30px] lg:py-20">
        <div className="w-full lg:w-[42%] flex flex-col gap-2 ">
            <h3 className="oswald text-[16px] lg:text-[32px] text-[white] uppercase font-[500]  mb-[10px] ">
                "AQVO" bilan yangicha ta’mni his eting.
            </h3>
            <p className=" text text-[12px] lg:text-[18px] text-gray-200 max-w-[800px] mb-2">
                Aqvo brendi sizni yangi ta'mlarni kashf etishga taklif qiladi. Bizning
                mahsulotlarimiz har bir iste’molchiga sifatli va innovatsion
                yondashuv orqali yangi, o‘ziga xos ta’mni taqdim etadi. Aqvo – bu
                nafaqat ta’m, balki sog‘lom va halol mahsulotlar bilan yangi
                tajribani his qilish imkoniyati. Yangi ta’mni biz bilan birga kashf
                eting va haqiqiy sifatni his eting!
            </p>
            <p className="text text-[12px] lg:text-[18px] text-white mb-2">Bog‘lanish uchun telefon raqamlarimiz:</p>
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