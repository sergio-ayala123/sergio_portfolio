import {Grid } from "@mui/material";
import BlogTitle from "../components/BlogTitle";

const Blog = () => {


    const mdFileNames = ["Hashmaps_Collections_Stacks", "Javascript_Classes","Python_TDD", "SCC_Algorithm"]

    return (
        <div className="Blog">
            <h1>Blogs go here</h1>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {mdFileNames.map(i => <BlogTitle name={i} />)}
            </Grid>
            
        </div>
    );
}
 
export default Blog;

