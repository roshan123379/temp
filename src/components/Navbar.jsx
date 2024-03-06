import { NavLink } from "react-router-dom"
import { useAuth } from "../../Context/authProvider"
import { useSelector } from "react-redux"

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.cart)
    const { isloggin } = useAuth()
    return (
        <>
            <header>
                <div className="navbar">
                    <div style={{fontWeight:"bold"}}>Roshan</div>
                    <div className="navList">
                        <div className="navHome"><li><NavLink to="/">Home</NavLink></li></div>
                        <div className="navService"><li><NavLink to="/service">Medicines</NavLink></li></div>
                        <div className="navChange">

                            {
                                isloggin ?
                                    <>
                                        <div className="logoutNav">
                                            <li><NavLink to="/logout">Logout</NavLink></li>
                                            <li><NavLink to="/cart">Cart <small>{cartItems.length}</small></NavLink></li>
                                            <li><NavLink>Profile</NavLink></li>
                                        </div>

                                    </> :
                                    <>
                                        <div className="registerNav">
                                            <li><NavLink to="/signup">SignUp</NavLink></li>
                                            <li><NavLink to="/login">Login</NavLink></li>
                                            <li><NavLink>About</NavLink></li>
                                        </div>

                                    </>

                            }
                        </div>
                    </div>




                </div>
            </header>
        </>
    )
}

export default Navbar