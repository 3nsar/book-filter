import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Card from './Card.css'
import Searchbar from './Searchbar.css'

const url = "https://example-data.draftbit.com/books?_limit=200";

const Books = () => {
const [search, setSearch] = useState("") 
const [book, setBook] = useState([])
const [filteredData, setFilteredData] = useState([])
const [wordEntered, setWordEntered] = useState("")
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



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

  const notify = () => toast.info("Updated list",{position: "bottom-left", autoClose: 2000})


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
        <p className='card-title'>{item.title.slice(0, 30) + (item.title.length > 30 ? "..." : "")}</p>
        <p className='card-authors'>{item.authors}</p>
        <div className='card-rating'>
        <p>{item.rating >= 4.1 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </> 
                    : item.rating >= 4 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/> </> 
                    : item.rating >= 3.9 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon /> </> 
                    : item.rating >= 3.8 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/>  <StarBorderIcon /></> 
                    : item.rating >= 3.7 ? <> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon /> <StarBorderIcon /></> 
                    : item.rating >= 3.55 ? <> <StarIcon/> <StarIcon/> <StarHalfIcon/> <StarBorderIcon /> <StarBorderIcon /></> 
                    : <><StarIcon/>  <StarIcon/> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></>} </p>
        <p>({item.rating})</p>
        </div>
         <div className='card-btns'>
          <button>Read More</button> 
           <div>
            <Checkbox onClick={notify}{...label} icon={<FavoriteBorderIcon color="error" />} checkedIcon={<Favorite color="error" />} variant="contained"/>
            <ToastContainer />
           </div>
         </div>
        </div>
        </div>
      ))}
        
    </div>
    </>
  )
}

export default Books