import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Logout from "./pages/Logout"
import Service from "./pages/Service"


const App = ()=>{
  return(
    <>

      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App