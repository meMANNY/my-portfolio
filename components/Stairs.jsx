import {animate, motion} from 'framer-motion'

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate:{
    top: "100%",
  },
  exit:{
    top: ["100%", "0%"],
  }
}
//calculate the reversed index
const reverseIndex = (index)=>{
  const total_steps = 6;
  return total_steps - index-1;
};
const Stairs = () => {
  return( 
  <>
    {

    }
    {[...Array(6)].map((_, index) => {
      return (<motion.div key = {index} variants = {stairAnimation} 
        initial = "initial" animate = "animate" exit = "exit" transition={{
          duration: 0.4,
          delay: reverseIndex(index) * 0.1,
          ease: "easeInOut"
        }}
        className = "h-full w-full bg-emerald-500 relative"/>);
    })}
  </>
  );
}

export default Stairs
