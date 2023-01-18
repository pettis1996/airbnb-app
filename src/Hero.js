import React from "react";

export default function Hero() 
{
    return (
            <div className="heroArea">
                <img className="heroGridImage" src={require("./images/grid.png")}></img>
                <div className="heroText">
                    <h1>Online Experiences</h1>
                    <p>
                        Join unique interractive activities led by one-of-a-kind hosts - all without leaving home.
                    </p>
                </div>
            </div>
    );
}