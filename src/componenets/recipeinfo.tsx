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
    Description: string;
    Rating: number;
    Ingredients: Array<Ingredient>;
    Instructions: Array<string>;
}
interface recipeInfoProps{
    recipe:Recipe | undefined;
}
const RecipeInfo = ({recipe}:recipeInfoProps) =>{

    const displayIngredients = (ingredients:Array<Ingredient>|undefined) =>{
        if(!ingredients || ingredients?.length === 0 ){
            return <p id="ritext2" >No ingredients found for this recipe</p>
        }
        else{
            return ingredients?.map((ingredient:Ingredient) => {
                return <li id="ritext2" key={ingredient.Name}>{ingredient.Name}: {ingredient.Amount}</li>
            })
        }
    };

    const displayInstructions = (instructions:Array<string>|undefined) => {
        if(!instructions || instructions?.length === 0 ){
            return <p id="ritext2">No instructions found for this recipe</p>
        }
        else{
            return instructions?.map((instruction:string) => {
                return <li id="ritext2" >{instruction}</li>
            })
        }
    };

    return <TextBubble>
        <div>
            <h1 id="riname">{recipe?.Name}</h1>
        </div>

        <div id="recipeInfoLayout">
            <div id="rilblock">
                <div id="ripicture"></div>
                <div id="rilbdiv">
                    <h2 id="rititle1">Rating:</h2>
                    <StarsRating rating={recipe?.Rating}/>
                </div>
                <div id="rilbdiv">
                    <h2 id="rititle1">Culinary Type:</h2>
                    <p id="ritext1">{recipe?.Culinary_Type}</p>
                </div>
                <div id="rilbdiv">
                    <h2 id="rititle1">Description: </h2>
                    <p id="ritext1" >{recipe?.Description}</p>
                </div>
            </div>
            <div id="rirblock">
                <div id="rirbdiv">
                    <h2 id="rititle2">Ingredients</h2>
                    <ul id="ingredientsList">
                        {displayIngredients(recipe?.Ingredients)}
                    </ul>
                </div>
                <div id="rirbdiv">
                    <h2 id="rititle2">Instructions</h2>
                    <ol id="instructionsList">
                        {displayInstructions(recipe?.Instructions)}
                    </ol>
                </div>
            </div>
        </div>
    </TextBubble>
}

export default RecipeInfo;