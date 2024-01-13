import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginBtn,setLoginBtn] = useState("Login");

    // This will get called everytime after the header gets rendered!!
    // useEffect(()=>{
    //     console.log("calling useState from Header");
    //     })

     // This will get called only once at the starting!!
    // useEffect(()=>{
    //     console.log("calling useState from Header");
    //     },[])

     //This will get called everytime the loginBtn is rendered!!
    // useEffect(()=>{
    //     console.log("calling useState from Header");
    //     },[loginBtn])

    return (
       <div className="header">
        <div className="logo-container">
        <img
         className="logo" 
         src={LOGO_URL}/>
        </div>

        <div className="nav-items">
            <ul>
                <li>
                <Link to = "/">Home</Link>
             </li>
                <li>
                    <Link to = "/about">About Us</Link>
                    </li>
                <li>
                    <Link to = "/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button onClick={()=>{
                        if(loginBtn==="login"){
                            setLoginBtn("Logout")
                        }else{
                            setLoginBtn("login")
                        }
                }}>{loginBtn}</button>
            </ul>
        </div>
          
       </div>
    )
}

export default Header;