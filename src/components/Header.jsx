import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/userSlice";

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    // const dispatch = useDispatch();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // dispatch(removeUser())  //Here we don't need dispatch action because the dispatch action has already been done by "onAuthStateChanged" api call in "Body.jsx" file
            navigate("/")
              // Sign-out successful.
            }).catch((error) => {
                navigate("/error");
              // An error happened.
            });

    }
    return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-30 flex justify-between">
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

        {user && (<div className="flex p-2">
            <img  className="w-12 h-12 " src = {user?.photoURL} alt="usericon" />
            <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">(Sign Out)</button>
        </div>)}
        
    </div>
    )
}

export default Header;