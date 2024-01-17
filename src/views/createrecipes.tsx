import React, {useState} from "react";
import "../styling/createrecipes.css";
import TextInput from "../componenets/textinput";
import ListCreator from "../componenets/listcreator";
import NumberInput from "../componenets/numberinput";

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

    const [recipeToPost, setRecipeToPost] = useState<Recipe>({
        Name: "",
        Culinary_Type: "",
        Description: "",
        Rating: 0,
        Ingredients:  Array<Ingredient>(),
        Instructions: Array<string>(),
    })

    const handleChange = (string: string, val: any) =>{
        setRecipeToPost({
            ...recipeToPost,
            [string]:val
        })
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(recipeToPost);
    }

    return (<div id="createRecipesLayout">
        <form id="createRecipesForm" onSubmit={(e) => handleSubmit(e)}>
            <TextInput title="Enter The Name of Your Recipe" placeholder="Recipe Name" sendUserInput={handleChange} paragraph={false} type="Name"/>
            <TextInput title="Enter The Cuisine of your Recipe" placeholder={"Cuisine Type Ex. French, American, Japanese"} sendUserInput={handleChange} paragraph={false} type="Culinary_Type"/>
            <TextInput title="Enter a Description for Your Recipe" placeholder={"Description here"} sendUserInput={handleChange} paragraph={true} type="Description"/>
            <NumberInput title="Enter The Rating for Your Recipe" placeholder="Raing 1-10" sendUserInput={handleChange} type="Rating"/>
            <ListCreator title={"Ingredients"} placeholder={"Ingredient Name"} sendUserInput={handleChange} typeIngredient={true} type="Ingredients"/>
            <ListCreator title={"Instructions"} placeholder={"Instruction"} sendUserInput={handleChange} typeIngredient={false} type="Instructions"/>
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