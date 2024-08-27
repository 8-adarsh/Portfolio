import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div
            className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/adarsh-kumar-lal/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin/></a>
        
        <a href="mailto:adarshkumarpro@gmail.com">
        <CiMail/>
        </a>
       <a href="https://leetcode.com/u/Adarshcodes88/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode/>
       </a>
        <a href="https://github.com/8-adarsh" target="_blank" rel="noopener noreferrer">
        <FaGithub/>
      </a>
      <a href="https://www.instagram.com/_adarsh_881?igsh=MXE4b2g2c2xiMnhjbA==" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
      </a>
        </div>
    </nav>
  )
}

export default Navbar
