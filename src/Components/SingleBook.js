import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';


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

if(singleBook){
    return(
        <div>
            <h1>{singleBook.title}</h1>
            <h2>{singleBook.authors}</h2>
            <img src={singleBook.image_url} alt="pic" />
           
            <div className='book-desc'>
            <p>{singleBook.description}</p>
            </div>

            <p>Edition: {singleBook.edition}</p>
            <p>Genres: {singleBook.genres}</p>
            <p>Pages: {singleBook.num_pages}</p>
            <p>{singleBook.rating >= 4.1 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </> 
                    : singleBook.rating >= 4 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/> </> 
                    : singleBook.rating >= 3.9 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon /> </> 
                    : singleBook.rating >= 3.8 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/>  <StarBorderIcon /></> 
                    : singleBook.rating >= 3.7 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon /> <StarBorderIcon /></> 
                    : singleBook.rating >= 3.55 ? <> <StarIcon/> <StarIcon/> <StarHalfIcon/> <StarBorderIcon /> <StarBorderIcon /></> 
                    : <><StarIcon/>  <StarIcon/> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></>} </p>
            <p>({singleBook.rating})</p>
            <Link to={`/`}>go back</Link>
        </div>
    )
}
}

export default SingleBook