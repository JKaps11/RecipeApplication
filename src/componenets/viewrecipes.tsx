import React, {useEffect, useState} from "react";
import TextBubble from "./textbubble";
import RecipeCard from "./recipecard";

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

    const [recipeList, setRecipeList] = useState<Array<Recipe>>()

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
                    <RecipeCard recipe={recipe} key={recipe.Name}/>
                );
            })
        }
    }
    return <TextBubble>
        {displayRecipes()}
    </TextBubble>
}

export default ViewRecipes;