import React, {useEffect, useState} from "react";
import RecipeCard from "../componenets/recipecard";
import RecipeInfo from "../componenets/recipeinfo";
import {FieldValues, useForm} from "react-hook-form";
import "../styling/viewrecipes.css"
import {Recipe} from "../customTypes";
import {useAuth0} from "@auth0/auth0-react";
import {postRecipestoDB} from "../recipeAPI";

const ViewRecipes = () => {
    const { user } = useAuth0();
    const [recipeList, setRecipeList] = useState<Array<Recipe>>();
    const [showRecipeInfo, setShowRecipeInfo] = useState<boolean>(false);
    const [currRecipe, setCurrRecipe] = useState<Recipe>();
    const [recipeToSearch, setRecipeToSearch] = useState("");

    //Function passed down to change state and activate recipe info component
    //Function activates when recipe card is clicked
    const viewRecipeInfo = (r:Recipe) => {
        setCurrRecipe(r);
        setShowRecipeInfo(true);}


    const { register, handleSubmit} = useForm();

    useEffect(() =>{
        async function fetchRecipes() {
            if(user && user.sub){
                const response = await fetch('http://localhost:5000/record/', {
                method: "POST",
                body: JSON.stringify({
                    User_Id: user.sub
                }),
                headers: {
                    "Content-Type": "application/json"
                }});

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
                const recipes: Array<Recipe> = await response.json();
                return recipes;
            }
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
            return recipeList?.filter((recipe:Recipe) => recipe.Name.includes(recipeToSearch)).map((recipe:Recipe) => {
                return(
                    <RecipeCard recipe={recipe} clickMethod={viewRecipeInfo} key={recipe.Name}/>
                );
            })
        }
    }

    return showRecipeInfo ? <RecipeInfo recipe={currRecipe}/>
        :<div id="viewRecipesLayout">
            <div id="searchDiv">
                <form id="recipeSearchForm" onSubmit={handleSubmit((e)=> e.preventDefault)}>
                    <div id="recipeSearchDiv">
                        <input
                            id="recipeSearchInput"
                            {...register('nameToSearch', {required: true})}
                        />
                    </div>
                </form>
            </div>
            <div id="recipesDiv">
                <div id="recipesLayout">
                    {displayRecipes()}
                </div>
            </div>
            </div>
}

export default ViewRecipes;