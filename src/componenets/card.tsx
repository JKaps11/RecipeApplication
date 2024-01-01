import React from 'react';
import '../styling/card.css'

interface CardProps {
    cuisineType: string;
    imgPath: string;
    name: string;
    desc: string;
}

const Card = ({ cuisineType, name, imgPath, desc }: CardProps) => {

    let color = ""
    if(cuisineType === "Cuisine"){
        color = "cornflowerblue"
    }
    else if(cuisineType === "Recipe"){
        color = "#52B2Bf"
    }

    return (
        <button id="cardbutton">
            <span id="cardLayout">
                <div id="cardtype" style={{backgroundColor: color}}>
                    <h3 id="cardtypetext">{cuisineType}</h3>
                </div>
                <div id="cardimg" >
                    <img src={imgPath} alt={name} />
                </div>
                <div id="cardtitle">
                    <h3 id="cardh3">{name}</h3>
                </div>
                <div id="carddesc">
                    <p id="cardp">{desc}</p>
                </div>
            </span>
        </button>
    );
}

export default Card;
