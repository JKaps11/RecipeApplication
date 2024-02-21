import React, {useRef, useState} from "react";
import "../styling/createrecipes.css";
import CustomDialog from "../componenets/customdialog";
import {Ingredient, Recipe} from "../customTypes";
import {postRecipestoDB} from "../recipeAPI";
import {SubmitHandler, useForm} from "react-hook-form";
import useFilePreview from "../componenets/useFilePreview";

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
        Name: string,
        Culinary_Type: string,
        Description: string,
        Rating: number,
        Ingredients: Array<Ingredient>,
        Instructions: Array<string>,
        Image: FileList,
    }
    const {register, handleSubmit, watch, formState, getValues} = useForm<RecipeForm>({
        defaultValues: {Rating: 0}
    });

    const watchRating = watch("Rating")
    const watchImage = watch("Image")
    const [filePreview] = useFilePreview(watchImage);

    const submitCreateRecipeForm: SubmitHandler<RecipeForm> = () => {
        dialogRef.current?.showModal();
    }

    const handleContinue = () => {
        postRecipestoDB(getValues()).then()
        dialogRef.current?.close()
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
                    <label id="createRecipesFormLabel">Recipe Rating (1-10): {watchRating}</label>
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
                <div className="container">
                    {(filePreview && typeof filePreview === "string") ? <img src={filePreview} alt="preview"/>
                        : <div className="header">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                                        stroke="#01796F" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <p>Browse File to upload!</p>
                        </div>}
                    <label htmlFor="file" className="footer">
                        <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path>
                                <path d="M18.153 6h-.009v5.342H23.5v-.002z"></path>
                            </g>
                        </svg>
                        <p>{(filePreview) ? watchImage[0]?.name : "No File Chosen" }</p>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
                                    stroke="#000000" strokeWidth="2"></path>
                                <path d="M19.5 5H4.5" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                                <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z"
                                      stroke="#000000" strokeWidth="2"></path>
                            </g>
                        </svg>
                    </label>
                    <input id="file" type="file"
                           {...register("Image", {required: true})}/>
                </div>
            </div>
        } else {
            console.error("crFormState Out of Bounds")
            return <></>
        }
    }

    return (<>
            <CustomDialog ref={dialogRef} onContinue={() => handleContinue()} title="Are You Sure?"/>
            <div id="createRecipesLayout">
                <div id="createRecipesStatusBar">
                    <StatusBar state={crFormState}/>
                </div>
                <div id="createRecipesFormDiv">
                    <div id="createRecipesCenterForm">
                        <form id="createRecipesForm" onSubmit={handleSubmit(submitCreateRecipeForm)}>
                            <div id="createRecipesFormLayout">
                                {displayForm()}
                                {crFormState === 3 && <div id="createRecipesSubmitDiv"><input id="createRecipesButton"
                                                                  type="submit" /></div>}
                            </div>
                        </form>
                    </div>
                    <div id="createRecipesButtonDiv">
                        <div id="createRecipesCenterButtons">
                            {crFormState !== 0 && <button id="createRecipesButton"
                                                          onClick={() => setCRFormState(prevState => prevState - 1)}>prev</button>}
                            {crFormState !== 3 && <button id="createRecipesButton"
                                                          onClick={() => setCRFormState(prevState => prevState + 1)}>next</button>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRecipes;
