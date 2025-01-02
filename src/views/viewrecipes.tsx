import React, {useEffect, useState} from "react";
import RecipeCard from "../componenets/recipecard";
import RecipeInfo from "../componenets/recipeinfo";
import {FieldValues, useForm} from "react-hook-form";
import "../styling/viewrecipes.css"
import {RecipeServer, User} from "../customTypes";
import {useAuth0} from "@auth0/auth0-react";
import {getAllRecipes} from "../recipeAPI";

const ViewRecipes = () => {
    const { user } = useAuth0();
    const [recipeList, setRecipeList] = useState<Array<RecipeServer>>();
    const [showRecipeInfo, setShowRecipeInfo] = useState<boolean>(false);
    const [currRecipe, setCurrRecipe] = useState<RecipeServer>();
    const [recipeToSearch, setRecipeToSearch] = useState("");

    //Function passed down to change state and activate recipe info component
    //Function activates when recipe card is clicked
    const viewRecipeInfo = (r:RecipeServer) => {
        setCurrRecipe(r);
        setShowRecipeInfo(true);}

    const returnToViewRecipes = () : void => {
        setShowRecipeInfo(false)
    }


    const { register, handleSubmit} = useForm();
    useEffect(() =>{
        if (!user || !user.sub) console.log("User info not found")
        else  {
            getAllRecipes()
                .then((value: RecipeServer[]) => {
                    setRecipeList(value)
                })
        }
    }, []);

    const displayRecipes = () =>{
        if(recipeList?.length === 0){
            return <h2 style={{minWidth:"600px", color:"white"}}>You have not created any recipes yet</h2>

        }
        else{
            return recipeList?.filter((recipe:RecipeServer) => recipe.Name.includes(recipeToSearch)).map((recipe:RecipeServer) => {
                return(
                    <RecipeCard recipe={recipe} clickMethod={viewRecipeInfo} key={recipe.Name}/>
                );
            })
        }
    }


    return showRecipeInfo ? <RecipeInfo recipe={currRecipe} returnFunction={returnToViewRecipes}/>
        :<div id="viewRecipesLayout">
            <div id="searchDiv">
                <form id="recipeSearchForm" onSubmit={handleSubmit((e :FieldValues)=> {})}>
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
