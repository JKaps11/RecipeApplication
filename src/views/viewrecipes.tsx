import React, {useEffect, useMemo, useState} from "react";
import RecipeCard from "../componenets/recipecard";
import RecipeInfo from "../componenets/recipeinfo";
import { FieldValues, useForm, Controller } from "react-hook-form";
import "../styling/viewrecipes.css";
import {Recipe, RecipeServer} from "../customTypes";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllRecipes } from "../recipeAPI";
import {FaSort} from "react-icons/fa";

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

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("handling change")
        type sortOption = "rating" | "alphabetical"
        const selectedValue = event.target.value as sortOption;

        let compareFn: (recipe1:RecipeServer, recipe2:RecipeServer) => number

        console.log(`selectedValue: ${selectedValue}`)
        if(selectedValue === "rating") {
            compareFn = (recipe1: RecipeServer, recipe2: RecipeServer): number => {
                const rating1: number = Number(recipe1.Rating)
                const rating2: number = Number(recipe2.Rating)
                if (rating1 > rating2) {
                    return -1
                } else if (rating1 < rating2) {
                    return 1
                }
                return 0
            }
        }
        else{
            compareFn = (recipe1: RecipeServer, recipe2: RecipeServer): number => {
               return recipe1.Name.localeCompare(recipe2.Name)
            }
        }

        console.log(filteredRecipes)
        setFilteredRecipes((prevState: RecipeServer[]) => [...prevState].sort(compareFn))
        console.log(filteredRecipes)
    }
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
                    <hr id={"filtersLine"}/>
                    <div id={"filtersSection"}>
                        <h3 id={"filtersHeader"}>Name</h3>
                        <input
                            {...register("Name", {required: false, maxLength: 20, pattern: /^[A-Za-z]+$/i})}
                            id={"filtersInputText"}
                            type="text"
                            placeholder="Enter a Name"
                        />
                    </div>
                    <hr id={"filtersLine"}/>
                    <div id={"filtersSection"}>
                        <h3 id={"filtersHeader"}>Culinary Type</h3>
                        <input
                            {...register("Culinary_Type", {required: false, maxLength: 20, pattern: /^[A-Za-z]+$/i})}
                            id={"filtersInputText"}
                            type="text"
                            placeholder="Enter a type"
                        />
                    </div>
                    <hr id={"filtersLine"}/>
                    <div id={"filtersSection"}>
                        <h3 id={"filtersHeader"}>Minimum Rating {watch("MinRating")}</h3>
                        <input
                            type="range"
                            id="filtersRange"
                            min="0"
                            max="10"
                            step="1"
                            {...register("MinRating", {required: false, min: 0, max: 10})}
                        />
                    </div>
                    <button type="submit" id={"filtersSubmitButton"}>Filter</button>
                </form>
            </div>
            <div id="recipesDiv">
                <div id={"recipesHeader"}>
                    <h2 id={"recipesHeaderText"}>
                        {currNumRecipes} {currNumRecipes === 1 ? "recipe" : "recipes"}
                    </h2>
                    <select id={"viewRecipesSort"} onChange={handleSortChange}>
                        <option id={"viewRecipesOption"} value={""} disabled selected hidden>Sort by</option>
                        <option id={"viewRecipesOption"} value={"alphabetical"}>Alphabetically</option>
                        <option id={"viewRecipesOption"} value={"rating"}>Rating</option>
                    </select>
                </div>
                <div id="recipesLayout">{displayRecipes()}</div>
            </div>
        </div>
    );
};

export default ViewRecipes;
