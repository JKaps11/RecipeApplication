import React from "react";
import StarsRating from "./ratingstars";
import "../styling/recipecard.css";

type Ingredient = {
    Name: string;
    Amount: string;
}

type Recipe = {
    Name: string;
    Culinary_Type: string;
    Description: string;
    Rating: number;
    Ingredients: Array<Ingredient>;
    Instructions: Array<string>;
}
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