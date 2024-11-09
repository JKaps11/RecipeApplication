import React from "react";
import "../styling/recipecard.css";
import {RecipeServer} from "../customTypes";

interface recipeCardProps{
    recipe:RecipeServer;
    clickMethod:(r:RecipeServer) => void;
}

 
const RecipeCard = ({recipe, clickMethod}:recipeCardProps) => {

    return<button id="recipecardbutton" onClick={() => clickMethod(recipe)}>
        <div id="recipecardlayout">
            <div id="recipecardrating">
                <div className="range">
                    <div className="fill" style={{width:`${recipe.Rating*10}%`}}>
                    </div>
                </div>
            </div>
            <div id={"recipecardnamediv"}>
                <h2 id="recipecardname">{recipe.Name}</h2>
            </div>
            <div id="recipecardimgdiv">
                <img id="recipecardimg" src={recipe.Image} alt={"No Image"}/>
            </div>
        </div>
    </button>
}

export default RecipeCard;