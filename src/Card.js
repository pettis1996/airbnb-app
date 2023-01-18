import React from "react";

export default function Card(props) {
    let badgeText 
    if(props.openSpots === 0 ) 
    {
        badgeText = "SOLD OUT"
    } 
    else if(props.location === "Online")
    {
        badgeText = "ONLINE"
    }
    else 
    {
        badgeText = "AVAILABLE"
    }

    return (
        <div className="cardArea">
            <div className="cardImage">
                {badgeText && <div className="cardBadge">{badgeText}</div>}
                <img src={props.img}></img>
            </div>
            <div className="cardRating">
                <img src={require("./images/star.png")}></img>
                <p className="rating">{props.stats.rating}</p>
                <p className="ratingThin">({props.stats.raters}) • {props.location}</p>
            </div>
            <div className="cardExperienceDescription">
                <p>
                    {props.title}
                </p>
            </div>
            <div className="cardPrice">
                <p>
                    From {props.price} <span className="perPerson"> /person</span>
                </p>
            </div>
        </div>
    );
}