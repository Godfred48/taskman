import Header from "./header";
import Sidebar from "./sidebar";
import Smsidebar from "./smsidebar";
import { useState, useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import Dashcontent from "./dashcontent";
const Overview = () => {

    const [sidebarOpen, setsidebarOpen] = useState(true)
    const handlesidebarButton =()=>{
            setsidebarOpen(!sidebarOpen)
    }

    // in context userdata in localstorage has been assigned as user 
    const {user} = useContext(AuthContext);


    return (
        <div>
            <Header sidebarOpen={sidebarOpen} handlesidebarButton={handlesidebarButton}/>
            <Sidebar />
            <Smsidebar sidebarOpen={!sidebarOpen} />
            <Dashcontent user={user}/>
        </div>
        
       
     );
}
 
export default Overview;