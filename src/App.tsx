import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import { Box, Container } from '@mui/material';

function App() {
  return (
    < div id = 'top'>
      <NavBar/>

      <Container id = 'about' sx={{ width: 'auto', height: 900, bgcolor: 'white', justifyContent: 'center'}}>
        <h1> About
        </h1>
      </Container>


      <Container id = 'projects' sx={{ width: 'auto', height: 900, bgcolor: 'white', justifyContent: 'center' }}>
        <h1>Projects</h1>
      </Container>

      <Container id = 'contact' sx={{ width: 'auto', height: 900, bgcolor: 'white', justifyContent: 'center' }}>
        <h1>Contact</h1>
      </Container>
    </div>

  );
}

export default App;