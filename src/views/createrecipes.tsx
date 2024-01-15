import React, {useState} from "react";
import "../styling/createrecipes.css";
import TextInput from "../componenets/textinput";
import ListCreator from "../componenets/listcreator";

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

const CreateRecipes = () => {
    const [recipeName, setRecipeName] = useState("");
    const [CuisineType, setCuisineType] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState(Array<Ingredient>);
    const [recipeInstructions, setRecipeInstructions] = useState(Array<string>);

    const handleSubmit = () => {

    }

    return (<div id="createRecipesLayout">
        <form id="createRecipesForm">
            <TextInput title="Enter The Name of Your Recipe" placeholder="Recipe Name" sendUserInput={setRecipeName} paragraph={false}/>
            <TextInput title="Enter The Cuisine of your Recipe" placeholder={"Cuisine Type Ex. French, American, Japanese"} sendUserInput={setCuisineType} paragraph={false}/>
            <TextInput title="Enter a Description for Your Recipe" placeholder={"Description here"} sendUserInput={setRecipeDescription} paragraph={true}/>
            <ListCreator title={"Ingredients"} placeholder={"Ingredient Name"} sendUserInput={setRecipeIngredients} typeIngredient={true}/>
            <ListCreator title={"Instructions"} placeholder={"Instruction"} sendUserInput={setRecipeInstructions} typeIngredient={false}/>
            <div id="crImgDiv">
                <div>
                    <h2 id="crTitle"> Enter an Image for Your Recipe</h2>
                </div>
                <input type="file" accept=".png, .jpeg, .svg"/>
            </div>

            <div id="crButtonsDiv">
                <button id="crButton" type="reset">reset</button>
                <button id="crButton" type="submit">submit</button>
            </div>

        </form>
        </div>
    );
}

export default CreateRecipes;