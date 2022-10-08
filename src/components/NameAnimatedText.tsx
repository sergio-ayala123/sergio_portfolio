
import Typical from 'react-typical'

const NameAnimatedText = () => {

    // const words = props.text.split("");
    // console.log(words)
    // console.log(Math.random()*1)
    // const container = {
    //     hidden:{opacity:0}, 
    //     visible: (i =1)=> ({
    //         opacity:1,
    //         transition:{staggerChildren:0.29, delayChildren:i*(Math.random()*1)}
    //     })
    // }

    // const child = {
    //     visible: {
    //         opacity:1, 
    //         x:0, 
    //         transition: {duration: 0}
    //             }, 
    //     hidden: {
    //         opacity:0, 
    //         x:20, 
    //         transition:{
    //             type:"spring", 
    //             damping:12, 
    //             stiffness:100
    //         }
    //     }

    // }

    return ( 
        // <motion.div variants = {container} initial = "hidden" animate = "visible" style = {{display:'flex', justifyContent:'center'}}>
        // {words.map((word:string, index:number) => <motion.span variants = {child} style= {{marginRight:'5px', color:'white', fontSize:'50px'}}>
        //     {word}
        //     </motion.span>)}


        // </motion.div>

        <>
        
        <h3>
        I'm a   {'   '}
        <Typical
        loop = {Infinity}
        steps = {[' Software Engineer',1000, ' BackEnd Developer', 1000]}
        wrapper = 'h3' />

        </h3>
        
        </>
     );
}
 
export default NameAnimatedText;