// const currentYear = document.getElementById("currentyear");
// const year = new Date();
// currentYear.innerHTML=year.getFullYear();

// const lastModified = document.querySelector("#lastModified");
// lastModified.innerHTML=`Last Modified ${document.lastModified}`;
import { useState, useEffect } from 'react';
import '../style/home.css';

const DateComponent = () => {
    const [year,setYear]= useState("");

    useEffect( ()=> {
        const y = new Date();
        setYear( y.getFullYear())
    }
    ,[])


    return ( 
        <div className='date'>
                <p>&copy;{year} TaskMan. Accra-Ghana.</p>
                <p>Last Modified: {document.lastModified}</p>
        </div>
     );
}
 
export default DateComponent;