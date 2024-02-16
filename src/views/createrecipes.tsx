import React, {useRef, useState} from "react";
import "../styling/createrecipes.css";
import CustomDialog from "../componenets/customdialog";
import {Ingredient, Recipe} from "../customTypes";
import {SubmitHandler, useForm} from "react-hook-form";

enum crState {
    Information = 0,
    Ingredients = 1,
    Instructions = 2,
    Image = 3,
}

const StatusBar = ({state}: {state: crState}) =>{
    return <>
        <svg id="es7NRB35kQS1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 1500 160" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
            <g transform="matrix(.75 0 0 0.75 30.000022-40.000005)">
                <ellipse rx="60" ry="60" transform="translate(145.73252 150)" fill={state === 0 ? "#1d475c" : "#0d212b"}
                         stroke="#01796f" strokeWidth="5"/>
                <ellipse rx="60" ry="60" transform="translate(1231.96751 150)" fill={state === 2 ? "#1d475c" : "#0d212b"}
                         stroke="#01796f" strokeWidth="5"/>
                <ellipse rx="60" ry="60" transform="translate(688.03249 150)" fill={state === 1 ? "#1d475c" : "#0d212b"}
                         stroke="#01796f" strokeWidth="5"/>
                <line x1="-133.549704" y1="48" x2="133.549704" y2="48"
                      transform="matrix(1.331135 0 0-.999999 959.182452 201.05)" fill="none" stroke="#01796f"
                      strokeWidth="5" strokeDasharray="35, 10" strokeDashoffset="-6"/>
                <ellipse rx="60" ry="60" transform="translate(1774.26748 150)" fill={state === 3 ? "#1d475c" : "#0d212b"}
                         stroke="#01796f" strokeWidth="5"/>
                <line x1="-133.549704" y1="48" x2="133.549704" y2="48"
                      transform="matrix(1.331135 0 0-.999999 1503.117495 201.051386)" fill="none" stroke="#01796f"
                      strokeWidth="5" strokeDasharray="35, 10" strokeDashoffset="-6"/>
                <line x1="-133.549704" y1="48" x2="133.549704" y2="48"
                      transform="matrix(1.331135 0 0-.999999 416.882505 201.051386)" fill="none" stroke="#01796f"
                      strokeWidth="5" strokeDasharray="35, 10" strokeDashoffset="-6"/>
            </g>
            <text dx="0" dy="0" fontFamily="Helvetica Neue,sans-serif" fontSize="15" fontWeight="400"
                  transform="translate(101 78)" fill="#d5d9da" strokeWidth="0">
                <tspan y="0" fontWeight="400" strokeWidth="0">Information</tspan>
            </text>
            <text dx="0" dy="0" fontFamily="Helvetica Neue,sans-serif" fontSize="15" fontWeight="400"
                  transform="translate(509 78)" fill="#d5d9da" strokeWidth="0">
                <tspan y="0" fontWeight="400" strokeWidth="0">Ingredients</tspan>
            </text>
            <text dx="0" dy="0" fontFamily="Helvetica Neue,sans-serif" fontSize="15" fontWeight="400"
                  transform="translate(915 78)" fill="#d5d9da" strokeWidth="0">
                <tspan y="0" fontWeight="400" strokeWidth="0">Instructions</tspan>
            </text>
            <text dx="0" dy="0" fontFamily="Helvetica Neue,sans-serif" fontSize="15" fontWeight="400"
                  transform="translate(1340 78)" fill="#d5d9da" strokeWidth="0">
                <tspan y="0" fontWeight="400" strokeWidth="0">Image</tspan>
            </text>
        </svg>
    </>
}
const CreateRecipes = () => {

    const ListInput = ({isIngredients}:{isIngredients: boolean}) => {
        const [inputList, setInputList] = useState<Array<{ input: string; amount?: string }>>([
            { input: "" },
        ]);

        const addInputField = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (inputList.length === 15) {
                alert("max amount of ingredients reached");
            } else {
                setInputList((prevInputList) => [...prevInputList, { input: "" }]);
            }
        };

        const removeInputField = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
            e.preventDefault();
            if (inputList.length === 1) {
                alert("lowest amount of ingredients reached");
            } else {
                setInputList((prevInputList) => {
                    const updatedList = [...prevInputList];
                    updatedList.splice(index, 1);
                    return updatedList;
                });
            }
        };

        const displayInputFields = () => {
            if(isIngredients){
            return inputList.map((input, index) => (
                <div key={index} id="createRecipesFormDiv1">
                    <div id="insideList">
                        <input
                            style={{width:"70%"}}
                            id="createRecipesTextInput"
                            className="listInput"
                            type="text"
                            {...register(`Ingredients.${index}.Name`, {required: true, maxLength: 25, pattern: /^[A-Za-z]+$/i})}
                            placeholder="Ingredient"/>
                        <h2 id="crListText">:</h2>
                        <input
                            style={{width:"10%"}}
                            id="createRecipesTextInput"
                            className="listInput"
                            type="text"
                            {...register(`Ingredients.${index}.Amount_Num`, {required: true, maxLength: 25, pattern: /^[0-9]+$/i})}
                            placeholder="Amount #"/>
                            {/*Make a custom validation message telling the user that they need to enter a decimal not a fraction*/}

                        <input list="amountTypes"
                            id="amountTypesInput"
                               placeholder="Amount Type"
                               className="listInput"
                        />

                        <datalist id="amountTypes">
                            <option value="tsp"/>
                            <option value="tbsp"/>
                            <option value="cup"/>
                        </datalist>
                    </div>
                    <div id="buttonInsideList">
                        {index > 0 && (
                        <button id="createRecipesButtonMinus" onClick={(e) => removeInputField(e, index)}/>
                    )}
                    </div>
                </div>
            ));
            }
            else{
                return inputList.map((input, index) => (
                    <div key={index} id="createRecipesFormDiv1">
                        <div id="insideList">
                            <h2 id="crListText">{index + 1}.</h2>
                            <input
                                id="createRecipesTextInput"
                                className="listInput"
                                type="text"
                                {...register(`Instructions.${index}`, {required: true, maxLength: 25, pattern: /^[A-Za-z0-9]+$/i})}
                                placeholder="Instruction"
                            />
                        </div>
                        <div id="buttonInsideList">
                            {index > 0 && (
                                <button id="createRecipesButtonMinus" onClick={(e) => removeInputField(e, index)}/>
                            )}
                        </div>
                    </div>
                ));
            }
        };

            return <>
                {displayInputFields()}
                <button id="createRecipesButtonAdd" style={{marginTop:"15px"}} onClick={(e) => addInputField(e)}/>
            </>
    }

    const [crFormState, setCRFormState] = useState<crState>(0)

    const dialogRef = useRef<HTMLDialogElement | null>(null)

    type RecipeForm = {
        Name: "",
        Culinary_Type: "",
        Description: "",
        Rating: 0,
        Ingredients: Array<Ingredient>,
        Instructions: Array<string>,
    }
    const {register, handleSubmit, formState} = useForm<RecipeForm>();

    const [recipeToPost, setRecipeToPost] = useState<Recipe>({
        Name: "",
        Culinary_Type: "",
        Description: "",
        Rating: 0,
        Ingredients: Array<Ingredient>(),
        Instructions: Array<string>(),
    })

    async function postData(recipe: Recipe) {
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

            if (!response.ok) {
                throw new Error("Failed to Upload Recipe") ;
            }
            console.log(response.status);
            dialogRef.current?.close();

        } catch (error) {
            let message;
            if (error instanceof Error) {
                message = error.message;
            } else {
                message = String(error);
            }
            console.error(`Error with Posting Recipe: ${message}`);
        }
    }

    const submitCreateRecipeForm: SubmitHandler<RecipeForm> = (data) => {
        console.log(data)
        dialogRef.current?.showModal();
    }

    const displayForm = () => {
        if (crFormState === 0) {
            return <>
                <div id="createRecipesFormDiv0">
                    <input id="createRecipesTextInput"
                           placeholder="Recipe Name"
                           {...register("Name", {required: true, maxLength: 30, pattern: /^[A-Za-z]+$/i})}/>
                </div>
                <div id="createRecipesFormDiv0">
                    <label id="createRecipesFormLabel">Recipe Rating (1-10): {}</label>
                    <input id="createRecipesRangeInput"
                        type="range" min="0" max="10"
                           {...register("Rating", {required: true, min: 0, max: 10})}/>
                </div>
                <div id="createRecipesFormDiv0">
                    <input id="createRecipesTextInput"
                           placeholder="Culinary Type (American, French, Japanese)"
                           {...register("Culinary_Type", {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})}/>
                </div>
                <div id="createRecipesFormDiv0">
                    <textarea id="createRecipesTextArea"
                              placeholder="Description"
                              {...register("Description", {required: true, maxLength: 100, pattern: /^[A-Za-z0-9.]+$/i})}/>
                </div>
            </>
        } else if (crFormState === 1) {
            return <ListInput isIngredients={true}/>

        } else if(crFormState === 2){
            return <ListInput isIngredients={false}/>
        }
        else if(crFormState === 3){
            return <div id="createRecipesFormDiv0">
                <input type="image" alt="recipeImage"/>
            </div>
            }
        else{
            console.error("crFormState Out of Bounds")
            return <></>
        }
    }

    return (<>
            <CustomDialog ref={dialogRef} onContinue={() =>postData(recipeToPost)} title="Are You Sure?"/>
            <div id="createRecipesLayout">
                <div id="createRecipesStatusBar">
                    <StatusBar state={crFormState}/>
                </div>
                <div id="createRecipesFormDiv">
                    <div id="createRecipesCenterForm">
                        <form id="createRecipesForm" onSubmit={handleSubmit(submitCreateRecipeForm)}>
                            <div id="createRecipesFormLayout">
                                {displayForm()}
                            </div>
                        </form>
                    </div>
                    <div id="createRecipesButtonDiv">
                        <div id="createRecipesCenterButtons">
                            {crFormState !== 0 && <button id="createRecipesButton" onClick={()=>setCRFormState(prevState => prevState - 1)}>prev</button>}
                            {crFormState !== 3 && <button id="createRecipesButton" onClick={()=>setCRFormState(prevState => prevState + 1)}>next</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRecipes;