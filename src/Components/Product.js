import React from 'react'

const Product = (props) => {
  return (
    <div className='product-container'>
      <div className="product-content">
        <img src={props.image} alt="pic" />
        <p className='card-title'>{props.title}</p>
        <p className='card-authors'>{props.authors}</p>
        <div className='card-rating'>
        <p>{props.ratingStars} </p>
        <p>({props.rating})</p>
        </div>
        </div>
    </div>
  )
}

export default Product