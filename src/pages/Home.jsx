import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
    </div>
  )
}

export default Home
