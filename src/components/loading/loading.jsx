'use client'
import React, { useEffect, useState } from 'react'

function LoadingPage({children}) {
    const [loading, setloading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setloading(false)
        },2000)
        return ()=> clearTimeout(timer)
    },[])
    if (loading) {
        return (
        <div className="w-full h-screen flex items-center justify-center bg-white">
            <img src="/images/loading.gif" alt="Yuklanmoqda..." className="w-[200px] h-[200px]" />
        </div>
        )
    }
    return children
}

export default LoadingPage