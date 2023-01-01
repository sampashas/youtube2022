import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="grid grid-cols-2 w-full bg-gray-100 px-48 py-6">
      <div className="flex flex-col justify-between gap-12">
        {/* 2 columns */}
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2 col-span-1">
            <h4 className="text-2xl ">Categories</h4>
            {/* links */}
            <ul className="gap-6">
              <li>
                <Link to="/products/1">
                  <span>Men</span>
                </Link>
              </li>
              <li>
                <Link to="/products/2">
                  <span>Women</span>
                </Link>
              </li>
              <li>
                <Link to="/products/2">
                  <span>Shoes</span>
                </Link>
              </li>
              <li>
                <Link to="/products/3">
                  <span>Accessories</span>
                </Link>
              </li>
              <li>
                <Link to="/products/4">
                  <span>New Arrivals</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <h4 className="text-2xl">Links</h4>
            {/* links */}
            <ul className="gap-6">
              <li>
                <Link to="/faq">
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/pages">
                  <span>Pages</span>
                </Link>
              </li>
              <li>
                <Link to="/stores">
                  <span>Stores</span>
                </Link>
              </li>
              <li>
                <Link to="/compare">
                  <span>Compare</span>
                </Link>
              </li>
              <li>
                <Link to="/cookies">
                  <span>Cookies</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* copyright */}
        <div className="flex items-end gap-3">
          <span className="text-xs pb-2">
            App/Market © Copyright 2023 All Rights Reserved
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-12">
        {/* 2 columns */}
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2 col-span-1">
            <h4 className="text-2xl ">About</h4>
            <p className="text-xs w-28 opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              error cum accusamus dignissimos quis unde dolore eum ullam quia
              incidunt pariatur atque nobis harum sint, mollitia officiis
              suscipit animi soluta.
            </p>
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <h4 className="text-2xl">Contacts</h4>
            <p className="text-xs opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              error cum accusamus dignissimos quis unde dolore eum ullam quia
              incidunt pariatur atque nobis harum sint, mollitia officiis
              suscipit animi soluta.
            </p>
          </div>
        </div>
        {/* payments */}
        <div className="flex">
          <img
            className="mix-blend-multiply grayscale "
            src="/img/partners.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
