import { useAuth } from "../../Context/authProvider"

const Home =()=>{
    const {Data} = useAuth()
    return(
        <>
            <h1>hello {Data.username}</h1>
        </>
    )
}
export default Home