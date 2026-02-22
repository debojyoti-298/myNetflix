import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../utils/firebase";   
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () =>{

    const [isSignInForm,setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const name = useRef(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick =()=>{
        //Validate the form data
        // console.log(name.current.value);
        // console.log(email.current.value);
        // console.log(password.current.value);
    //    const message = checkValidData(name.current.value, email.current.value,password.current.value);
       const message = checkValidData( email.current.value,password.current.value);
       console.log(message);
       setErrorMessage(message);

       //Once validation is done then we can proceed for Sign In/ Sign Up


       if(message) return; //if the error message is present don't go ahead just return it


       //If no error error message is present then we will go for sign in/sign up user logic

       if(!isSignInForm){
        //Here !isSignInForm that means Sign Up form logic

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
  displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D4E03AQHfatkImZCN6w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726410512119?e=1773273600&v=beta&t=doe6-TwHHK8YtX9Pio63yY5ehWDql_o1AW2Mou7ve4Y",
}).then(() => {
  // Profile updated!
  const { uid, email, displayName, photoURL } = auth.currentUser;
  dispatch(addUser({uid:uid , email: email , displayName: displayName , photoURL:photoURL}));
  navigate("/browse")
  // ...
}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error.message)
});
          console.log(user);
          
          // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });

        // auth
       }else{
        //Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });

       }
    }
    return (
    <div>
        <Header />
        <div className="absolute">
            <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg" alt="logo"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg opacity-75">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
            {!isSignInForm? <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full"/> :""}
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 bg-gray-700 w-full"/>
            <input ref={password} type="password" placeholder="Password" className="p-4 my-4 bg-gray-700 w-full"/>
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign Up now":"Already registered?Sign In now..."}</p>
        </form>
        
    </div>)
}

export default Login;