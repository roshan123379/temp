import { useState } from "react"
import { useAuth } from "../../Context/authProvider"
import { NavLink, useNavigate } from "react-router-dom"

const Signup = () => {
    const {storeToken} = useAuth()

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInput({ ...input, [name]: value })
    }
    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:8000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            })
            console.log(response)
            if (response.ok) {
                navigate("/")
                let res_data = await response.json()
                console.log(res_data)
                storeToken(res_data.Token)

            }

        } catch (error) {
            console.log("signup fetchin eror", error)
        }
    }

    return (
        <>
            <div className="signup">
            <div className="formDiv">
            <p className="signupHead">Signup form</p>
                <form action="" className="signupform" onSubmit={submit}>
                    <div>
                        <label htmlFor="username"></label>
                        <input type="text" name="username" id="username" placeholder="Enter Your Name" value={input.username} onChange={inputHandle} required />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" value={input.email} onChange={inputHandle} required />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" value={input.password} onChange={inputHandle} required />
                    </div>
                    <div>
                        <button type="submit" >Sign Up</button>
                        <p className="member">Already a member? <span><NavLink to="/login">login</NavLink></span></p>
                    </div>
                </form>
            </div>
                
            </div>


        </>
    )
}
export default Signup