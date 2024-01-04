import React from "react";
import StarsRating from "./ratingstars";
import "../styling/recipeinfo.css";
import TextBubble from "./textbubble";

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
interface recipeInfoProps{
    recipe:Recipe | undefined;
}
const RecipeInfo = ({recipe}:recipeInfoProps) =>{

    const displayIngredients = (ingredients:Array<Ingredient>|undefined) =>{
        if(ingredients?.length === 0 ){
            return <h2>No ingredients found for this recipe</h2>
        }
        else{
            return ingredients?.map((ingredient:Ingredient) => {
                return <li>
                    <div id="ingredientDisplay">
                        <p>{ingredient.Name} {ingredient.Amount}</p>
                    </div>
                </li>
            })
        }
    };

    const displayInstructions = (instructions:Array<string>|undefined) => {
        if(instructions?.length === 0 ){
            return <h2>No instructions found for this recipe</h2>
        }
        else{
            return instructions?.map((instruction:string) => {
                return <p>{instruction}</p>
            })
        }
    };

    return <TextBubble>
        <div id="recipeInfoLayout">
        <div id="name">
            <h2>{recipe?.Name}</h2>
        </div>
        <div id="rirating">
            <p>Rating</p>
            <StarsRating rating={recipe?.Rating}/>
        </div>
        <div id="rictype">
            <p>Culinary Type</p>
            <h2>{recipe?.Culinary_Type}</h2>
        </div>
        <div id="riingredients">
            <p>Ingredients</p>
            {displayIngredients(recipe?.Ingredients)}
        </div>
        <div id="rinstructions">
            <p>Instructions</p>
            {displayInstructions(recipe?.Instructions)}
        </div>
    </div>
    </TextBubble>
}

export default RecipeInfo;