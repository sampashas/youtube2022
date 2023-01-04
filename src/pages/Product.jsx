import React, { useState } from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

function Product() {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const images = [
    {
      img:
        'https://images.unsplash.com/photo-1672753755413-5a6e9ef81e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    },
    {
      img:
        'https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
    },
    {
      img:
        'https://images.unsplash.com/photo-1608097172838-f8094d967aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
    },
  ]

  return (
    <div className="flex flex-col pb-48">
      <div className="flex gap-4">
        <div className="flex flex-1" />
      </div>
      <div className="flex px-6 gap-4 flex-row">
        <div className="left flex-1 flex gap-4">
          <div className="flex-1 flex flex-col gap-1">
            {images.map((item, index) => (
              <img
                className="w-full h-[150px] object-cover cursor-pointer mb-3"
                src={item.img}
                onClick={(e) => setSelectedImg(index)}
                alt=""
              />
            ))}
          </div>
          <div className="flex-[5]">
            <img
              src={images[selectedImg].img}
              alt=""
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          {isModalOpen && (
            <Modal
              onClose={() => setIsModalOpen(false)}
              images={images}
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
            />
          )}
        </div>
        <div className="right flex-1 flex flex-col gap-6 pb-32">
          <div className="flex flex-1 gap-2 flex-col">
            <h2 className="text-2xl font-medium">Doggy sleps one piece</h2>
            <span className="price text-xl">$123</span>
          </div>
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio
            ipsum quibusdam rem, dolores perspiciatis maxime ab quisquam. Itaque
            temporibus officiis quaerat dolore neque possimus nesciunt maiores
            nam quas consequatur?
          </p>

          <div className="flex flex-col opacity-50">
            <span>Vendor: Polo</span>
            <span>Product type: T-shirt</span>
            <span>Tag: T-shirt, Women, Top</span>
          </div>
          <hr />
          <div className="flex flex-col">
            <h4 className="text-2xl ">Links</h4>
            <span>Description</span>
            <span>Additional information</span>
            <span>FAQ</span>
          </div>
          {/* quantity */}
          <div className="flex justify-center gap-8 items-center">
            <button
              className="bg-[var(--normal)] w-14 h-14 flex items-center justify-center"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button
              className="bg-[var(--normal)] w-14 h-14 flex items-center justify-center"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-2">
            <button className="bg-[var(--primary)] text-white w-full h-14 flex border items-center whitespace-nowrap gap-2 justify-center">
              <AddShoppingCartIcon />
              Add to card
            </button>
            <div className="flex gap-2">
              <div className="w-full cursor-pointer h-14 flex border items-center whitespace-nowrap gap-2 justify-center">
                <FavoriteBorderIcon /> Add to wish list
              </div>
              <div className="flex cursor-pointer w-full h-14 border items-center whitespace-nowrap gap-2 justify-center">
                <BalanceIcon /> Add to compare
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Modal({ images, selectedImg, setSelectedImg, onClose }) {
  const handleScroll = (event) => {
    event.preventDefault()
    const delta = Math.max(-1, Math.min(1, event.wheelDelta))
    if (delta === 1) {
      setSelectedImg((prev) => (prev + 1 >= images.length ? prev : prev + 1))
    } else {
      setSelectedImg((prev) => (prev - 1 < 0 ? prev : prev - 1))
    }
  }

  return (
    <div className="z-[2] w-[50vw]">
      <div className="w-[]" onWheel={handleScroll}>
        <img src={images[selectedImg].img} onClick={onClose} alt="" />
      </div>
    </div>
  )
}

export default Product
