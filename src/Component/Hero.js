import React from "react";
import photogrid from "../images/photo.png"
export default function Hero(){
    return(
        <section className="hero">
         <img src={photogrid}
         alt="photogrid"
         className="Photogrid"
         />
         <h1 className="Heading1">Online Experiences</h1>
         <p className="paragraph">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </section>


    )
}