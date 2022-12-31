import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

function Navbar() {
  return (
    <div className="">
      {' '}
      <KeyboardArrowDownIcon />
      <SearchIcon />
      <PersonOutlineIcon />
      <FavoriteBorderIcon />
      <ShoppingCartOutlinedIcon />
    </div>
  )
}

export default Navbar
