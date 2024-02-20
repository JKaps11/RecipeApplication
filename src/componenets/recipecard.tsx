import React from "react";
import "../styling/recipecard.css";
import {Recipe} from "../customTypes";

interface recipeCardProps{
    recipe:Recipe;
    clickMethod:(r:Recipe) => void;
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
            <div>
                <h2 id="recipecardname">{recipe.Name}</h2>
            </div>
        </div>
    </button>
}

export default RecipeCard;