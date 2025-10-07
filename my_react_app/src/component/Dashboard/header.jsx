import icon from "../images/tasklogo.svg";
import "../style/Dashboard.css";

 
const Header = ({sidebarOpen,handlesidebarButton}) => {
       

    return (
            <header className="top-nav">
                <img src={icon} alt="logo" className="dashboard-logo"/>
                <span><h2>Dashboard</h2></span>
                <section className="sidebarButton" onClick={handlesidebarButton}>   
                        {sidebarOpen ? ( 
                         <>
                                <span>☰</span>
                        </>
                                )
                        :(
                                <span>✖</span>   
                        )}      
                </section>
            </header>
     );
}
 
export default Header;