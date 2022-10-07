import { motion } from "framer-motion";
import { useState } from "react";
import linkedIn from '../linkedIn.png';
import githubImg from '../github-logo.png';

const SiteLinks = () => {
    const [hoverLinked, setHoverLinked] = useState(false)
    const [hoverGithub, setHoverGithub] = useState(false)

    return ( 
        <div style={{ justifyContent: 'left', top: '500px', position: 'fixed' }}>

        <motion.div whileHover={{ width: '150px' }} onHoverStart={() => setHoverLinked(true)} onHoverEnd={() => setHoverLinked(false)} style={{ height: '75px', width: '75px', background: '#0072b1' }}>
          {hoverLinked ? <span style={{ display: 'flex', justifyContent: 'left' }}><img src={linkedIn} alt = "linkedIn" height="75px" width="75px" style={{ justifyContent: 'right', display: 'flex' }} /> <h3 style={{ color: 'white' }}>LinkedIn</h3></span>
            : <img src={linkedIn} alt = "linkedIn-single" height="75px" width="75px" style={{ justifyContent: 'left', display: 'flex' }} />
          }
        </motion.div>
        <motion.div whileHover={{ width: '150px' }} onHoverStart={() => setHoverGithub(true)} onHoverEnd={() => setHoverGithub(false)} style={{ height: '75px', width: '75px', border: 'solid', background: 'white', textAlign: 'right' }}>
          {hoverGithub ? <span style={{ display: 'flex', justifyContent: 'left' }}>  <img src={githubImg} alt = "github" height="75px" width="75px" style={{ justifyContent: 'right', display: 'flex' }} /> <h3 style={{ color: 'black' }}>GitHub</h3> </span> :
            <img src={githubImg} alt = "github-single" height="75px" width="75px" style={{ justifyContent: 'left', display: 'flex' }} />
          }
        </motion.div>
      </div>
     );
}
 
export default SiteLinks;