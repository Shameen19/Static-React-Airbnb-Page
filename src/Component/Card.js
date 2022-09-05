import React from "react"
import katie from "../images/katie.jpg";
import star from "../images/star.jpg";
export default function Card(){
    return(

        <div className="card">
          <img src={katie}
        alt= "kat"
        className="katie"
        />
         <div className="cardstats">
            <img src={star}
             alt="star"
            className="rating"
             />
             <span>(5.0)-6•</span>
             <span> USA</span>
              </div>
              <p className="para">Life Lessons with Katie Zeferes</p>
             <p className="para"><span className="bold">From $136</span>/person</p>
        </div>
        

    )
}