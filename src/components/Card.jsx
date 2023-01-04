import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// надо повесить ховер при наведении

function Card({ item }) {
  const [hover, isHover] = useState(false)

  return (
    <Link to={`/product/${item.id}`}>
      <div
        className="w-[240px] pb-12 flex gap-2 flex-col"
        onMouseEnter={() => {
          isHover(true)
        }}
        onMouseLeave={() => {
          isHover(false)
        }}
      >
        {/* new season */}
        <div className="w-full h-96 overflow-hidden relative">
          {item.isNew && (
            <span className="absolute left-2 top-2 rounded-full border border-black px-2 z-[3]">
              New Season
            </span>
          )}
          <img
            className="z-[1] hover:z-[0]  absolute w-full h-full object-cover"
            style={hover ? { zIndex: 2 } : { zIndex: 0 }}
            src={item.img}
            alt="firstImg"
          />
          {item.img2 && (
            <img
              className="z-[1] absolute w-full h-full object-cover"
              src={item.img2}
              alt="secondImg"
            />
          )}
        </div>
        <div className="flex flex-col">
          <h2>{item.title}</h2>
          <div className="flex gap-3 w-full">
            {item.oldPrice && (
              <h3 className="line-through">${item.oldPrice}</h3>
            )}
            <h3>${item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
