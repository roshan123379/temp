import { useAuth } from "../../Context/authProvider"

const Service = () => {
    const {store} = useAuth()
    const dataMap = (val)=>{
        return(
            <>
                <div>
                    <h1>{val.name}</h1>
                    <h1>{val.description}</h1>
                    <h1>{val.price}</h1>
                </div>
            </>
        )

    }
    return (
        
           
            <>
                {
                    store ?
                        <>
                            {store.map(dataMap)}
                        </> :
                        ""
                }

            </>
            
        
    )
}
export default Service