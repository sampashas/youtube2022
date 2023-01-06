import React, { useState } from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

function Cart() {
  const [data, setData] = useState([
    {
      id: 1,
      img:
        'https://images.unsplash.com/photo-1617391258031-f8d80b22fb35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      price: 12,
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio ipsum quibusdam rem, dolores perspiciatis maxime ab quisquam. Itaque temporibus officiis quaerat dolore neque possimus nesciunt maiores nam quas consequatur',
    },
    {
      id: 2,
      img:
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      title: 'Glasses',
      isNew: false,
      price: 19,
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio ipsum quibusdam rem, dolores perspiciatis maxime ab quisquam. Itaque temporibus officiis quaerat dolore neque possimus nesciunt maiores nam quas consequatur',
    },
  ])

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  return (
    <div className="w-[30vw] flex flex-col gap-6 p-6 fixed right-5 top-20 z-20 bg-[#f1f1f1f4] backdrop-blur-xl">
      <h2>Products in your cart</h2>
      {data?.map((item) => (
        <div className="flex flex-row gap-4" key={item.id}>
          <div className="w-52">
            <img
              className="w-full h-24 object-cover bg-center"
              src={item.img}
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold">{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => removeItem(item.id)}
          />
        </div>
      ))}
      <div className="flex flex-col">
        <span>Subtotal</span>
        <span>$1,213</span>
      </div>
      <button>Proceed to checkout</button>
      <span>Reset cart</span>
    </div>
  )
}

export default Cart
