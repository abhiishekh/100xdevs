import { Children, createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [auth, setAuth] = useState(null)
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
    
        if(token){
            setAuth(true)
        }
    },[])

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =() =>{
    return useContext(AuthContext)
}
