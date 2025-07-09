import Image from 'next/image'
import React from 'react'

function ReklamaPage() {
  return (
    <div>
        <div className="relative overflow-hidden rounded-[5px] lg:rounded-[20px] w-full h-[100px] lg:h-[210px] ">
            <Image fill className='w-full h-full object-cover ' src='/images/reklama.jpg' alt='Reklama' />  
        </div>
    </div>
  )
}

export default ReklamaPage