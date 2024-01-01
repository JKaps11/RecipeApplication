import React from "react";
import StarsRating from "./ratingstars";

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
    recipe:Recipe;
}
const RecipeInfo = ({recipe}:recipeInfoProps) =>{

    const displayIngredients = (ingredients:Array<Ingredient>) =>{
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

    const displayInstructions = (instructions:Array<string>) => {
        if(instructions?.length === 0 ){
            return <h2>No instructions found for this recipe</h2>
        }
        else{
            return instructions?.map((instruction:string) => {
                return <p>{instruction}</p>
            })
        }
    };

    return <div id="recipeInfoLayout">
        <div id="name">
            <h2>{recipe.Name}</h2>
        </div>
        <div id="rirating">
            <StarsRating rating={recipe.Rating}/>
        </div>
        <div id="rictype">
            <h2>{recipe.Culinary_Type}</h2>
        </div>
        <div id="riingredients">
            {displayIngredients(recipe.Ingredients)}
        </div>
        <div id="rinstructions">
            {displayInstructions(recipe.Instructions)}
        </div>
    </div>
}

export default RecipeInfo;