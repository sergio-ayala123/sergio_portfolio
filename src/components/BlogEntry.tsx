import {Link, useParams} from 'react-router-dom'
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react"

const BlogEntry = () => {
     const {title} = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        console.log("../" +title + ".md")
        fetch("../" +title + ".md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);



    return ( 
        <>
        <ReactMarkdown children={content}/>
        </>
     );
}
 
export default BlogEntry;