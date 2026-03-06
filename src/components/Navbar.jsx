import logo from "../assets/icons/logo-prime-video.svg";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";



const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const navigate=useNavigate()

  const handleSubmite = (e) => {
    e.preventDefault()

    navigate(`/movies?query=${searchQuery}`)      
  }


  //step-1  






  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">

          {/* Logo - 2 columns */}
          <div className="col-2">
            <Link to="/">
              <img className="navLogo" src={logo} alt="logo" style={{ maxHeight: "50px" }} />
            </Link>
          </div>

          <div className="col-4 ">
            <ul className="navbar-nav d-flex flex-row  ">
              <li className="nav-item mx-2 items">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2 items">
                <Link className="nav-link" to="/movies">Movies</Link>
              </li>
              <li className="nav-item mx-2 items">
                <Link className="nav-link" to="/Horror">Horror</Link>
              </li>
            </ul>
          </div>

          {/* Search */}
          <div className="col-6 forms">
            <form className="d-flex justify-content-end forms" role="search" onSubmit={handleSubmite}>
              <input className="form-control me-2" type="search" placeholder="Search" 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;



