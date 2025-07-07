import React from 'react'
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
function Footer() {
  return (
    <div className='bg-red-800' >
        <div className="container py-[80px] flex flex-col gap-4 justify-center items-center mx-auto max-w-[1280px] ">
            <p className='text-white poppins text-[20px] text-center px-[400px] '>
            Siz izlagan ta'm, sifat, poklik va o‘zgachalik... Barchasi bir nuqtada jamlanib, “Aqvo”'ga aylanadi!
            </p>
            <div className="flex gap-2 ">
                <FaInstagram className='text-[#cbcbcb] w-[20px] h-[20px] '/>
                <LiaTelegramPlane className='text-[#cbcbcb] w-[20px] h-[20px] ' />
            </div>
            <p className='text-white'>
            © Barcha huquqlar himoyalangan
            </p>
        </div>
    </div>
  )
}

export default Footer