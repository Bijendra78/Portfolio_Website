import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { animate, motion } from "framer-motion";


const btnclik = ()=>({

})
const iconAnimate = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeatType: "reverse",
      repeat : Infinity,
    },
  },
});
const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl hover:underline ">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconAnimate(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4  border-neutral-800 p-4">
          <IoLogoHtml5 className="text-7xl  text-orange-600" />
        </motion.div>
        <motion.div
        variants={iconAnimate(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
        variants={iconAnimate(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
        variants={iconAnimate(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconAnimate(2.5)}
        initial="initial"
        animate="animate"
        onClick={btnclik}
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div 
        variants={iconAnimate(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconAnimate(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-white-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
