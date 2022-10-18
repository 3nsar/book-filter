import React from 'react'
import booksImg from "./booksImg.svg"

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-content">
        <img src={booksImg} alt="pic" width="300px"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequatur, sunt ut, fugit delectus saepe aliquam expedita commodi cum temporibus amet officia ill</p>
        </div>
    </div>
  )
}

export default About