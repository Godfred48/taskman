import React, { useState } from 'react';
import logo from '../images/logo.svg';
import loginIcon from '../images/login-icon.svg'
import '../style/home.css';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);
    //handles the menu button
    const handleOpen = ()=>{
        setisOpen(!isOpen);
    }
    return ( 
       <nav className="Navbar" >
        <section className="logo">
            <img src={logo} alt="logo" />
             <motion.button className='menuButton'
             onClick={handleOpen}
             whileTap={{scale:0.8}}>
                <AnimatePresence mode="wait">
                {!isOpen ? (<motion.span
                 key="menu"
                 initial={{ opacity: 0, rotate: -90 }}
                 animate={{ opacity: 1, rotate: 0 }}
                 exit={{ opacity: 0, rotate: 90 }}
                 transition={{ duration: 0.5 }}
               >
                ☰</motion.span>) :(
                <motion.span
                key="close"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.5 }}
              >✖</motion.span>)}
              </AnimatePresence>
              </motion.button>
        </section>

        {/* Desktop Nav */}
        <section className="nav-link desktop">
        <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        </section>

        <section className={`nav-link ${isOpen ? "show" : "hide"}`}>
        <AnimatePresence mode="wait">
            {isOpen && (
            <motion.ul
                key="menu"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </motion.ul>
            )}
        </AnimatePresence>
        </section>
        <section className={`loginButton ${isOpen ? "show" :"hide"}`}>
            <RouterLink to="/login" className="login-link">
             <button className="login"><img src={loginIcon} alt="iconlogo"/><p>Login</p></button>
            </RouterLink>
        </section>
        
        
       </nav>
     );
}
 
export default Navbar;