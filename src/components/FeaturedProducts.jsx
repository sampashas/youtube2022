import React from 'react'
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
      img:
        'https://images.unsplash.com/photo-1592301945141-e2074718b711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      img2:
        'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: 'Hat',
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

  return (
    <div className="flex flex-col px-48 py-12">
      <div className="flex mb-12">
        <h2 className="text-2xl w-1/4 font-bold">{type} products</h2>
        <p className="w-3/4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci
          odit sapiente, facilis ullam officiis amet, pariatur quae expedita
          corporis similique sit, voluptatem voluptas doloremque perspiciatis
          ipsum tempore! Eveniet, in.
        </p>
      </div>
      <div className="flex justify-center gap-5">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
