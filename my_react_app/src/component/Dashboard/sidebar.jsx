import "../style/Dashboard.css";
const Sidebar = ({logout}) => {
    return (  
        <aside className="sidebar">
            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Tasks</li>
                <li>Setting</li>
                <li onClick={logout}>Logout</li>
            </ul>
        </aside>
    );
}
 
export default Sidebar;