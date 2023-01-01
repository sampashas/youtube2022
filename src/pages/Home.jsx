import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Newseller from '../components/Newseller'
// import Preloader from '../components/Preloader'

function Home() {
  return (
    <div>
      {/* <Preloader /> */}
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
      <Newseller />
    </div>
  )
}

export default Home
