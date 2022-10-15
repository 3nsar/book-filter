import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import singleBook from './SingleBook.css'
import { ToastContainer, toast } from 'react-toastify';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import 'react-toastify/dist/ReactToastify.css';



const SingleBook = () => {
    const {id} = useParams()
    const urlUff = `https://example-data.draftbit.com/books/${id}`
    const[singleBook, setSingleBook] = useState([])

    {/*<h2>{id}</h2>
     */}
    
useEffect(() =>{ 
    axios.get(urlUff).then((response) => {
        setSingleBook(response.data)
        console.log((response.data))
    })
}, []); 

const notify = () => toast.success("Added to list",{position: "bottom-left", autoClose: 2000})

if(singleBook){
    return(
        <div className='book-container'>
            <div className='book-pic'>
            <img src={singleBook.image_url} alt="pic" />
            </div>
        
            <div className='book-facts'>
                <div className="book-title">
                   <h1>{singleBook.title}</h1>
                    <h3>by {singleBook.authors}</h3>
                </div>
            <h2>Description</h2>
            <div className="book-desc">
            <p>{singleBook.description}</p>
            </div>
            <h2 className='detail-content'>Details</h2>
            <div className="book-details">
            <p><strong>Edition:</strong> {singleBook.edition}</p>
            <p><strong>Genres:</strong> {singleBook.genres}</p>
            <p><strong>Pages: </strong> {singleBook.num_pages}</p>
            
            

            <div className='book-rating'>
            <p>{singleBook.rating >= 4.1 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </> 
                    : singleBook.rating >= 4 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/> </> 
                    : singleBook.rating >= 3.9 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon /> </> 
                    : singleBook.rating >= 3.8 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/>  <StarBorderIcon /></> 
                    : singleBook.rating >= 3.7 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon /> <StarBorderIcon /></> 
                    : singleBook.rating >= 3.55 ? <> <StarIcon/> <StarIcon/> <StarHalfIcon/> <StarBorderIcon /> <StarBorderIcon /></> 
                    : <><StarIcon/>  <StarIcon/> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></>} </p>
            <p>({singleBook.rating})</p>
            </div>
            </div>
              <div className='book-btns'>
                <button onClick={notify}>Add to watchlist</button> 
                {/*<Checkbox  onClick={notify}  icon={<FavoriteBorderIcon color="error"/>} checkedIcon={<Favorite color="error" />} variant="contained"/> */}
                <Link to={`/books`} className="gb-btn">Go back</Link>
              </div>
              <ToastContainer />
            </div>
        </div>
    )
}
}

export default SingleBook