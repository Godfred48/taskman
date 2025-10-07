import Header from "./header";
import Sidebar from "./sidebar";
import Smsidebar from "./smsidebar";
import { useState } from 'react';
const Overview = () => {

    const [sidebarOpen, setsidebarOpen] = useState(true)
    const handlesidebarButton =()=>{
            setsidebarOpen(!sidebarOpen)
    }

    return (
        <div>
            <Header sidebarOpen={sidebarOpen} handlesidebarButton={handlesidebarButton}/>
            <Sidebar />
            {!sidebarOpen && <Smsidebar />}
        </div>
        
       
     );
}
 
export default Overview;