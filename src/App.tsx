import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import SiteLinks from './components/SiteLinks';

import Typical from 'react-typical';
function App() {



  return (
    < motion.div id='top' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ minHeight: '100vh' }}>


      <div style={{ height: 900, display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginBottom: 'auto', marginTop: 'auto', justifyContent: 'center' }}>
          <motion.h3 style={{ color: 'white', fontSize: '120px', textAlign: 'center' }}>Sergio Ayala </motion.h3>

          <div style={{ display: 'flex', justifyContent: 'center' }}>

            <h3 style={{ color: '#affc41', fontSize: '40px', margin: '46.8px 0px', marginTop: 'auto', marginBottom: 'auto', paddingRight: '0.5em' }}>
              I'm A
            </h3>

            <h3 style={{ color: '#affc41', fontSize: '40px' }}>
              <Typical
                loop={Infinity}
                steps={['  Software Engineer', 2000, '   Web Developer', 2000]}
                wrapper='h3' />
            </h3>

          </div>

        </div>
      </div>

      <SiteLinks />



    </motion.div>

  );
}

export default App;