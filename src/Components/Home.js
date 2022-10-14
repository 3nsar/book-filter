import React from 'react'
import home from './home.mp4'


const Home = () => {
  return (
    <div className='home'>
        <video src={home} autoPlay loop muted />
    </div>
  )
}

export default Home