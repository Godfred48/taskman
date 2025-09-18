import icon from "../images/tasklogo.svg";
import logout from "../images/logout.svg";
import "../style/Dashboard.css";

const Header = () => {

    return (
            <header className="top-nav">
                    <img src={icon} alt="logo" className="dashboard-logo"/>
                    <span><h2>Dashboard</h2></span>
                    <button className="logout-button">
                         <img src={logout} alt="logout" />
                         <span><p>Logout</p></span>
                    </button>
            </header>
     );
}
 
export default Header;