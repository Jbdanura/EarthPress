import './App.css';
import {useState} from "react"
import {BrowserRouter as HashRouter, Route, Link, Routes} from "react-router-dom"
import Articles from './components/Articles';

function App() {

  const [menuMobile,setMenuMobile] = useState(false)

  return (
    <div className="App">
      <HashRouter>
        <div className="nav">
          <a href="/" className={"logo"}>
            <span style={{color:"lightblue"}}>Earth</span><span style={{color:"white"}}>Press</span>
          </a>
          <div className="open-menu" onClick={()=>setMenuMobile(!menuMobile)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          <div className={!menuMobile?"links":"links-mobile"} onClick={()=>setMenuMobile(false)}>
            <Link to="/" >General</Link> 
            <Link to="/business" >Economy</Link>
            <Link to="/entertainment" >Entertainment</Link>
            <Link to="/health" >Health</Link>
            <Link to="/science" >Science</Link>
            <Link to="/sports" >Sports</Link>
            <Link to="/technology" >Technology</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Articles/>}/>
          <Route path="/:category" element={<Articles/>}/>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
