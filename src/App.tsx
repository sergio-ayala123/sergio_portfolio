import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Box, Button, Container, Icon, IconButton, SvgIcon, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import logo from './person-295.svg'



function App() {
  return (
    < div id='top'>
      <NavBar />

      <Container id='about' sx={{ width: 'max-auto', height: 900, bgcolor: '#83c5eb', justifyContent: 'center' }}>
        <h1> About
        </h1>
      </Container>


      <Container id='projects' sx={{ width: 'auto', height: 900, bgcolor: '#83c5eb', justifyContent: 'center' }}>
        <h1>Projects</h1>
      </Container>

      <Container id='contact' sx={{ width: 'auto', height: 900, bgcolor: '#83c5eb', justifyContent: 'center' }}>
        <h1>Contact</h1>
      </Container>
      

      <footer style={{ padding: '10em 10em 10em 10em' }}>
        <Container>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Icon style={{ width: 100, height: 100 }}>
              <img src={logo} height={100} width={100} ></img>
            </Icon>
          </Box>


          <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '1em' }}>
            <Stack direction='row'>
              <Button style={{ color: 'white' }}><Typography variant='h5' textTransform={'capitalize'}>LinkedIn</Typography></Button>
              <Button style={{ color: 'white' }}><Typography variant='h5' textTransform={'capitalize'}>GitHub</Typography></Button>
            </Stack>
          </Box>
        </Container>

      </footer>


    </div>

  );
}

export default App;