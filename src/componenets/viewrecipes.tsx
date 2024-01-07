import React, {useEffect, useState} from "react";
import TextBubble from "./textbubble";
import RecipeCard from "./recipecard";
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
const ViewRecipes = () => {

    const [recipeList, setRecipeList] = useState<Array<Recipe>>();
    const [showRecipeInfo, setShowRecipeInfo] = useState<boolean>(false);
    const [currRecipe, setCurrRecipe] = useState<Recipe>();

    //Function passed down to change state and activate recipe info component
    //Function activates when recipe card is clicked
    const viewRecipeInfo = (r:Recipe) => {
        setCurrRecipe(r);
        setShowRecipeInfo(true);
    }

    useEffect(() =>{
        async function fetchRecipes() {
            const response = await fetch('http://localhost:5000/record/');

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const recipes: Array<Recipe> = await response.json();
            return recipes;
        }

        fetchRecipes().then(recipes =>{
            setRecipeList(recipes);
        });
    }, []);

    const displayRecipes = () =>{
        if(recipeList?.length === 0){
            return <div>
                <h2>You have not created any recipes yet</h2>
            </div>
        }
        else{
            return recipeList?.map((recipe:Recipe) => {
                console.log(recipe);
                return(
                    <RecipeCard recipe={recipe} clickMethod={viewRecipeInfo} key={recipe.Name}/>
                );
            })
        }
    }

    return showRecipeInfo ? <RecipeInfo recipe={currRecipe}/>
        :<TextBubble>
            <div id="vrecipeslayout">
                {displayRecipes()}
            </div>
            </TextBubble>
}

export default ViewRecipes;