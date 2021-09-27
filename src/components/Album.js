import React from "react"
import styled from "styled-components"
import "./style.css"
const Album = ({ album }) => {
  return (
    <div className="Main">
      <span className="title">{album.album_title}</span>
      <span className="artist">{album.artist}</span>
    </div>
  )
}

export default Album
