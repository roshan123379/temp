import { useDispatch } from "react-redux"
import { useAuth } from "../../Context/authProvider"
import doct3 from "../images/doct3.png"
import doctor2 from "../images/doctor2.png"
import heart from "../images/heart.png"


import { addtoCart } from "../redux/cartSlice"
import { useState } from "react"
const Service = () => {
    const dispatch = useDispatch()
    const [inputValue , setInputValue] = useState([])
    const { store } = useAuth()
    const filterdata = Array.isArray(store)
        ? store.filter((items) =>
              String(items.name)
                  .toLowerCase()
                  .includes(String(inputValue).toLowerCase())
          )
        : [];
    const dataMap = (val) => {
        return (
            <>
                <div className="newCart">
                    <div className="cartImg"><img src={val.img} alt="" /></div>
                    <hr />
                    <div className="newDetails">
                        <div className="newName">{val.name}</div>
                        <div className="newPrice"><span>MRP </span>{val.price}</div>

                        <div className="newButton"><button onClick={() => dispatch(addtoCart({ id: val.id,img : val.img,name: val.name, price: val.price, piece: val.piece }))}>Add to Cart</button></div>
                    </div>
                </div>
            </>
        )

    }
    return (

        <div className="medicinePage">
            <div className='poster' >
                <div className='doctor3'><img src={doct3} alt='doctor3'></img></div>
                <div className='doctor2'><img src={doctor2} alt='doctor2'></img></div>
                <div className='heart'><img src={heart} alt='heart'></img></div>


                <div className='inputDiv'><input placeholder='Search' value={inputValue} type='text' onChange={(e)=>{setInputValue(e.target.value)}}></input><button className='btn'>Search</button></div>
                <div className='buy'>Buy Medicines With Safety</div>
            </div>
            
            <div className="mainProductList">
                {
                    store ?
                        <>
                            {filterdata.map(dataMap)}
                        </> :
                        ""
                }

            </div>
        </div>



    )
}
export default Service