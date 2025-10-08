import "../style/Dashboard.css";
import AddButton from "../images/plus-circle.svg";
const Dashcontent = ({user}) => {
    return ( 
        <div className="main-content">
            <section className="sec1">
                <h1>Welcome {user?.firstname}</h1>
                <aside>
                <img src={AddButton} alt="addButton" className="addbutton" /> 
                <span className="addtext">Add Task</span>
                </aside>
            </section>
            
        </div>
     );
}
 
export default Dashcontent;