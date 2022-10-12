import React from 'react'
import { useParams, Link } from 'react-router-dom'

const SingleBook = (info) => {
    const {id} = useParams()
  return (
    <div>
        <h3>{info.title}</h3>
        <h2>{id}</h2>
        <Link to={`/`}>go back</Link>
    </div>
  )
}

export default SingleBook