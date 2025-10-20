import "../style/Dashboard.css";
import {Link} from "react-router-dom";
const Sidebar = ({logout}) => {
    return (  
        <aside className="sidebar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/taskitem">Tasks</Link></li>
                <li><Link to="/settings">Setting</Link></li>
                <li onClick={logout}><Link to="/login">Logout</Link></li>
            </ul>
        </aside>
    );
}
 
export default Sidebar;