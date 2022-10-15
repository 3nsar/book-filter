import React from 'react'
import home from './home.mp4'
import homecss from './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
         <div className="overlay"></div>
        <video src={home} autoPlay loop muted />
        <div className="home-content">
            <h1>Let's explore some books</h1>
            <Link to={`/books`} className="home-btn">Start now</Link>
        </div>
    </div>
  )
}

export default Home