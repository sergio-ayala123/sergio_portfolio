import { motion} from "framer-motion";
import linkedIn from '../linkedIn.png';
import githubImg from '../github-logo.png';

const Footer = () => {
    return ( 
        <>
        <footer className = "footer">
          <div style={{ justifyContent: 'center', display: 'flex', background:'black'  }}>
            <motion.div style={{padding:'1em'}} >
                <a href = "">


                <img src = {linkedIn} height= '100px' width = '100px' style={{borderRadius:'20%'}}></img>
                </a>
            </motion.div>
            <motion.div style={{padding:'1em'}} >
                <a href = "">

                <img src = {githubImg} height= '100px' width = '100px' style={{borderRadius:'20%'}}></img>
                </a>
            </motion.div>
          </div>


          {/* <Box sx={{ justifyContent: 'center', display: 'flex', marginTop: '1em' }}>
            <Stack direction='row'>
              <Button style={{ color: 'white' }}><Typography variant='h5' textTransform={'capitalize'}>LinkedIn</Typography></Button>
              <Button style={{ color: 'white' }}><Typography variant='h5' textTransform={'capitalize'}>GitHub</Typography></Button>
            </Stack>
          </Box> */}

      </footer>
        </>
     );
}
 
export default Footer;
