import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login'
import Home from './container/Home';
import About from './components/About'
import Projects from './components/Projects'
import CreateAccount from './components/CreateAccount';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/create' element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
