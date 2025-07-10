'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

function MarquePage() {
const {t} = useTranslation()
const imageList = [...Array(2)].flatMap(() => [
"marque1.jpg",
"marque2.jpg",
"marque3.jpg",
"marque4.jpg",
"marque5.jpg",
"marque6.jpg",
"marque7.jpg",
"marque8.jpg",
"marque9.jpg",
"marque10.jpg",
"marque11.jpg",
]);

const ImageList = [...Array(2)].flatMap(() => [
"mar1.jpg",
"mar2.jpg",
"mar3.jpg",
"mar4.jpg",
"mar5.jpg",
"mar6.jpg",
"mar7.jpg",
"mar8.jpg",
"mar9.jpg",
]);



return (
<div className='bg-red-800'>
    <div className="container flex px-[20px] flex-col lg:flex-row  justify-between relative h-[250px]   mx-auto max-w-[1280px] ">
        <div className="flex items-center">
            <h2 className='text-[25px] mt-[20px]  text-white sm:text-[32px] max-w-[400px]  '>
                {t("marqueTitle")}
            </h2>
            <div className="absolute  left-[280px] top-[80px] lg:left-[280px] lg:top-[150px] ">
                <img className='w-[80px] sm:w-[200px] h-auto' src="/images/logo.png" alt="Sayt logosi" />
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
            <Link className='text-white text text-[16px] border-2  rounded-[30px] px-[15px] py-[4px] lg:px-[20px] lg:py-[8px] '
                href="https://www.instagram.com/aqvo_jir/" target='_blank'>
                {t("marqueLink1")}
            </Link>
            <Link href="https://www.telegram.com/aqvo_jir/" className='text-white text text-[16px] border-2 rounded-[30px] px-[15px] py-[4px] lg:px-[20px] lg:py-[8px]' 
                target='_blank'>
                {t("marqueLink2")}
            </Link>
        </div>
    </div>
    <div className="flex flex-col py-[80px] gap-[20px] ">
        <div className="w-full overflow-hidden">
            <div className="animate-marquee flex gap-6 min-w-max">
                {
                imageList.map((img, idx) => (
                <img key={idx} src={`/images/${img}`}
                    className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover shrink-0 rounded-[20px]" />
                ))
                }
            </div>
        </div>
        <div className="w-full overflow-hidden">
            <div className="animate flex gap-6 min-w-max">
            {
                imageList.map((img, idx) => (
                <img key={idx} src={`/images/${img}`}
                    className="w-[150px] ss:w-[170px] sm:w-[200px] lg:w-[220px] h-[150px] ss:h-[170px] sm:h-[200px] lg:h-[220px] object-cover shrink-0 rounded-[20px]" />
                ))
            }
            </div>
        </div>
    </div>
</div>
)
}

export default MarquePage