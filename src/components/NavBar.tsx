import { AppBar, Button, IconButton, Menu, MenuItem, MenuList, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"
const NavBar = () => {
    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: '#2E82B3' }}>
                <Toolbar>

                    <Typography variant='h4' style={{ flexGrow: 1 }}>
                        Sergio Ayala
                    </Typography>

                    <Stack direction='row' spacing={2}>
                        <Typography>
                            <LinkScroll offset={-100} smooth spy to='about' duration={300}>
                                <Button style={{ color: 'white' }}> <Typography variant='h5' textTransform={'capitalize'}>About</Typography></Button>
                            </LinkScroll>
                            <LinkScroll offset={-100} smooth spy to='projects' duration={300}>
                                <Button style={{ color: 'white' }}> <Typography variant='h5' textTransform={'capitalize'}>Projects</Typography></Button>
                            </LinkScroll>

                            <LinkScroll offset={-100} smooth spy to='contact' duration={300}>

                                <Button style={{ color: 'white' }}><Typography variant='h5' textTransform={'capitalize'}>Contact</Typography></Button>
                            </LinkScroll>
                            <Link to="/Blog">
                                <Button style={{ color: 'white', textDecoration:'none' }}><Typography variant='h5' textTransform={'capitalize'}>Blog</Typography></Button>


                            </Link>
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default NavBar;