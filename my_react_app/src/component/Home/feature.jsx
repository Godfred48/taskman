import Task from "../images/taskman.svg";
import Ai from "../images/ai.svg";
import Data from "../images/data.svg";
import '../style/home.css';
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // start lower + invisible
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Services = () => {
    return ( 
        <div className="containerFeature">
            <h1>Features/Services</h1>
            <div className="cardContainer">
                <motion.section 
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} // triggers only once when 20% visible
                >
                    <aside>
                        <img src={Task} alt="taskman" />
                        <span>Task Management</span>
                        <p>Efficiently organize, assign, and track tasks in one place. 
                            TaskMan ensures deadlines are met and productivity 
                            stays on track.</p>
                    </aside>
                </motion.section>

                <motion.section 
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                    <aside>
                        <img src={Ai} alt="ai" />
                        <span>AI Suggestions</span>
                        <p>Boost productivity with intelligent recommendations. 
                            TaskMan’s AI suggests task prioritization, workflow improvements, 
                            and resource allocation tailored to your needs.</p>
                    </aside>
                </motion.section>

                <motion.section 
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                    <aside>
                        <img src={Data} alt="dashboard" />
                        <span>Analytical Dashboard</span>
                        <p>
                        Gain real-time insights with a powerful dashboard 
                        that tracks performance, progress, 
                        and team efficiency through clear visual reports.
                        </p>
                    </aside>
                </motion.section>
            </div>
        </div>
     );
}
 
export default Services;