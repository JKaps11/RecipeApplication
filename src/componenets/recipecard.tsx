import React from "react";
import StarsRating from "./ratingstars";
import RecipeInfo from "./recipeinfo";
import "../styling/recipecard.css";

type Ingredient = {
    Name: string;
    Amount: string;
}

type Recipe = {
    Name: string;
    Culinary_Type: string;
    Rating: number;
    Ingredients: Array<Ingredient>;
    Instructions: Array<string>;
}
interface recipeCardProps{
    recipe:Recipe;
}


const RecipeCard = ({recipe}:recipeCardProps) => {

    const clickHandler = () =>{
        return <RecipeInfo recipe={recipe}/>
    };

    return<button id="recipecardbutton" onClick={clickHandler}>
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