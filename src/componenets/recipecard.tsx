import React from "react";
import StarsRating from "./ratingstars";
import "../styling/recipecard.css";
import {Recipe} from "../customTypes";

interface recipeCardProps{
    recipe:Recipe;
    clickMethod:(r:Recipe) => void;
}


const RecipeCard = ({recipe, clickMethod}:recipeCardProps) => {



    return<button id="recipecardbutton" onClick={() => clickMethod(recipe)}>
        <div id="recipecardlayout">
            <div id="recipecardstars">
                <StarsRating rating={recipe.Rating}/>
            </div>
            <div>
                <h2 id="recipecardname">{recipe.Name}</h2>
            </div>
        </div>
    </button>
}

export default RecipeCard;