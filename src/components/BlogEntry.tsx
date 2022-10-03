import {useParams } from 'react-router-dom'
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react"


const BlogEntry = () => {
    const { title } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        console.log("../" + title + ".md")
        fetch("../" + title + ".md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);


    return (
        <div className='Blog'>
            <p className='date'>{title}</p>
           
            <ReactMarkdown children={content}  />
        </div>
    );
}

export default BlogEntry;