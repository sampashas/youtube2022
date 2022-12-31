import React from 'react'
import { Link } from 'react-router-dom'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

function Navbar() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full items-center justify-between px-6 py-4">
      {' '}
      {/* left */}
      <div className="flex col-span-1 gap-4">
        {/* lang + price */}
        <div className="flex">
          <span>Eng</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        {/* links */}
        <ul className="flex gap-6">
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
            <Link to="/products/3">
              <span>Children</span>
            </Link>
          </li>
          <li>
            <Link to="/products/4">
              <span>Accessories</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* center */}
      <div className="flex col-span-1 justify-center">
        <Link to="/">
          <span className="text-xl">App/Market</span>
        </Link>
      </div>
      {/* right */}
      <div className="flex col-span-1 justify-end gap-6">
        {/* links */}
        <ul className="flex gap-6">
          <li>
            <Link to="/">
              <span>Homepage</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <span>Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/stores">
              <span>Stores</span>
            </Link>
          </li>
        </ul>
        {/* interface */}
        <div className="flex gap-4">
          <SearchIcon />
          <PersonOutlineIcon />
          <FavoriteBorderIcon />
          <div className="flex relative">
            <ShoppingCartOutlinedIcon />
            <div className="absolute left-3 bottom-3 w-5 h-5 bg-[var(--primary)] rounded-full flex justify-center items-center">
              <span className="text-xs text-white">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
