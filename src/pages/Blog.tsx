import {Grid } from "@mui/material";
import { motion } from "framer-motion";
import BlogTitle from "../components/BlogTitle";

const Blog = () => {


    const mdFileNames = ["Hashmaps_Collections_Stacks", "Javascript_Classes","Python_TDD", "SCC_Algorithm"]

    return (
        <motion.div className="Blog" initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity:0}}>
            <h1>Blogs go here</h1>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {mdFileNames.map(i => <BlogTitle name={i} />)}
            </Grid>
            
        </motion.div>
    );
}
 
export default Blog;

