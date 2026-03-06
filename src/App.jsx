import "./App.css"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/home/Home"
import Movies from "./components/pages/movies/Movies"
import Horror from "./components/pages/horror/Horror"
import NotFound from "./components/pages/notFound/NotFound"


const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/Horror" element={<Horror/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
