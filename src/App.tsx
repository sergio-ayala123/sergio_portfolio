import React, { useState } from 'react';
import './App.css';
import { Box, Button, Container, Icon, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import logo from './person-295.svg';
import { motion } from 'framer-motion';
import SiteLinks from './components/SiteLinks';

function App() {
  const whileHoverTest = { scale: 2 }

  const [hoverChange, setHoverChange] = useState(whileHoverTest)
 


  const changeHover = () => {
    console.log('inside changeHover')
    let newHover = { scale: 0.5 }
    setHoverChange(newHover)
  }

  return (
    < motion.div id='top' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>


      <div style={{ height: 1000, display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginBottom: 'auto', marginTop: 'auto', justifyContent: 'center' }}>
          <motion.h3 whileHover={{ scale: 2, transition: { duration: 0.3 } }} whileTap={{ scale: 5, transition: { duration: 0.2 } }} style={{ color: 'white', fontSize: '40px' }}>Sergio Ayala </motion.h3>
          <motion.h3 whileHover={{ scale: 2, transition: { duration: 0.3 } }} style={{ color: 'white', fontSize: '40px' }}>Software Engineer</motion.h3>
          <div id="animationTest" style={{ border: 'solid white', width: 200, height: 200 }}>
          </div>
          <motion.div id="test" whileHover={hoverChange} onClick={changeHover} style={{ border: 'solid white', width: 200, height: 200 }}></motion.div>
          <motion.div animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            backgroundColor: ["white", "blue", 'white', 'green', 'white']
          }} style={{ border: 'solid white', width: 200, height: 200 }}></motion.div>
        </div>
      </div>
      
      <SiteLinks/>


      <footer style={{ padding: '10em 10em 10em 10em' }}>
        <Container>
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Icon style={{ width: 100, height: 100 }}>
              <img src={logo} height={100} width={100} alt="logo" ></img>
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


    </motion.div>

  );
}

export default App;