import React, { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Albums from "./components/Albums"
import AddAlbum from "./components/AddAlbum.js"
import albums from "./components/data"

function App() {
  const [data, setData] = useState(albums)
  const filter = input => {
    setData(
      albums.filter(
        album => album.artist == input || album.album_title == input
      )
    )
  }
  const submitHandler = newData => {
    data.push(newData)
  }
  console.log(data, "Data")
  return (
    <>
      <div class="body">
        <Router>
          <Navbar />

          <Route
            exact
            path="/albums"
            render={props => <Albums {...props} data={data} filter={filter} />}
          />
          <Route
            exact
            path="/add"
            render={props => (
              <AddAlbum {...props} submitHandler={submitHandler} data={data} />
            )}
          />
        </Router>
      </div>
    </>
  )
}
export default App
