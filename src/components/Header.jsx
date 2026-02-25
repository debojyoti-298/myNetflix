import { onAuthStateChanged ,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser, removeUser} from "../utils/userSlice"
import { LOGO } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/userSlice";

const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
     useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
    
        dispatch(addUser({uid:uid , email: email , displayName: displayName , photoURL:photoURL}));
        // navigate("/browse"); // when the user sign in the page should navigate to browse page
        // ...
        navigate("/browse");
      } else {
        // User is signed out(if the user sign out I will dispatch another action)
        dispatch(removeUser())
        // navigate("/"); //When the user sign out the page should navite to main page
    
        // ...
        navigate("/");
      }
    });

    //unsubscribe onAuthStateChange when the component unmounts
    return () => unsubscribe();
        }, []);
    // const dispatch = useDispatch();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // dispatch(removeUser())  //Here we don't need dispatch action because the dispatch action has already been done by "onAuthStateChanged" api call in "Body.jsx" file
            // navigate("/")
              // Sign-out successful.
            }).catch((error) => {
                navigate("/error");
              // An error happened.
            });

    }
    return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-30 flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (<div className="flex p-2">
            <img  className="w-12 h-12 " src = {user?.photoURL} alt="usericon" />
            <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">(Sign Out)</button>
        </div>)}
        
    </div>
    )
}

export default Header;