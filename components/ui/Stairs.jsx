// import { MotionConfig } from "framer-motion"
import {animate, motion} from 'framer-motion'


const stairAnimation = {
	initial:{
		top:"0%",
	},
	animate:{
		top:"100",
	},
	exit:{
		top: ["100%", "0%"]
	},
}


// kalkulasi kebalikan index (delay)

const reverseIndex = () =>{
	const totalSteps = 6;
	return totalSteps - index - 1;
}


const Stairs = () => {
		return (
				<>
				{/* render  animasi motion div*/}
				{[...Array(6)].map((_, index)=>{
					<motion.div key={index} variants={stairAnimation} initial="initial"
					animate = "animate" exit = "exit"/>
				}) }
				</>
		)
}
export default Stairs