import AboutPage from '@/components/about'
import ContactPage from '@/components/contact'
import InforPage from '@/components/infor'
import MarquePage from '@/components/marque'
import ReklamaPage from '@/components/reklama'
import SliderPage from '@/components/slider'
import React from 'react'

function HomePage() {
  return (
    <>
      <InforPage/>
      <ReklamaPage/>
      <SliderPage/>
      <MarquePage/>
      <ContactPage/>
      <AboutPage/>
    </>
  )
}

export default HomePage