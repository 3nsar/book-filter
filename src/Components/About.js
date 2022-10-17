import React from 'react'
import booksImg from "./booksImg.svg"

const About = () => {
  return (
    <div className='about-container'>
        <div className="img">
        <img src={booksImg} alt="pic" /></div>
         <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequatur, sunt ut, fugit delectus saepe aliquam expedita commodi cum temporibus amet officia ill</p>
         </div>
    </div>
  )
}

export default About