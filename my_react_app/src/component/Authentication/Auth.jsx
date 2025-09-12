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
    const [confirmPass, setconfirmPass] = useState("");
    const [isLogin ,setisLogin] = useState(true);
    const [newPassword ,setnewPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phone ,setPhone] = useState("");
    const [newEmail , setnewEmail] = useState("");
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleSignUp=()=>{
        //process begin 
        setLoading(true);

        //checking if all fields are filled
        if( !firstName || !lastName || !newEmail || !newPassword || !confirmPass){
            setError("Please fill all fields")
            setLoading(false);
            return;
        }
            //check if password are the same 
        if (newPassword!== confirmPass){
            setError("Incorrect password")
            setLoading(false)
            return;
        }

        //check if user already exist
        const existingUser = users.find((user)=> user.email===email || user.phone === phone);
        if (existingUser){
            setError("User already exist!!");
            setLoading(false);
            return;
        }
        
        //create user object
        const newUser = {
            firstname: firstName,
            lastname: lastName,
            password: newPassword,
            username: `${firstName}" "${lastName}`,
            phone: phone,
        };

        //add to mockdatabase
        users.push(newUser);
        console.log("New User added");

        //Erro free process
        setError("");
        setTimeout(()=>{
            alert("Account created successfully!");
            setisLogin(true); //back to login page
            setLoading(false);
        }, 2000);
    };
    
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
                            <div class="caption">
                                <img src={userIcon} alt="user-logo" /> 
                                <h2 className="login-title">{isLogin ? "Login" : "SignUp"}</h2>
                            </div>
                            {/*signal*/}
                            {error 
                                && 
                                <div class="error"><p>{error}</p></div>
                            }
                            {loading && <div class="loading"><p>Please wait, logging in...</p></div>}

                            {/*conditional forrm*/}
                            {isLogin ? (
                            <>
                                {/*Email Input*/}
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
                            <div  class="verify"><p>Dont have an accout?</p> <button onClick={()=>{setisLogin(false);setError("");}}>Create account</button></div>
                                
                            </>
                            ):(
                            <>
                            <input
                                type="text"
                                placeholder="Fisrt Name *"
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Last Name *"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                value={newEmail}
                                onChange={(e) => setnewEmail(e.target.value)}
                            />

                            <input
                                type="phone"
                                placeholder="Phone Number *"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />          

                            <input
                                type="password"
                                placeholder="Password *"
                                value={newPassword}
                                onChange={(e) => setnewPassword(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password *"
                                value={confirmPass}
                                onChange={(e) => setconfirmPass(e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={handleSignUp}
                                disabled={loading}
                            >
                                {loading ? "Creating account..." : "Sign Up"}
                            </button>

                            <div className="verify">
                                <p>Already have an account?</p>
                                <button
                                type="button"
                                onClick={() => {setisLogin(true); setError("");}}//back to login page 
                                >
                                Back to Login
                                </button>
                            </div>
                                            
                            </>
                            )}    
                        </section>
                    </div>
            </div>
            </form>

        </div>
            
    );
}
 
export default AuthPage