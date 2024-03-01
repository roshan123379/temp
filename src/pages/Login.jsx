import { useState } from "react"
import { useAuth } from "../../Context/authProvider"
import {useNavigate} from "react-router-dom"
const Login = () => {
    const {storeToken} = useAuth()
    const [login, setLogin] = useState({

        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        let name = e.target.name
        let value = e.target.value

        setLogin({ ...login, [name]: value })
    }
    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault()
        console.log(login)

        try {
            const response = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            })
            console.log(response)
            if(response.ok){
                let res_data = await response.json()
                console.log(res_data)
                storeToken(res_data.Token)
                navigate("/")
            }
            
        } catch (error) {
            console.log("login fetchin eror", error)
        }
    }

    return (
        <>
            <div>
                <h1>Login form</h1>
                <form action="" onSubmit={submit}>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" value={login.email} onChange={inputHandle} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" value={login.password} onChange={inputHandle} />
                    </div>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>


        </>
    )

}
export default Login