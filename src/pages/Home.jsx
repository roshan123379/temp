import { useAuth } from "../../Context/authProvider"
import doc from "../images/tempdoc-removebg-preview.png"
import { newData } from "../new"
import { dealData } from "../deal"

const Home = () => {
    const { Data } = useAuth()
    const data = (val)=>{
        return(
            <>
                <div className="newCart">
                    <div className="cartImg"><img src={val.img} alt="" /></div>
                    <div className="newDetails">
                        <div className="newName" >{val.name}</div>
                        <div className="newPrice">{val.price}</div>
                        <div className="newButton"><button>Add to Cart</button></div>
                    </div>
                </div>
            </>
        )
    }
    const deal = (dealval)=>{
        return(
            <>
                <div className="newCart">
                    <div className="cartImg"><img src={dealval.img} alt="" /></div>
                    <div className="newDetails">
                        <div className="newName" >{dealval.name}</div>
                        <div className="newPrice">{dealval.price} <span>{dealval.off} off</span></div>
                        <div className="newButton"><button>Add to Cart</button></div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="home">
                <div className="homeDesc">
                    <p className="desc1">remove</p>
                    <p className="desc2">the guesswork when it comes to your health</p>
                    <p className="desc3">increase your mental and physical performance with data-driven health assessement using your blood biomarkers.</p>
                    <button className="bookNow">Book Now</button>
                </div>
                <div className="docImg"><img src={doc} alt="" /></div>

            </div>
            <div className="offersDiv">
                <div className="offer1">
                    <div><i class="fa-solid fa-sack-dollar fa-2xl"></i></div>
                    <div className="off">Get 35% Off</div>
                </div>
                <div className="offer2">
                    <div><i class="fa-solid fa-truck fa-2xl"></i></div>
                    <div className="off">Free Home Delivery</div>
                </div>
                <div className="offer3">
                    <div><i class="fa-solid fa-pills fa-2xl"></i></div>
                    <div className="off">100+ Medical Products</div>
                </div>
                <div className="offer4"> <div><i class="fa-solid fa-user-large fa-2xl"></i></div>
                    <div className="off">1000+ Happy Customers</div></div>
            </div>

            <div>
                <div className="deal">Deal of the Day <span>Hurry up!!</span></div>
                
                <div className="productList">
                    {
                        dealData ? dealData.map(deal) : ""
                    }
                </div>
            </div>
            <div className="newProd">New Products</div>
            <p className="explore">Explore Our new products</p>
            
                <div className="productList">
                    {
                        newData ? newData.map(data) : ""
                    }
                </div>
          


        </>
    )
}
export default Home