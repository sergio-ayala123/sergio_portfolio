import { motion } from 'framer-motion'
import NavBar from '../components/NavBar';

const Projects = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>THis is the projects page</h1>
        </motion.div>
    );
}

export default Projects;