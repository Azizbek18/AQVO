import Image from 'next/image'
import React from 'react'

function ReklamaPage() {
  return (
    <div>
        <div className="relative w-full h-[250px] ">
            <Image fill src='/images/reklama.jpg' alt='Reklama' />  
        </div>
    </div>
  )
}

export default ReklamaPage