import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="nav-content">
          <h1>BOOKHOUSE</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Books</li>
            <li>Watchlist</li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar