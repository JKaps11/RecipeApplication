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
                return <p id="ritext2" >{instruction}</p>
            })
        }
    };

    return <TextBubble>
        <div id="name">
            <h1>{recipe?.Name}</h1>
        </div>

        <div id="recipeInfoLayout">
            <div id="rilblock">
                <div id="ripicture"></div>
                <div id="rilbdiv">
                    <h2>Rating:</h2>
                    <StarsRating rating={recipe?.Rating}/>
                </div>
                <div id="rilbdiv">
                    <h2>Culinary Type:</h2>
                    <p>{recipe?.Culinary_Type}</p>
                </div>
            </div>
            <div id="rirblock">
                <div id="rirbdiv">
                    <h2 id="rititle2">Ingredients</h2>
                    {displayIngredients(recipe?.Ingredients)}
                </div>
                <div id="rirbdiv">
                    <h2 id="rititle2">Instructions</h2>
                    {displayInstructions(recipe?.Instructions)}
                </div>
            </div>
        </div>
    </TextBubble>
}

export default RecipeInfo;