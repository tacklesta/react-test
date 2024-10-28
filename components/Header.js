import { useState } from "react";
import { LOGO_url } from "./utils/const";
import { Link } from "react-router-dom";

const Header = ()=>{
    [btnNameReact,setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_url} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact"> Contact Us</Link></li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={()=>{
                            btnNameReact === "Login" ? setBtnNameReact("LogOut"):setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>

        </div>
    )
}

export default Header;