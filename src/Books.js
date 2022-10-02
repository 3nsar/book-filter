import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = "https://example-data.draftbit.com/books?_limit=100";

const Books = () => {

const [book, setBook] = useState([])

useEffect(() =>{ 
    axios.get(url).then((response) => {
        setBook(response.data)
        console.log((response.data))
    })
}, []); 
  return (
    <div>
      {book.map((item) =>(
        <div key={item.id}>
        <h1>{item.title}</h1>
        <h2>{item.authors}</h2>
        <img src={item.image_url} alt="pic" />
        </div>
      ))}
        
    </div>
  )
}

export default Books