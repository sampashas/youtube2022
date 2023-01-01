import React from 'react'
import { Link } from 'react-router-dom'

const Categories = (Categorie) => {
  return (
    <div className="flex h-[80vh] gap-3 m-3">
      <div className="flex-[1] flex flex-col gap-10">
        <div className="flex-[1] flex gap-3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1613480838954-10d9f4de0128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="ic1"
          />{' '}
          <button className="border border-black  absolute w-min h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto ">
            <Link className="" to="/products/1">
              Sale
            </Link>
          </button>{' '}
        </div>
        <div className="flex-[1] flex gap-3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
            alt="ic2"
          />{' '}
          <button className="border border-black  absolute w-min h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto">
            <Link className="" to="/products/2">
              Women
            </Link>
          </button>{' '}
        </div>
      </div>
      <div className="flex-[1] flex flex-col gap-10">
        <div className="flex-[1] flex gap-3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1629907730422-3303af15a34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
            alt="ic3"
          />{' '}
          <button className="border border-black  whitespace-nowrap absolute w-min h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto ">
            <Link className="" to="/products/3">
              New Season
            </Link>
          </button>{' '}
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-10">
        <div className="flex-[1] flex gap-3 relative overflow-hidden">
          <div className="flex-[1] flex flex-col gap-10">
            <div className="flex-[1] flex gap-3 relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt="ic4"
              />{' '}
              <button className="border border-black  absolute w-min h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto ">
                <Link className="" to="/products/4">
                  Men
                </Link>
              </button>{' '}
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-10">
            <div className="flex-[1] flex gap-3 relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt="ic5"
              />{' '}
              <button className="border border-black  absolute w-min h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto ">
                <Link className="" to="/products/5">
                  Acessoires
                </Link>
              </button>{' '}
            </div>
          </div>
        </div>
        <div className="flex-[1] flex gap-3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
            alt="ic6"
          />{' '}
          <button className="border border-black  absolute w-min h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto ">
            <Link className="" to="/products/6">
              Shoes
            </Link>
          </button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Categories
