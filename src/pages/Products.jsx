import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/List'

function Products() {
  const catId = useParams().id
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  const [hover, setHover] = useState(false)

  const imgPromo = [
    'https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
    'https://images.unsplash.com/photo-1608097172838-f8094d967aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
  ]

  return (
    <div className="products flex px-6">
      <div className="left flex-1 flex flex-col gap-6 pt-6">
        <div className="flex flex-col">
          <h2>Product categories</h2>
          <div className="flex gap-2">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Filter by price</h2>
          <div className="flex gap-2">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e: any) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Sort by</h2>
          <div className="flex gap-2">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e: any) => setSort('asc')}
            />
            <label htmlFor="asc">
              Price <span className="opacity-50">(Lowest first)</span>
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e: any) => setSort('desc')}
            />
            <label htmlFor="desc">
              Price <span className="opacity-50">(Highest first)</span>
            </label>
          </div>
        </div>
      </div>
      <div className="right flex flex-col flex-[3] gap-12">
        {/* promo */}
        <div
          onMouseEnter={() => {
            setHover(true)
          }}
          onMouseLeave={() => {
            setHover(false)
          }}
          className="flex h-[18vw] w-full overflow-hidden relative"
        >
          <img
            className="w-[100vw] h-[100vh] object-cover"
            style={hover ? { zIndex: 1 } : {}}
            src={imgPromo[0]}
            alt="imgFir"
          />
          <img
            className="absolute w-[100vw] h-[100vh] object-cover"
            src={imgPromo[1]}
            alt="imgSec"
          />
        </div>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products
