import { useState } from "react"
import { useAuth } from "../../Context/authProvider"
import { useNavigate ,NavLink} from "react-router-dom"
const Login = () => {
    const { storeToken } = useAuth()
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
            if (response.ok) {
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
            <div className="login">
                <div className="formDiv">
                    <p className="loginHead">Login form</p>
                    <form action="" className="loginForm" onSubmit={submit}>

                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" value={login.email} onChange={inputHandle} />
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input type="password" name="password" id="password" placeholder="Enter Your Password" value={login.password} onChange={inputHandle} />
                        </div>
                        <div>
                            <button type="submit" >Login</button>
                            <p className="notmember">Not a member? <span><NavLink to="/signup">Sign up</NavLink></span></p>
                        </div>
                    </form>
                </div>

            </div>


        </>
    )

}
export default Login