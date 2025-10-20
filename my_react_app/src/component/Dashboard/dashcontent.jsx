import "../style/Dashboard.css";
import AddButton from "../images/plus-circle.svg";
import { useNavigate } from 'react-router-dom';
import AddTask from "../images/addt.jpeg";
import aI from "../images/aiassist.png";
import View from "../images/viewt.jpeg";
import Chart from "../images/charts.jpeg";
const Dashcontent = ({user}) => {

    const navigate = useNavigate();
    const addTaskHandle = (e) => {
        e.preventDefault(); // prevemts page reload 
        navigate("/addtask");
    }

    return ( 
        <div className="main-content">
            <section className="sec1">
                <h1>Welcome {user?.firstname}</h1>
                <aside onClick={addTaskHandle}>
                <img src={AddButton} alt="addButton" className="addbutton" /> 
                <span className="addtext">Add Task</span>
                </aside>
            </section>

            <section className="sec2">
                <div className="dashcontent"> 
                    <aside className="photo-content">
                        <img src={AddTask} alt="addtask" />
                    </aside>
                    <button>Add Task</button>
                </div>

                <div className="dashcontent"> 
                    <aside className="photo-content">
                        <img src={aI} alt="addtask" />
                    </aside>
                    <button>AI assistance</button>
                </div>

                <div className="dashcontent"> 
                    <aside className="photo-content">
                        <img src={View} alt="addtask" />
                    </aside>
                    <button>View Task</button>
                </div>

                <div className="dashcontent"> 
                    <aside className="photo-content">
                        <img src={Chart} alt="addtask" />
                    </aside>
                    <button>View Progress chart</button>
                </div>

            </section>
            
        </div>
     );
}
 
export default Dashcontent;