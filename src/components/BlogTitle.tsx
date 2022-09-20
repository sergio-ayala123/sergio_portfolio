import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react"
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import BlogEntry from "./BlogEntry";

const BlogTitle: React.FC<{ name: string }> = (props) => {

    return (
        <>
            <Link to={props.name}>
                <Card style={{ border: 'solid', padding:'4em'}}>
                    <h4>{props.name}</h4>
                </Card>
            </Link>
        </>
    );
}


export default BlogTitle;