import { onAuthStateChanged ,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser, removeUser} from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/userSlice";

const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

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


    const handleGptSearchClick = ()=>{
      //Toggle Gpt search button
      dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e)=>{
      console.log(e.target.value);
      dispatch(changeLanguage(e.target.value))

    }
    return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-30 flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="flex p-2">
            {showGptSearch && (<select className="p-2 m-2 bg-white text-black" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>)}
            <button className="text-white mx-4 py-2 px-4 my-2 bg-purple-800 rounded-lg" onClick={handleGptSearchClick}>{showGptSearch? "Homepage" : "GPT Search"}</button>
            <img  className="w-12 h-12 " src = {user?.photoURL} alt="usericon" />
            <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">(Sign Out)</button>
        </div>
      )}
        
    </div>
    )
}

export default Header;