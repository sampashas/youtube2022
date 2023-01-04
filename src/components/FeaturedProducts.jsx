import React, { useRef } from 'react'
import Card from './Card'

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img2:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
      img:
        'https://images.unsplash.com/photo-1512101903502-7eb0c9022c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:
        'https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: 'Coat',
      isNew: false,
      price: 12,
    },
    {
      id: 3,
      img2:
        'https://images.unsplash.com/photo-1672753755413-5a6e9ef81e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
      img:
        'https://images.unsplash.com/photo-1672753755304-140359dc739a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
      title: 'Glass',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: 'Skirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ]

  const cardRef = useRef(null)

  return (
    <div className="flex flex-col px-48 py-12">
      <div className="flex flex-col items-center mb-12 gap-6">
        <h2 className="text-xl">{type} products</h2>
        <p className="w-3/4 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci
          odit sapiente, facilis ullam officiis amet, pariatur quae expedita
          corporis similique sit, voluptatem voluptas doloremque perspiciatis
          ipsum tempore! Eveniet, in.
        </p>
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
