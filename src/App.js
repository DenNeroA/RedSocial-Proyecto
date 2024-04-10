import Barralateral from './components/Barralateral';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import SignUp from './components/SingUp';
import LogIn from './components/LogIn';
import Carousel from './components/Carousel';
import Publicacion from './components/Publicacion';



function App() {
  return (
    
    <Router>
      
      <div className="App">
      <Barralateral />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            {/* <NavLink className="navbar-brand" to="/">PROYECTO FINAL</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
          
              <ul className="navbar-nav mr-auto"> {/* Alineación a la izquierda */}
                {/* <li className="nav-item">
                /////////////////  DESACTIVE LAS OPCIONES NO LAS ELIMINE POR AQUELLO//////////////
                <NavLink className="nav-link" activeClassName="active" to="/registro">Registro</NavLink>
              </li> */}
              </ul>
              <ul className="navbar-nav ml-auto"> {/* Alineación a la derecha */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/inicio-sesion">Iniciar Sesión</NavLink>
                </li> */}
              </ul>
              <ul className="navbar-nav ml-auto"> {/* Alineación a la derecha */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/Publicacion">Publicacion</NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/registro" element={<SignUp />} />
            <Route path="/inicio-sesion" element={<LogIn />} />
            <Route path="/publicacion" element={<Publicacion />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
