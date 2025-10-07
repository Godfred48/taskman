import "../style/Dashboard.css";
const Sidebar = () => {
    return (  
        <aside className="sidebar">
            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Tasks</li>
                <li>Setting</li>
                <li>Logout</li>
            </ul>
        </aside>
    );
}
 
export default Sidebar;