import React from "react";
import airbnb from "../images/airbnb.jpg";


export default function Navbar(){
    return(
        <nav className="navbar">
           <img src={airbnb}
            alt="airbnblogo"
            className="airlogo"
            />
            <h2 className="title">airbnb</h2>
        </nav>
    )
}