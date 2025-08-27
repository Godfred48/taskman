import React, { useState } from 'react';
import logo from '../images/logo.svg';
import loginIcon from '../images/login-icon.svg'
import '../style/home.css';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);
    //handles the menu button
    const handleOpen = ()=>{
        setisOpen(!isOpen);
    }
    return ( 
       <nav className="Navbar">
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
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Contact</li>
            </motion.ul>
            )}
        </AnimatePresence>
        </section>
        <section className={`loginButton ${isOpen ? "show" :"hide"}`}>
            <button className="login"><img src={loginIcon} alt="iconlogo"/><p>Login</p></button>
        </section>
        
        
       </nav>
     );
}
 
export default Navbar;