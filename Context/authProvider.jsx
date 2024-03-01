import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem("token"))
    const [store , setStore] = useState("")
    const [Data,setData] = useState("")

    const isloggin = !!token
    console.log(isloggin)


    const storeToken = (storeToken)=>{
        setToken(storeToken)
        localStorage.setItem("token",storeToken)
    }

    const logout = () =>{
        setToken("")
        localStorage.removeItem("token")
    }

    const getServices = async() => {
        try {
            const response =await fetch("http://localhost:8000/api/auth/service", {
                method: "GET"
            })
            if (response.ok) {
                const serviceData = await response.json()
               
                console.log(serviceData.msg)
                setStore(serviceData.msg)
            }


        } catch (error) {
            console.log("not fetch data of service", error)
        }
    }

    const userData = async()=>{
        const response = await fetch("http://localhost:8000/api/auth/userData",{
            method:"GET",
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(response)
        const res_userData = await response.json()
        console.log(res_userData.Data)
        setData(res_userData.Data)
    }
    useEffect(() => {
        getServices()
        userData()
       
    }, [])

    return (
    <AuthContext.Provider value={{storeToken,logout, isloggin,store,Data}} >
        {children}
    </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const AuthUseContext = useContext(AuthContext)
    if (!AuthUseContext) {
        throw new Error({ msg: "authuseContext not found" })
    }
    return AuthUseContext
}