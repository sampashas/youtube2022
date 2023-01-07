import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'

import axios from 'axios'

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

  // const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_URL + '/products',
          {
            headers: {
              Authorization: 'bearer' + process.env.REACT_APP_API_TOKEN,
            },
          },
        )
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  // const cardRef = useRef(null)

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
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 0C26.869 0 0 26.869 0 60C0 93.131 26.869 120 60 120C93.131 120 120 93.131 120 60C120 26.869 93.131 0 60 0ZM60 102C41.88 102 28 88.12 28 70C28 51.88 41.88 38 60 38C78.12 38 92 51.88 92 70C92 88.12 78.12 102 60 102ZM60 88C70.66 88 79 79.66 79 70C79 60.34 70.66 52 60 52C49.34 52 41 60.34 41 70C41 79.66 49.34 88 60 88ZM76.17 55.94C76.17 54.12 74.56 52.51 72.75 52.51H47.25C45.44 52.51 43.83 54.12 43.83 55.94V64.06C43.83 65.88 45.44 67.49 47.25 67.49H72.75C74.56 67.49 76.17 65.88 76.17 64.06V55.94Z"
            fill="#000000"
          />
          <path
            d="M60 0C26.869 0 0 26.869 0 60C0 93.131 26.869 120 60 120C93.131 120 120 93.131 120 60C120 26.869 93.131 0 60 0ZM60 102C41.88 102 28 88.12 28 70C28 51.88 41.88 38 60 38C78.12 38 92 51.88 92 70C92 88.12 78.12 102 60 102ZM60 88C70.66 88 79 79.66 79 70C79 60.34 70.66 52 60 52C49.34 52 41 60.34 41 70C41 79.66 49.34 88 60 88ZM76.17 55.94C76.17 54.12 74.56 52.51 72.75 52.51H47.25C45.44 52.51 43.83 54.12 43.83 55.94V64.06C43.83 65.88 45.44 67.49 47.25 67.49H72.75C74.56 67.49 76.17 65.88 76.17 64.06V55.94Z"
            fill="#000000"
            transform="rotate(180 60 60)"
          />
        </svg>
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
