import React, {useEffect, useState} from "react";
import TextBubble from "./textbubble";

type Ingredient = {
    name: string;
    amount: string;
}

type Instruction = {
    step: number;
    desc: string;
}

type Recipe = {
    Name: string;
    Culinary_Type: string;
    Ingredients: Array<Ingredient>;
    Instructions: Array<Instruction>;
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

                    <button key={recipe.Name}>{recipe.Name}</button>
                );
            })
        }
    }
    return <TextBubble>
        {displayRecipes()}
    </TextBubble>
}

export default ViewRecipes;