import { Card, Grid } from "@mui/material";
import BlogEntry from "../components/BlogTitle";
import ReactMarkdown from "react-markdown";
import ReactDom from 'react-dom'
import { useEffect, useState } from "react";
import BlogTitle from "../components/BlogTitle";

const Blog = () => {


    const mdFileNames = ["9-20-2022", "9-21-2022","9-27-2022_1", "9-30-2022"]

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