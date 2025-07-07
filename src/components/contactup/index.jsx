'use client'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Xizmat turini tanlang')
  const serviceOptions = ['Mahsulot', 'Franshiza']

  const handleServiceSelect = (option) => {
    setSelectedService(option)
    setIsOpen(false)
  }

  return (
    <form className="bg-[#dd474700] text-white p-6 rounded-md space-y-6 w-full max-w-[600px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Ismingiz"
            className="w-full bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Familiyangiz"
            className="w-full bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Telefon raqamingiz"
            className="w-full bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            type="text"
            name="telegram"
            id="telegram"
            placeholder="Telegram username"
            className="w-full bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            type="text"
            name="region"
            id="region"
            placeholder="Hudud"
            className="w-full bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full border-b border-white py-2 flex justify-between items-center cursor-pointer"
          >
            <span className='text-[18px]'>{selectedService}</span>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen && (
            <div className="absolute bg-white text-black text-[18px] mt-1 w-full rounded shadow z-50">
              {serviceOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleServiceSelect(option)}
                  className="px-4 py-2 hover:bg-gray-200 text-[18px] cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Xabar */}
      <div>
        <textarea
          id="message"
          rows="4"
          placeholder="Xabar"
          className="w-full mt-2 p-2 text-[18px] bg-transparent border border-white outline-none text-white placeholder-white rounded"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mt-4"
      >
        Yuborish
      </button>
    </form>
  )
}
