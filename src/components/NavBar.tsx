import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"
const NavBar = () => {
    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: '#1e2021' }}>
                <Toolbar>

                    <Link to="/sergio_portfolio" style={{ textDecoration: 'none' }}>
                        <Button>
                            <Typography variant='h4' style={{ flexGrow: 1 }}>

                                Sergio Ayala

                            </Typography>
                        </Button>

                    </Link>

                    <Stack direction='row' spacing={2} style={{ flexGrow: 8 }}>
                        <Typography>

                            <Link to="/sergio_portfolio/Projects" style={{ textDecoration: 'none' }}>

                                <Button> <Typography variant='h5' textTransform={'capitalize'} >Projects</Typography></Button>
                            </Link>

                            <LinkScroll offset={-100} smooth spy to='contact' duration={300}>
                                <Link to="/sergio_portfolio/Contact" style={{ textDecoration: 'none' }}>

                                    <Button><Typography variant='h5' textTransform={'capitalize'}>Contact</Typography></Button>
                                </Link>
                            </LinkScroll>
                            <Link to="/sergio_portfolio/Blog" style={{ textDecoration: 'none' }}>
                                <Button><Typography variant='h5' textTransform={'capitalize'}>Blog</Typography></Button>


                            </Link>
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default NavBar;