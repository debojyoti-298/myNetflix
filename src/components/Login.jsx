import { useState } from "react";
import Header from "./Header";
const Login = () =>{

    const [isSignInForm,setIsSignInForm] =useState(true);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)

    }
    return (
    <div>
        <Header />
        <div className="absolute">
            <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg" alt="logo"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg opacity-75">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
            {!isSignInForm? <input type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full"/> :""}
            <input type="text" placeholder="Email Address" className="p-4 my-4 bg-gray-700 w-full"/>
            <input type="password" placeholder="Password" className="p-4 my-4 bg-gray-700 w-full"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign Up now":"Already registered?Sign In now..."}</p>
        </form>
        
    </div>)
}

export default Login;