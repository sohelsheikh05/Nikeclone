import Logo from "../assets/Logo.png"
import "./Header.css"
import {GoogleLogin} from "react-google-login"
const Header=()=>{
    const handleSuccess=()=>{
        alert("Login Successfully")
    }
    const handleFailure=()=>{
        alert("Login Failed")
    }
    return(
        <>
        <div className="header">
            <div className="Logo">
                <img src={Logo} alt="Logo" />
            
            </div>
            <div className="nav-bar">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Womens</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Customize</a></li>
                </ul>
            </div>
            <div className="Login">
                <GoogleLogin
                clientId="237072706962-a5p1eq2so6meqci4fv6mddrh2jt7su7r.apps.googleusercontent.com"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
                />
            </div>
        
        </div>
        </>
    )
}   
export default Header;