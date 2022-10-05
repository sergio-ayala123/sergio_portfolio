import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import './BlogEntry.css'
import {motion} from 'framer-motion'
const BlogTitle: React.FC<{ name: string }> = (props) => {

    return (
        <div className = "Blog">
            <Link to={props.name}>
                <motion.button whileHover = {{scale:1.2}} whileTap = {{scale:0.7}} style={{ border: 'solid', padding:'1em', backgroundColor:'#383235'}}>
                    <h4>{props.name}</h4>
                </motion.button>
            </Link>
        </div>
    );
}



export default BlogTitle; 