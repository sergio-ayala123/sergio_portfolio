import {useParams } from 'react-router-dom'
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react"
import CodeBlock from './CodeBlock';

const BlogEntry = () => {
    const { title } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        console.log("../" + title + ".md")
        fetch("../" + title + ".md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    });


    return (
        <div className='Blog'>
           <article>

            <ReactMarkdown children={content} components = {{code:CodeBlock}} />
           </article>
        </div>
    );
}

export default BlogEntry;