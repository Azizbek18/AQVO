'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { toast} from 'react-toastify'

export default function ContactForm() {
  const {t} = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  useEffect(() => {
    setSelectedService(t("contact6"))
  }, [t])
  const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm("Xizmat turini tanlang")
  const serviceOptions = ['Mahsulot', 'Franshiza']
  

  const handleServiceSelect = (option) => {
    setSelectedService(option)
    setValue('service',option)
    setIsOpen(false)
  }
  const sentMessage = async (data) => {
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
      await axios.post(`https://api.telegram.org/bot${bot_token}/sendMessage`,{
          chat_id:chat_id,
          text:message,
        })
        toast.success("Ma'lumotlar muvaffaqiyatli yuborildi.");
        reset()
      }
      catch(error){
      toast.error("Ma'lumotlar yuborilmadi.")
    }
  } 

  return (
    <form onSubmit={handleSubmit(sentMessage)} className="bg-[#dd474700] text-white py-6 rounded-md space-y-6 w-full max-w-[600px] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("firstName")}
            type="text"
            name="firstName"
            id="firstName"
            placeholder={t("contact1")}
            className="w-full bg-transparent text text-[12px] lg:text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            {...register("lastName")}
            type="text"
            name="lastName"
            id="lastName"
            placeholder={t("contact2")}
            className="w-full bg-transparent text text-[12px] lg:text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            {...register("phoneNumber")}
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder={t("contact3")}
            className="w-full bg-transparent text text-[12px] lg:text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            {...register("telegram")}
            type="text"
            name="telegram"
            id="telegram"
            placeholder={t("contact4")}
            className="w-full bg-transparent text text-[12px] lg:text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div>
          <input
            {...register("region")}
            type="text"
            name="region"
            id="region"
            placeholder={t("contact5")}
            className="w-full bg-transparent text text-[12px] lg:text-[18px] border-b border-white outline-none py-2 placeholder-white"
          />
        </div>

        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full border-b border-white py-2 flex justify-between items-center cursor-pointer"
          >
            <span className='text-[12px] lg:text-[18px]'>{selectedService}</span>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen && (
            <div className="absolute bg-white text-black text-[12px] lg:text-[18px] mt-1 w-full rounded shadow z-50">
              {serviceOptions.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleServiceSelect(option)}
                  className="px-4 py-2 hover:bg-gray-200 text-[12px] lg:text-[18px] cursor-pointer"
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
          {...register("messages")}
          id="messages"
          placeholder={t("contact7")}
          className="w-full mt-2 h-[80px] lg:h-[100px] p-2 text-[12px] lg:text-[18px] bg-transparent border border-white outline-none text-white placeholder-white rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded  lg:mt-4"
      >
       {t("contactButton")}
      </button>
    </form>
  )
}
