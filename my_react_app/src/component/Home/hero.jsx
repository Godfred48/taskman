import heroImage from '../images/home.webp';
import {motion} from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
const Hero = () => {
    return (  
        <div className="hero">
            {/*background picture*/}
            <img src={heroImage} alt="heroBackground" />

            {/*overlay*/}
            <div className='backgroundOverlay'></div>

           {/* content */}
           <motion.section 
                className="bigHeading"
                initial={{ opacity: 0, y: 50 }}   // start hidden + slightly below
                animate={{ opacity: 1, y: 0 }}   // fade in + move up
                transition={{ duration: 1, ease: "easeOut" }} // smooth transition
            >
                <h1>Build Smarter with TaskMan</h1>
                <p>Track, Manage and Grow Effortlessly Daily with your activities.</p>
            </motion.section>

            <motion.section 
                className="heroButton"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // appear after heading
            >
                <RouterLink to="/login">
                    <motion.button 
                            className="button1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Get Started</span>
                    </motion.button>
                </RouterLink>

                <motion.button 
                    className="button2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Learn More</span>
                </motion.button>
            </motion.section>
        </div>
    );
}
 
export default Hero;