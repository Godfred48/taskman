import "../style/Dashboard.css";
import {Link} from "react-router-dom";
import home from "../images/house.svg";
import dash from "../images/dash.svg";
import Logout from "../images/logout.svg";
import settings from "../images/settings.svg";
import task from "../images/list-task.svg";
const Sidebar = ({logout}) => {
    return (  
        <aside className="sidebar">
            <ul>
                <li><Link to="/"><img src={home} alt="home"/>Home</Link></li>
                <li><Link to="/dashboard"><img src={dash} alt="dashboard"/>Dashboard</Link></li>
                <li><Link to="/taskitem"><img src={task} alt="task" />Tasks</Link></li>
                <li><Link to="/settings"><img src={settings} alt="setting"/>Setting</Link></li>
                <li onClick={logout}><Link to="/login"><img src={Logout} alt="logout"/>Logout</Link></li>
            </ul>
        </aside>
    );
}
 
export default Sidebar;