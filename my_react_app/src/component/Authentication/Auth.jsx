import userIcon from "../images/user-icon.svg";
import { useState } from "react";
import users from "../script/info";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import '../style/Auth.css';
import Navbar from "./navbar";
import { AuthContext } from "../context/AuthContext";
import Blueback from '../images/blueback.webp';
const AuthPage = () => {

    //assigning use State values
    const [email ,setEmail] = useState("");
    const [password ,setPassword]= useState("");
    const [loading ,setLoading] = useState(false);
    const [error ,setError] = useState("");
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    
    //function that processes the login button
    const handleLogin=()=>{
        setLoading(true);

        //checking if all fields are filled 
        if(!email || !password){
            setError("Please fill all fields");
            setLoading(false)
            return;
        }

        //check if user exixt in database
        const foundUser = users.find((user)=>
            user.email === email && user.password ===password
        );

        //if user dosent exist
        if (!foundUser){
            setError("Invalid email or pasword");
            setLoading(false);
            return;
        }


         //if exist save into localstorage
        console.log("Found user:", foundUser);
        login(foundUser);

        //if fieldsare correct and submitted 
        setError("");

        setTimeout(()=>{
            console.log ("Login successful")
            //navigvte user to home 
            navigate("/");
            setLoading(false);
        }, 2000);
    }

    return (  
        <div className="auth">
            <Navbar />
                {/*background8*/}
                <img src={Blueback} className="backimage" alt="background" />

                <form className="login-form">
                <div class="container">
               
                    <div class="inner-container">
                        <section class="main-container">
                            {/*Email Input*/}
                            <div class="caption">
                                <img src={userIcon} alt="user-logo" />
                                <h2 className="login-title">Login</h2>
                            
                            </div>
                            {/*signal*/}
                            {error 
                                && 
                                <div class="error"><p>{error}</p></div>
                            }
                            {loading && <div class="loading"><p>Please wait, logging in...</p></div>}
                            <input 
                            type = "email"
                            placeholder ="Email"
                            value ={email}
                            onChange = {(e) => setEmail(e.target.value)}
                            />

                            {/*Password*/}
                            <input 
                            type = "password"
                            placeholder ="Password"
                            value ={password}
                            onChange = {(e) => setPassword(e.target.value)}
                            />
                            
                            {/*button*/}
                            <button onClick={handleLogin} diabled={loading}>
                                {loading ? "Logging in..." : "Login"}
                            </button>
                            <div  class="verify"><p>Dont have an accout?</p> <button>Create account</button></div>
                            
                        </section>
                    </div>

                </div>
                </form>

            </div>
            
    );
}
 
export default AuthPage