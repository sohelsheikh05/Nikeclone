import Logo from "../assets/Logo.png"
import "./Header.css"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const Header=()=>{
    const CLIENT_ID="237072706962-a5p1eq2so6meqci4fv6mddrh2jt7su7r.apps.googleusercontent.com"
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
            <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App">
        
        
          <GoogleLogin
            onSuccess={handleSuccess}            onError={() => console.log("Login Failed")}
          />
        
      </div>
    </GoogleOAuthProvider>
 
            </div>
        
        </div>
        </>
    )
}   
export default Header;