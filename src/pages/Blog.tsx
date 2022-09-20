import { Card, Grid } from "@mui/material";
import BlogEntry from "../components/BlogTitle";
import ReactMarkdown from "react-markdown";
import ReactDom from 'react-dom'
import { useEffect, useState } from "react";
import BlogTitle from "../components/BlogTitle";

const Blog = () => {


    const mdFileNames = ["test", "other", "bob", "chef"]



    return (
        <>
            <h1>Blogs go here

            </h1>

            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {mdFileNames.map(i => <BlogTitle name={i} />)}
            </Grid>
        </>
    );
}

export default Blog;