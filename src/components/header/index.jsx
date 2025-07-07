import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-red-800'>
        <div className="container py-[20px] mx-auto max-w-[1280px] ">
            <div className="fixed container mx-auto max-w-[1280px] top-[20px] left-0 right-0 z-50 bg-[#441118a1] py-[8px] justify-between items-center pl-[40px] pr-2 rounded-[30px] flex gap-5 backdrop-blur-md">
                <div className="flex gap-5">
                    <Link className='text text-[18px] font-[500] ' href='/'>
                    Bosh sahifa
                    </Link>

                    <Link className='text text-[18px] font-[500 ' href='/hero'>
                    Biz haqimizda
                    </Link>
                </div>
                <Link className='relative w-[90px] h-[30px] ' href='#'>
                    <Image fill className='w-[20px] h-[20px] ' src='/images/logo.png' alt='Sayt logosi' />
                </Link>
                <div className="flex items-center gap-5">
                    <p className='text-white'>UZB</p>
                    <button className='bg-[#a78861] text-white font-[600] text-[18px] w-[240px] h-[44px] rounded-[20px] '>
                        Bog'lanish
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header