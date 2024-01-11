import React, {useEffect, useState} from "react";
import RecipeCard from "../componenets/recipecard";
import RecipeInfo from "../componenets/recipeinfo";
import "../styling/viewrecipes.css"

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
            return <h2 style={{textAlign: "center", color:"white"}}>You have not created any recipes yet</h2>

        }
        else{
            return recipeList?.map((recipe:Recipe) => {
                return(
                    <RecipeCard recipe={recipe} clickMethod={viewRecipeInfo} key={recipe.Name}/>
                );
            })
        }
    }

    return showRecipeInfo ? <RecipeInfo recipe={currRecipe}/>
        :<div id="viewRecipesLayout">
            <div id="searchDiv"></div>
            <div id="recipesLayout">
                {displayRecipes()}
            </div>
            </div>
}

export default ViewRecipes;