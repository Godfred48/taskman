import '../style/home.css';
import { motion } from "framer-motion";

const About = () => {
    return ( 
        <div className='main'>
            <h2 className='header'>About Us</h2>
            <div className="about">
                {/* Left section slides from left */}
                <motion.section 
                    className="section1"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2>Who We Are</h2>
                    <p>
                        We are a passionate team dedicated to building simple, powerful, 
                        and user-friendly tools that help you stay productive every day.
                    </p>
                </motion.section>

                {/* Right section slides from right */}
                <motion.section 
                    className="section1"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to make task management effortless
                        so you can focus on what really matters—achieving 
                        your goals and bringing your ideas to life.
                    </p>
                </motion.section>
            </div>
        </div>
     );
}
 
export default About;
