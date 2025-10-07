import { motion, AnimatePresence } from "framer-motion";
import "../style/Dashboard.css";

const Smsidebar = ({ sidebarOpen }) => {
  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.aside
          className="smsidebar"
          initial={{ x: "-100%" }}       // hidden off-screen left
          animate={{ x: 0 }}             // slides in
          exit={{ x: "-100%" }}          // slides out
          transition={{ duration: 0.3, ease: "easeInOut" }} // smooth motion
        >
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Tasks</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Smsidebar;