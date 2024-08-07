import React from "react";
import Logo from "../assets/BR-logo1.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  const btnClicked = function(){
    console.log("DATA")
  };
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={Logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub className="" onClick={btnClicked} />
        <FaInstagram/>
        <FaLinkedin />
        <FaTwitterSquare />
      </div>
    </nav>
  )
};

export default Navbar;
