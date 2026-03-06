import "./App.css"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home/Home"
import Movies from "./components/pages/movies/Movies"
import Horror from "./components/pages/Horror/Horror"
import NotFound from "./components/pages/notFound/NotFound"
Horror

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
