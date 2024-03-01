import { NavLink } from "react-router-dom"
import { useAuth } from "../../Context/authProvider"

const Navbar = () => {
    const {isloggin} = useAuth()
    return (
        <>
            <header>
                <div className="navbar">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    {
                        isloggin ?
                            <>
                                <li><NavLink to="/logout">Logout</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to="/signup">SignUp</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </>
                    }


                </div>
            </header>
        </>
    )
}

export default Navbar