import { Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import BlogEntry from "./BlogEntry";

import {AnimatePresence} from 'framer-motion'
import Contact from "../pages/Contact";


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <>
        <AnimatePresence exitBeforeEnter>

            <Routes location={location} key = {location.pathname}>
                <Route path='/sergio_portfolio' element={<App />} />
                <Route path='/sergio_portfolio/Projects' element={<Projects />} />
                <Route path='/sergio_portfolio/Contact' element={<Contact />} />

                <Route path='/sergio_portfolio/Blog' element={<Blog />} />
                <Route path='/sergio_portfolio/Blog/:title' element={<BlogEntry />} />
            </Routes>

        </AnimatePresence>
        </>
    );
}

export default AnimatedRoutes;