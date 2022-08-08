import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/add-country"}> Add Country </Link>
        <Link to={"/add-city"}> Add City </Link>
      
    </div>
  )
}

export default Navbar
