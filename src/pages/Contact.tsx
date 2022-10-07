import { motion } from "framer-motion";
import SiteLinks from "../components/SiteLinks";

const Contact = () => {
    return (
        <motion.div className="Blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>Form for contact goes here. </h1>
            <SiteLinks />
            
        </motion.div>
    );
}

export default Contact;