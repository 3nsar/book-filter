import React from 'react'
import { Link } from 'react-router-dom'
import product from "./Product.css"


const Product = (props) => {
  return (
   <div className='product-container'>
    <div className='product-content'>
      <div className="card">
        <img src={props.image} alt="pic" />
        <p className='card-title'>{props.title}</p>
        <p className='card-authors'>{props.authors}</p>
          <div className='card-rating'>
            <p>{props.ratingStars} </p>
            <p>({props.rating})</p>
          <div className='card-btns'>
           <Link className="rdm-btn" to={`/book/${props.read}`}> <button>Read more</button></Link>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Product