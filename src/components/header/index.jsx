'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ContactModal from '../modal'
import { FaChevronDown, FaTimes } from 'react-icons/fa'

const services = ['Ru', 'En', 'Uz']

function Header() {
const [open, setOpen] = useState(false)
const [selected, setSelected] = useState('UZ')
const [isOpen, setIsOpen] = useState(false)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const toggleDropdown = () => setIsOpen(!isOpen)
const handleSelect = (service) => {
setSelected(service)
setIsOpen(false)
}

return (
<div className='bg-red-800'>
  <div className="container px-[20px]  py-[20px] mx-auto max-w-[1280px]">
    <div
      className="fixed mx-[20px] lg:mx-auto top-[20px] max-w-[1280px] left-0 right-0 z-50 bg-[#441118a1] py-[8px] justify-between items-center pl-[20px] pr-[20px] lg:pl-[40px] lg:pr-2 rounded-[30px] flex gap-5 backdrop-blur-md">
      <div className="hidden lg:flex gap-5">
        <Link className='text-white text-[18px] font-[500]' href='/'>
        Bosh sahifa
        </Link>
        <Link className='text-white text-[18px] font-[500]' href='/hero'>
        Biz haqimizda
        </Link>
      </div>
      <Link className='relative w-[90px] h-[30px]' href='#'>
      <Image fill className='object-contain' src='/images/logo.png' alt='Sayt logosi' />
      </Link>

      <div className="hidden lg:flex items-center gap-2">
        <div className="relative w-full max-w-[80px] mx-auto">
          <button onClick={toggleDropdown}
            className="w-full flex items-center justify-between rounded-xl px-4 py-1 bg-[#710f1ca1] backdrop-blur-md text-white focus:outline-none transition">
            <span className='font-bold text-[16px]'>{selected}</span>
            <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : '' }`} />
          </button>

          {isOpen && (
          <ul
            className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md max-h-[300px] overflow-y-auto animate-fadeIn">
            {services.map((service, index) => (
            <li key={index} onClick={()=> handleSelect(service)}
              className="px-3 py-2 font-bold text-[16px] cursor-pointer hover:bg-blue-100 text-gray-800 transition"
              >
              {service}
            </li>
            ))}
          </ul>
          )}
        </div>
        <button onClick={()=> setOpen(true)}
          className='hidden lg:flex justify-center items-center bg-[#a78861] text-white font-[600] text-[18px] w-[150px]
          lg:w-[240px] h-[44px] rounded-[20px]'
          >
          Bog'lanish
        </button>
      </div>
      <div onClick={()=> setMobileMenuOpen(true)} className="flex lg:hidden flex-col gap-1.5 cursor-pointer">
        <div className="w-[30px] h-[4px] rounded-[20px] bg-white" />
        <div className="w-[30px] h-[4px] rounded-[20px] bg-white" />
        <div className="w-[30px] h-[4px] rounded-[20px] bg-white" />
      </div>
    </div>
    <ContactModal isOpen={open} onClose={()=> setOpen(false)} />
      {/* Burger menyu backdrop va menyusi */}
      <div className={` fixed inset-0 z-[100] backdrop-blur-sm transition-all duration-500 ${mobileMenuOpen
        ? 'bg-[#00000080] opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' } `}>
        <div className={` fixed top-0 right-0 w-[75%] max-w-[300px] h-full bg-white shadow-xl px-6 py-6 z-[101]
          transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0'
          : 'translate-x-full' } `}>
          {/* Menyu ichidagi kontent */}
          <div className="flex justify-between items-center mb-6">
            <Link className='relative w-[90px] h-[30px]' href='#'>
            <Image fill className='object-contain' src='/images/logo.png' alt='Sayt logosi' />
            </Link>
            <FaTimes className="text-xl text-red-500 cursor-pointer" onClick={()=> setMobileMenuOpen(false)} />
          </div>

          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={()=> setMobileMenuOpen(false)} className="text-red-500 text-[18px] font-[500]">
            Bosh sahifa
            </Link>
            <Link href="/hero" onClick={()=> setMobileMenuOpen(false)} className="text-red-500 text-[18px] font-[500]">
            Biz haqimizda
            </Link>
            <div className="flex gap-3 justify-between pt-4">
              {services.map((lang, i) => (
              <button key={i} onClick={()=> {
                handleSelect(lang)
                setMobileMenuOpen(false)
                }}
                className={`w-full flex border-2 border-red-500 text-red-500 oswald justify-center text-left py-1 px-2
                rounded-[30px] hover:bg-gray-200 ${selected === lang ? 'bg-gray-200' : ''}`}
                >
                {lang}
              </button>
              ))}
            </div>
            <button onClick={()=> {
              setOpen(true)
              setMobileMenuOpen(false)
              }}
              className="mt-4 bg-[#a78861] text-white py-2 px-4 rounded-[10px] text-[16px] font-semibold"
              >
              Bog'lanish
            </button>
          </nav>
        </div>
      </div>

  </div>
</div>
)
}

export default Header