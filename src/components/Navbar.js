
import "./style.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/add">Add Album</Link>

        <Link to="/albums">Albums</Link>
      </div>
    </>
  )
}

export default Navbar
