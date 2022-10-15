import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="nav-content">
          <h1>BOOKHOUSE</h1>
          <ul>
            <Link  to={`/`}> <li>Home</li> </Link>
            <Link  to={`/about`}> <li>About</li> </Link>
            <Link  to={`/books`}> <li>Books</li> </Link>
            <Link  to={`/watchlist`}> <li>Watchlist</li> </Link>
          </ul>
      </div>
    </div>
  )
}

export default Navbar