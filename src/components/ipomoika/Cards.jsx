import React, { useState, useEffect } from 'react'

const cards = [
  {
    title: 'Card 1',
    description: 'This is the first card',
    image: 'card1.jpg',
  },
  {
    title: 'Card 2',
    description: 'This is the second card',
    image: 'card2.jpg',
  },
  {
    title: 'Card 3',
    description: 'This is the third card',
    image: 'card3.jpg',
  },
  {
    title: 'Card 4',
    description: 'This is the fourth card',
    image: 'card4.jpg',
  },
]

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % cards.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const currentCard = cards[currentIndex]

  return (
    <div className="mx-auto max-w-sm">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">
          {currentCard.title}
        </h1>
        <p className="text-gray-700 text-base mb-8">
          {currentCard.description}
        </p>
        <img
          src={currentCard.image}
          alt={currentCard.title}
          className="w-full h-64 rounded-lg"
        />
      </div>
    </div>
  )
}

export default CardSlider
