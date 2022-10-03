import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import './BlogEntry.css'

const BlogTitle: React.FC<{ name: string }> = (props) => {

    return (
        <div className = "Blog">
            <Link to={props.name}>
                <Card style={{ border: 'solid', padding:'4em'}}>
                    <h4>{props.name}</h4>
                </Card>
            </Link>
        </div>
    );
}



export default BlogTitle; 