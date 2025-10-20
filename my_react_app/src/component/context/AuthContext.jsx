import { createContext, useState, useEffect } from "react";
//create the useContext NB it needs to be exported
export const AuthContext = createContext();

//create a function that will contain all context for user authentication NB it need 
//to be exported 
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); //used null because if user is not logged in it is recorded as null
    const [loadingAuth, setloadingAuth] = useState(true);
    //create useeffect to check if user is log in via local storage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
        setloadingAuth(false);
    },[]);

    //login function
    const login = (userData) =>{//not we used userdata as parameter because we used it to represent found user in mockup database
        setUser(userData);// lest fix found user into localstorage 
        localStorage.setItem("user",JSON.stringify(userData));
    };

    //logout function 
    const logout =()=>{
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{user,login,logout,loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )


}



