import React from 'react';
import './App.css';
import { Box, Button, Container, Icon, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import logo from './person-295.svg';
import {motion} from 'framer-motion';


function App() {
  return (
    < motion.div id='top' initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity:0}}>

      
      <div style = {{height:1000, display:'flex', justifyContent:'center'}}>
        <div style  = {{marginBottom:'auto', marginTop:'auto',  justifyContent:'center'}}>
            <motion.h3 whileHover={{scale:2, transition:{duration:0.3}}} whileTap = {{scale:5, transition:{duration:0.2}}} style = {{color:'white'}}>Sergio Ayala </motion.h3>
            <motion.h3 whileHover={{scale:2, transition:{duration:0.3}}} style = {{color:'white'}}>Software Engineer</motion.h3>
            <div id = "animationTest" style = {{border:'solid white', width:200, height:200}}>
            </div>
        </div>
      </div>



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