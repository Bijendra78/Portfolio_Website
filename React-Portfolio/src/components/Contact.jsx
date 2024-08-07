import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div 
   
    className="border-b border-neutral-800 pb-20">
      <motion.h1 
       whileInView={{opacity:1 , y:0}}
       initial={{opacity:0 ,y:50}}
       transition={{duration: 0.5}}
      className="my-10 text-center text-4xl ">Get in touch</motion.h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="" className="border-b text-blue-600">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;