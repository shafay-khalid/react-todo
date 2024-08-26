import React , {useContext , useState , useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";


const AuthContext = React.createContext();

export function  useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}) {

    const [user,setUser] = useState({fullName : "" ,email :'', password :'', todos:{} } ) 
    const [currentUser , setCurrentUser] = useState(null);
    const [ userLoggedIn , setUserLoggedIn] =useState(false);
    const [loading ,setLoading] = useState(true);
 
    useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth,initializeUser)
          return unSubscribe
    },[])

    async function initializeUser(user) {
        if(user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false)
    }
    const value = {
        user,
        currentUser,
        userLoggedIn,
        loading,
    }
    return(
        <AuthContext.Provider value={value }>
            {!loading && children}
        </AuthContext.Provider>
    )

}