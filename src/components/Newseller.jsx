import React from 'react'

import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Google from '@mui/icons-material/Google'
import Pinterest from '@mui/icons-material/Pinterest'
import { Link } from 'react-router-dom'

function Newseller() {
  return (
    <div className="contact bg-gray-100 flex justify-center">
      <div className="w-1/2 flex items-center justify-between p-12">
        <span>Be in touch with us:</span>
        <div className="mail flex gap-2">
          <input
            className="pl-5 bg-[none] border-none"
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button className="bg-[var(--primary)] text-white px-5 py-2">
            Join us
          </button>
        </div>
        <div className="flex gap-4">
          <Link to="/">
            <Facebook />
          </Link>
          <Link to="/">
            <Instagram />
          </Link>
          <Link to="/">
            <Twitter />
          </Link>
          <Link to="/">
            <Google />
          </Link>
          <Link to="/">
            <Pinterest />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Newseller
