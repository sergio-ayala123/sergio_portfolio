import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Modal: React.FC<{ showModal: boolean, projectName:string,  setShowModal: (value:boolean) => void }> = (props) => {

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }
    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "200px",
            opacity: 1,
            transition: { delay: 0.1 }
        }
    }
    console.log('project name is: ', props.projectName)
    console.log('showModal is: ', props.showModal)
    return (
        <AnimatePresence exitBeforeEnter>
            {props.showModal && (
                <motion.div className="backdrop" variants={backdrop} animate="visible" initial="hidden" exit="hidden">
                    <motion.div className="modal" variants={modal} >
                        <p>{props.projectName}</p>
                        <button onClick={() => props.setShowModal(false)}>Close</button>
                    </motion.div>
                </motion.div>
            )}

        </AnimatePresence>
    );
}

export default Modal;