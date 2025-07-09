import AboutPage from '@/components/about'
import ContactPage from '@/components/contact'
import InforPage from '@/components/infor'
import MarquePage from '@/components/marque'
import ReklamaPage from '@/components/reklama'
import SliderPage from '@/components/slider'
import React from 'react'
import { ToastContainer } from 'react-toastify'
  
function HomePage() {
  return (
    <>
      <InforPage/>
      <ReklamaPage/>
      <SliderPage/>
      <MarquePage/>
      <ContactPage/>
      <AboutPage/>
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  )
}

export default HomePage