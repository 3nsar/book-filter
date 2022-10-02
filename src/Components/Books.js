import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = "https://example-data.draftbit.com/books?_limit=200";

const Books = () => {
const [search, setSearch] = useState("") 
const [book, setBook] = useState([])

useEffect(() =>{ 
    axios.get(url).then((response) => {
        setBook(response.data)
        console.log((response.data))
    })
}, []); 
  return (
    <div className='main-container'>
        <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/>
      {book.filter((item)=>{
        return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search)
      }).map((item) =>(
        <div key={item.id} className="card">
        <img src={item.image_url} alt="pic" />
        <p>{item.title}</p>
        <p>{item.authors}</p>
        </div>
      ))}
        
    </div>
  )
}

export default Books