import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
function Footer() {
  return (
    <div className='bg-red-800' >
        <div className="container py-[80px] flex flex-col gap-4 justify-center items-center mx-auto max-w-[1280px] ">
            <p className='text-white poppins text-[20px] text-center lg:px-[400px] '>
            Siz izlagan ta'm, sifat, poklik va o‘zgachalik... Barchasi bir nuqtada jamlanib, “Aqvo”'ga aylanadi!
            </p>
            <div className="flex gap-2 ">
              <Link target='_blanck' href='https://www.instagram.com/'>
              <FaInstagram className='text-[#cbcbcb] w-[20px] h-[20px] '/>
              </Link>
              <Link target='_blanck' href='https://www.telegram.com/'>
              <LiaTelegramPlane className='text-[#cbcbcb] w-[20px] h-[20px] ' />
              </Link>
            </div>
            <p className='text-white text-[20px] poppins '>
            © Barcha huquqlar himoyalangan
            </p>
        </div>
    </div>
  )
}

export default Footer