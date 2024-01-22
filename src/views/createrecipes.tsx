import React, {useRef, useState} from "react";
import "../styling/createrecipes.css";
import TextInput from "../componenets/textinput";
import ListCreator from "../componenets/listcreator";
import CustomDialog from "../componenets/customdialog";
import {Ingredient, Recipe} from "../customTypes";
import NumberSlider from "../componenets/numberslider";

const CreateRecipes = () => {

    const dialogRef= useRef<HTMLDialogElement | null>(null)

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

    async function postData(recipe: Recipe){
        try {
            const response = await fetch("http://localhost:5000/record/", {
                method: "POST",
                body: JSON.stringify({
                    Name: recipe.Name,
                    Culinary_Type: recipe.Culinary_Type,
                    Description: recipe.Description,
                    Rating: recipe.Description,
                    Ingredients: recipe.Ingredients,
                    Instructions: recipe.Instructions
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok){
               throw new Error("Failed to Upload Recipe") ;
            }
            console.log(response.status);
            dialogRef.current?.close();

        }
        catch (error){
            let message;
            if(error instanceof Error){
                message = error.message;
            }
            else{
                message= String(error);
            }
            console.error(`Error with Posting Recipe: ${message}`);
        }
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        dialogRef.current?.showModal();
    }

    return (<>
            <CustomDialog ref={dialogRef} onContinue={() =>postData(recipeToPost)} title="Are You Sure?"/>
            <form id="createRecipesForm" onSubmit={(e) => handleSubmit(e)}>
                <div id="createRecipesLayout">
                    <div id="createRecipesLayoutLeft">
                        <div id="crImgDiv">
                            <div>
                                <h2 id="crTitle"> Enter an Image for Your Recipe</h2>
                            </div>
                            <input type="file" accept=".png, .jpeg, .svg"/>
                        </div>

                        <ListCreator title={"Ingredients"} placeholder={"Ingredient Name"} sendUserInput={handleChange}
                                     typeIngredient={true} type="Ingredients"/>
                        <ListCreator title={"Instructions"} placeholder={"Instruction"} sendUserInput={handleChange}
                                     typeIngredient={false} type="Instructions"/>

                    </div>
                    <div id="createRecipesLayoutRight">
                        <TextInput title="Enter The Name of Your Recipe" placeholder="Recipe Name"
                                   sendUserInput={handleChange} paragraph={false} type="Name"/>
                        <TextInput title="Enter The Cuisine of your Recipe"
                                   placeholder={"Cuisine Type Ex. French, American, Japanese"}
                                   sendUserInput={handleChange} paragraph={false} type="Culinary_Type"/>
                        <TextInput title="Enter a Description for Your Recipe" placeholder={"Description here"}
                                   sendUserInput={handleChange} paragraph={true} type="Description"/>
                        <NumberSlider sendUserInput={handleChange} type="Rating"/>
                        <div id="crButtonsDiv">
                            <button id="crButton" type="reset">reset</button>
                            <button id="crButton" type="submit">submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default CreateRecipes;