import { Grid } from '@mui/material';
import { motion } from 'framer-motion'
import { useState } from 'react';
import Modal from '../components/Modal';
import pokeAPI from '../pokeapi_256.png'
import gol from '../gol.png';

const Projects = () => {
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')
    const [description, setDescription] = useState('')

    const changeModal = (value: boolean) => {
        setShowModal(value)
    }

    const projects = [
        {
            name: "GridGames",
            description: "grid games here",
            logo: gol
        },
        {
            name: "PokeAPI",
            description: "POKEAPI app",
            logo: pokeAPI
        }
    ]

    console.log(pokeAPI)
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style ={{minHeight:'100vh'}}>
            <h1>THis is the projects page</h1>
            <Modal showModal={showModal} setShowModal={changeModal} projectName={projectName} description={description} />

            <Grid container spacing={3} sx={{ backgroundColor: 'transparent', justifyContent: 'center' }}>

                {projects.map((j: any) => <Grid item xs={12} md={5} sx={{ backgroundColor: '#332F2E', height: '200px', margin:'10px',  display: 'flex', justifyContent: 'center' }}
                    onClick={() => { setProjectName(j.name); setDescription(j.description);setShowModal(true) }}>
                    <motion.div >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={j.logo} height="150px" alt = {String(j.logo)}></img>
                        </div>
                        
                    </motion.div>
                </Grid>
                )}
            </Grid>
        </motion.div>
    );
}
export default Projects;