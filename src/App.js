import './App.css';
import { BrowserRouter, Routes, Route, Link} 
from"react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <h1
      style={{
        backgroundColor:'black',
        color: 'white'
      }}
      >
        Welcome to React Router</h1>
      <div>
        <BrowserRouter>
          <Link to="/Home">Home</Link>{' '}
          <Link to="/About">About</Link>{' '}
          <Link to="/Contact">Contact</Link>{' '}
          <Routes>
            <Route exact path="/home" element={<Home/>} />
            <Route path ="/about/*" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home/>} />
            
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
