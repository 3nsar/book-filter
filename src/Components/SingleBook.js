import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'


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
            <h2>{singleBook.id}</h2>
            <Link to={`/`}>go back</Link>
        </div>
    )
}
}

export default SingleBook