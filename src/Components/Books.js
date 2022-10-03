import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const url = "https://example-data.draftbit.com/books?_limit=200";

const Books = () => {
const [search, setSearch] = useState("") 
const [book, setBook] = useState([])
const [filteredData, setFilteredData] = useState([])

useEffect(() =>{ 
    axios.get(url).then((response) => {
        setBook(response.data)
        console.log((response.data))
    })
}, []); 

 const handleFilter = (e) =>{
    const searchWord = e.target.value;
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

  return (
    <div className='main-container'>
      <div className="search">
       <div className='search-content'>
        <input type="text" placeholder='Search...' onChange={handleSearch}/>
        <div className='search-icon'> {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon />}</div>
        {filteredData.length != 0 && (
          <div className='dataResult'> {filteredData.slice(0, 10).map((item)=>(
            <a href="dataItem"><p>{item.title}</p></a>
          ))}
          </div>
        )}
       </div>
      </div>  
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