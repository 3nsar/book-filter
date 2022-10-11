import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import Searchbar from './Searchbar.css'

const url = "https://example-data.draftbit.com/books?_limit=200";

const Books = () => {
const [search, setSearch] = useState("") 
const [book, setBook] = useState([])
const [filteredData, setFilteredData] = useState([])
const [wordEntered, setWordEntered] = useState("")

useEffect(() =>{ 
    axios.get(url).then((response) => {
        setBook(response.data)
        console.log((response.data))
    })
}, []); 

 const handleFilter = (e) =>{
    const searchWord = e.target.value;
    setWordEntered(searchWord)
    const newFilter = book.filter((value)=>{
      return value.title.toLowerCase().includes(searchWord)
    })
    {searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter)}
 }

  const handleShow = (e) =>{
    setSearch(e.target.value)
  } 

  const handleSearch = e => {
    console.log(e.target)
    handleShow(e);
    handleFilter(e);
  }

  const clearInput = () =>{
    setFilteredData([])
    setWordEntered("");
  }

  return (
    <>
    
      <div className="search">
       <div className='search-content'>
        <input type="text" placeholder='Search...' value={wordEntered} onChange={handleSearch}/>
        <div className='search-icon'> {filteredData.length === 0 ? <SearchIcon className="search-icon"/> : <CloseIcon className='search-icon' onClick={clearInput}/>}</div>
        </div>
      </div>  
      <div className='data-get'>
        {filteredData.length != 0 && (
          <div className='dataResult'> {filteredData.slice(0, 10).map((item)=>(
            <a href="dataItem"><p>{item.title}</p></a>
          ))}
          </div>
        )}
       </div>
       <div className='main-container'>
      {book.filter((item)=>{
        return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search)
      }).map((item) =>(
        <div className='card-grid'>
        <div key={item.id} className="card">
        <img src={item.image_url} alt="pic" />
        <p>{item.title}</p>
        <p>{item.authors}</p>
        <div className='card-rating'>
        <p>({item.rating})</p>
        <p>{item.rating >= 4 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></> : <><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </>}</p>
        </div>
        <button>Read More</button>
        </div>
        </div>
      ))}
        
    </div>
    </>
  )
}

export default Books