import React, { useState } from "react"
import Album from "./Album"
import albums from "./data"
import { Link } from "react-router-dom"
const Albums = ({ data, filter }) => {
  const [input, setInput] = useState("")
  const searchHandler = e => {
    const val = e.target.value
    setInput(val)
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="search" placeholder onChange={searchHandler} />
        <button onClick={() => filter(input)}>Search</button>
      </div>

      <div style={{ display: "flex" }}>
        {data.map(album => (
          <Link to={`/albums/${album.id}`}><Album album={album} /></Link>
          
        ))}
      </div>
    </>
  )
}

export default Albums
