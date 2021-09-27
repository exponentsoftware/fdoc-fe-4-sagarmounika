import React, { useState } from "react"
import "./style.css"

const AddAlbum = ({ submitHandler, data }) => {
  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")
  const artistChange = e => {
    setArtist(e.target.value)
  }
  const albumChange = e => {
    setAlbum(e.target.value)
  }
  const submit = e => {
    e.preventDefault()
    const newData = {
      artist: artist,
      album_title: album,
      id: data[data.length - 1].id + 1,
    }
    submitHandler(newData)
    alert("added succesfully")
  }
  return (
    <div>
      <form className="form" onSubmit={submit}>
        <input
          type="text"
          onChange={artistChange}
          value={artist}
          placeholder="Enter Artist Name"
        />
        <input
          type="text"
          onChange={albumChange}
          value={album}
          placeholder="Enter Album"
        />
        <button className="submitBtn">Add Album</button>
      </form>
    </div>
  )
}

export default AddAlbum
