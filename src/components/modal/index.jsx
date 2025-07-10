'use client'
import axios from 'axios';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { toast} from 'react-toastify';

export default function ContactModal({ isOpen, onClose }) {
  const [selectedService, setSelectedService] = useState("Xizmat turini tanlang")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {register,handleSubmit,setValue,reset,formState:{errors}} = useForm();
  const {t} = useTranslation()
  const serviceOptions = ["Mahsulot", "Franshiza"]

  const handleServiceSelect = (option) => {
    setSelectedService(option)
    setValue('service',option)
    setIsDropdownOpen(false)
  }

  const onSubmit = async(data) => {
    const bot_token = "7943597300:AAFmoP21ccZg2BCipSCC_9HfTFq9uXM67Vw";
    const chat_id = 6380977575;
    const message = `📥 Yangi ariza:
            👤 Ism: ${data.firstName}
            👥 Familiya: ${data.lastName}
            📱 Telefon: ${data.phoneNumber}
            📍 Hudud: ${data.region}
            ✈️ Telegram: ${data.telegram}
            🛠 Xizmat turi: ${data.service}
            📝 Xabar: ${data.messages} `

    try{
        await axios.post(`https://api.telegram.org/bot${bot_token}/sendMessage`,
           {
            chat_id:chat_id,
            text:message,
           }
        )
      toast.success("Ma'lumotlar muvaffaqiyatli yuborildi.")
      reset()
      onClose()
    }
    catch(error){
      toast.error("Ma'lumotlar yuborilmadi.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex  justify-center items-center px-4">
      <div className="bg-red-800 text-white p-6 py-[40px] rounded-md space-y-6 shadow-[0_20px_30px_-10px_rgba(255,255,255,0.4)] w-full max-w-[550px] relative">
        <div className="absolute flex justify-center rounded-[50%] items-center pb-1 w-[22px] h-[22px] top-3 right-5 border-2">
            <button
            onClick={onClose}
            className=" text-white pt-[1px] text-[20px] font-[400] "
            >
            &times;
            </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6">
            <input
                {...register('firstName')}
              type="text"
              name="firstName"
              placeholder="Ismingiz"
              className="w-full text bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
            />
            <input
                {...register('lastName')}
              type="text"
              name="lastName"
              placeholder="Familiyangiz"
              className="w-full text bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
            />
            <input
                {...register('phoneNumber')}
              type="tel"
              name="phoneNumber"
              placeholder="Telefon raqamingiz"
              className="w-full text bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
            />
            <input
                {...register('telegram')}
              type="text"
              name="telegram"
              placeholder="Telegram username"
              className="w-full text bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
            />
            <input
                {...register('region')}
              type="text"
              name="region"
              placeholder="Hudud"
              className="w-full text bg-transparent text-[18px] border-b border-white outline-none py-2 placeholder-white"
            />

            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text border-b border-white py-2 flex justify-between items-center cursor-pointer"
              >
                <span className="text-[18px]">{selectedService}</span>
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isDropdownOpen && (
                <div className="absolute text bg-white text-black text-[18px] mt-1 w-full rounded shadow z-50">
                  {serviceOptions.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleServiceSelect(option)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            <input type="hidden"  {...register("service", { required: true })}/>
            </div>
          </div>

          <div>
            <textarea
                {...register('messages')}
              placeholder="Xabar"
              className="w-full h-[80px] lg:100px text mt-[30px] lg:mt-[60px] p-2 text-[18px] bg-transparent border border-white outline-none text-white placeholder-white rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full  bg-orange-400 hover:bg-orange-500 text text-[20px] text-white py-2 rounded-[10px] mt-8"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  )
}
