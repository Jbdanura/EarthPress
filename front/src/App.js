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
            <span style={{color:"lightblue"}}>Arg</span><span style={{color:"white"}}>e</span><span style={{color:"lightyellow"}}>nti</span>
            <span style={{color:"white"}}>c</span><span style={{color:"lightblue"}}>ias</span>
          </a>
          <div className="open-menu" onClick={()=>setMenuMobile(!menuMobile)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          <div className={!menuMobile?"links":"links-mobile"} onClick={()=>setMenuMobile(false)}>
            <Link to="/" >General</Link> 
            <Link to="/business" >Economia</Link>
            <Link to="/entertainment" >Entretenimiento</Link>
            <Link to="/health" >Salud</Link>
            <Link to="/science" >Ciencia</Link>
            <Link to="/sports" >Deportes</Link>
            <Link to="/technology" >Tecnologia</Link>
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
