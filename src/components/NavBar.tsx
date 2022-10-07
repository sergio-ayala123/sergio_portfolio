import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {

    const [projectClick, setProjectClick] = useState(false)
    const [contactClick, setContactClick] = useState(false)
    const [blogClick, setBlogClick] = useState(false)

    const clickedButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.value === 'projects') {
            setProjectClick(true)
            setContactClick(false)
            setBlogClick(false)
        }
        else if (event.currentTarget.value === 'contact') {
            setContactClick(true)
            setProjectClick(false)
            setBlogClick(false)
        }
        else if (event.currentTarget.value === 'blog') {
            setBlogClick(true)
            setProjectClick(false)
            setContactClick(false)
        }
        else {
            setProjectClick(false)
            setContactClick(false)
            setBlogClick(false)
        }
    }

    return (
        <>
            <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none', height: '100px' }}>
                <Toolbar>

                    <Link to="/sergio_portfolio" style={{ textDecoration: 'none' }}>
                            <Button value='home' onClick={clickedButton}>
                        <Typography variant='h4' sx={{color: 'white'}}>

                                Sergio Ayala

                        </Typography>

                            </Button>
                    </Link>

                    <Box sx={{flexGrow:1,  display:"flex", justifyContent:'flex-end', m:10, }}>

                        <Link to="/sergio_portfolio/Projects" style={{ textDecoration: 'none' }}>

                            <motion.button value='projects' whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} onClick={clickedButton} className={projectClick ? 'clickedButton' : 'notClicked'}> <h5 style={{ fontSize: '19px', paddingRight:'1em' }} >Projects</h5></motion.button>
                        </Link>

                        <Link to="/sergio_portfolio/Contact" style={{ textDecoration: 'none' }}>
                            <motion.button value='contact' whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} onClick={clickedButton} className={contactClick ? 'clickedButton' : 'notClicked'}> <h5 style={{ fontSize: '19px', paddingRight:'1em' }} >Contact</h5></motion.button>
                        </Link>
                        <Link to="/sergio_portfolio/Blog" style={{ textDecoration: 'none' }}>
                            <motion.button value='blog' whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} onClick={clickedButton} className={blogClick ? 'clickedButton' : 'notClicked'}> <h5 style={{ fontSize: '19px' }} >Blog</h5></motion.button>


                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}


export default NavBar;