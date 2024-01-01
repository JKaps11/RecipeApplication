import React from "react";
import StarsRating from "./ratingstars";
import RecipeInfo from "./recipeinfo";

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

    return<button onClick={clickHandler}>
        <div>
            <StarsRating rating={recipe.Rating}/>
        </div>
        <div>
            <h2>{recipe.Name}</h2>
        </div>
    </button>
}

export default RecipeCard;