import {  createContext , useEffect , useState} from "react";



export const UserContext = createContext();


const UserProvider = ({children}) =>{
 
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

    useEffect(() => {
        localStorage.setItem('user' , JSON.stringify(currentUser))
    }, [currentUser])

    return <UserContext.Provider value = {{currentUser , setCurrentUser}}>{children}</UserContext.Provider>
}


export default UserProvider; // Make sure this matches the component name
