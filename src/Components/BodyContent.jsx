
import shoe from "../assets/shoe.png"
import "./BodyContent.css"

const BodyContent = () => {
    return (
        <div className="BodyContent">
            <div className="content">
                <h1>your feet deserve the best</h1>
                <p>Your feet deserve the best and we are here tp help you with our shoes.
                    Your feet deserve the best and we are here tp help you with our shoes</p>
                <div className="button">
                    <button className="sho-btn">Shop Now</button>
                    <button className="cat-btn">category</button>
                </div>
                <div className="contact">
                    <p>Also Available On :</p>
                    <div className="option">
                        <img src={shoe} alt="shoe" />
                        <img src={shoe} alt="shoe" />
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={shoe} alt="shoe" />
            </div>
        </div>
    )
}

export default BodyContent;