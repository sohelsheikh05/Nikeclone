import Logo from "../assets/Logo.png"
import "./Header.css"

const Header=()=>{
    const handlelogin=()=>{
        alert("Login")
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
                <button type="button" onClick={handlelogin}>Login</button>
            </div>
          
        </div>
        </>
    )
}   
export default Header;