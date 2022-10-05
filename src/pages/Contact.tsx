import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div className="Blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>Form for contact goes here. </h1>
        </motion.div>
    );
}

export default Contact;