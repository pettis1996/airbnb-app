import React from "react";

export default function Navbar() 
{
    return (
        <nav>
            <div className="navArea">
                <img className="navLogo" src={require("./images/airbnb.png")}></img>
            </div>
        </nav>
    );
}