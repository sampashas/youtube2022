import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to('.preloader-container', {
      duration: 0.3,
      transform: 'translateY(0)',
      ease: 'power3.out',
    })

    const timeout = setTimeout(() => {
      setIsLoaded(true)
      tl.to('.preloader-container', {
        duration: 0.3,
        transform: 'translateY(-100%)',
        ease: 'power3.out',
      })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={`preloader-container fixed top-0 left-0 right-0 bottom-0 z-9999 w-[100vw] h-[100vh] bg-white-800 ${
        isLoaded ? 'hidden' : 'block'
      }`}
    >
      <div className="z-[9999] preloader-bar w-[100vw] h-[100vh] rounded-full bg-blue-500 animate-spin" />
      <div className="preloader-text text-blue-500 font-bold ml-2">
        Loading...
      </div>
    </div>
  )
}

export default Preloader
