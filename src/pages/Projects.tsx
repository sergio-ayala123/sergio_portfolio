import { Grid } from '@mui/material';
import { motion } from 'framer-motion'
import { useState } from 'react';
import Modal from '../components/Modal';

const Projects = () => {
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')


    const changeModal = (value: boolean) => {
        setShowModal(value)
    }

    const projects = [
        {
            name: "GridGames",
            description: "grid games here"
        },
        {
            name: "PokeAPI",
            description: "POKEAPI app"
        }
    ]


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>THis is the projects page</h1>
            <Modal showModal={showModal} setShowModal={changeModal} projectName = {projectName} />

            <Grid container spacing={3} sx={{ backgroundColor: 'transparent', justifyContent: 'center' }}>

                {projects.map((j: any) => <Grid item xs={12} md={5} sx={{ backgroundColor: 'white', margin: '10px' }}>
                    <span onClick={() => {setProjectName(j.name); setShowModal(true)}}>
                        <p style={{ color: 'red' }}>{j.name}</p>
                        <p style={{ color: 'red' }}>{j.description}</p>
                    </span>

                </Grid>)}
            </Grid>
        </motion.div>
    );
}
export default Projects;