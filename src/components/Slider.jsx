import React, { useState } from 'react'

import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'

function Slider() {
  const data = [
    'https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    'https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    'https://images.unsplash.com/photo-1585221330389-24fb30535ec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className="h-[calc(100vh - 80px)] w-[100vw] relative overflow-hidden">
      <div
        className="flex w-[300vw] h-screen transition-[var(--anim)] duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="w-[100vw] object-cover h-screen" src={data[0]} alt="" />
        <img className="w-[100vw] object-cover h-screen" src={data[1]} alt="" />
        <img className="w-[100vw] object-cover h-screen" src={data[2]} alt="" />
      </div>
      <div className="gap-2 w-fit flex justify-center absolute left-0 right-0 m-auto bottom-24">
        <div
          onClick={prevSlide}
          className=" cursor-pointer w-12 h-12 border-2 flex items-center justify-center"
        >
          <WestOutlinedIcon />
        </div>
        <div
          onClick={nextSlide}
          className=" cursor-pointer w-12 h-12 border-2 flex items-center justify-center"
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
