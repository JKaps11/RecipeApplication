import React, {useEffect, useMemo, useState} from "react";
import RecipeCard from "../componenets/recipecard";
import RecipeInfo from "../componenets/recipeinfo";
import { FieldValues, useForm, Controller } from "react-hook-form";
import "../styling/viewrecipes.css";
import {Recipe, RecipeServer} from "../customTypes";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllRecipes } from "../recipeAPI";

const ViewRecipes = () => {

    type FilterResults = {
        Name: string;
        Culinary_Type: string;
        MinRating: number;
    };

    const [recipeList, setRecipeList] = useState<Array<RecipeServer>>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Array<RecipeServer>>([]);
    const [showRecipeInfo, setShowRecipeInfo] = useState<boolean>(false);
    const [currRecipe, setCurrRecipe] = useState<RecipeServer>();
    const [currNumRecipes, setCurrNumRecipes] = useState<number>(0);

    const { user } = useAuth0();
    const { register, handleSubmit, watch, getValues } = useForm<FilterResults>({
        defaultValues: { MinRating: 0, Culinary_Type: "" },
    });

    const viewRecipeInfo = (r: RecipeServer) => {
        setCurrRecipe(r);
        setShowRecipeInfo(true);
    };

    const returnToViewRecipes = (): void => {
        setShowRecipeInfo(false);
    };

    useEffect(() => {
        if (!user || !user.sub) console.log("User info not found");
        else {
            getAllRecipes().then((value: RecipeServer[]) => {
                setRecipeList(value);
                setFilteredRecipes(value); // Initialize with all recipes
                setCurrNumRecipes(value.length);
            });
        }
    }, [user]);

    const submitFilterForm = (): void => {
        const formOutputs: FilterResults = getValues();
        const filtered = recipeList.filter(
            (recipe: RecipeServer) =>
                recipe.Name.toLowerCase().includes((formOutputs.Name || "").toLowerCase()) &&
                recipe.Rating >= Number(formOutputs.MinRating || 0) &&
                recipe.Culinary_Type.includes((formOutputs.Culinary_Type || "").toLowerCase())
        );
        setFilteredRecipes(filtered);
        setCurrNumRecipes(filtered.length);
    };

    const displayRecipes = (): React.JSX.Element | React.JSX.Element[] => {
        return !filteredRecipes || filteredRecipes.length === 0 ? (
            <h2 style={{ minWidth: "600px", color: "white" }}>
                There are no recipes that match the filters specified
            </h2>
        ) : (
            filteredRecipes.map((recipe: RecipeServer) => (
                <RecipeCard
                    recipe={recipe}
                    clickMethod={viewRecipeInfo}
                    key={recipe.Name}
                />
            ))
        );
    };

    return showRecipeInfo ? (
        <RecipeInfo recipe={currRecipe} returnFunction={returnToViewRecipes} />
    ) : (
        <div id="viewRecipesLayout">
            <div id="filtersDiv">
                <form
                    id="recipeSearchForm"
                    onSubmit={handleSubmit(submitFilterForm)}
                >
                    <h2 id={"filtersTitle"}>Filters</h2>
                    <hr id={"filtersLine"} />
                    <div id={"filtersSection"}>
                        <h3 id={"filtersHeader"}>Name</h3>
                        <input
                            {...register("Name", { required: false, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                            type="text"
                            placeholder="Enter a Name"
                        />
                    </div>
                    <div id={"filtersSection"}>
                        <h3 id={"filtersHeader"}>Culinary Type</h3>
                        <input
                            {...register("Culinary_Type", { required: false, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                            type="text"
                            placeholder="Enter a type"
                        />
                    </div>
                    <hr id={"filtersLine"} />
                    <div id={"filtersSection"}>
                        <h3 id={"filtersHeader"}>Minimum Rating {watch("MinRating")}</h3>
                        <input
                            type="range"
                            id="filtersRange"
                            min="0"
                            max="10"
                            step="1"
                            {...register("MinRating", { required: false, min: 0, max: 10 })}
                        />
                    </div>
                    <button type="submit">Apply Filters</button>
                </form>
            </div>
            <div id="recipesDiv">
                <div id={"recipesHeader"}>
                    <h2 id={"recipesHeaderText"}>
                        {currNumRecipes} {currNumRecipes === 1 ? "recipe" : "recipes"}
                    </h2>
                    <button>Sort</button>
                </div>
                <div id="recipesLayout">{displayRecipes()}</div>
            </div>
        </div>
    );
};

export default ViewRecipes;
