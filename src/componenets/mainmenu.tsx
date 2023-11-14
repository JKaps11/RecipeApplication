import React from  'react';
import MainMenuOption from "./mainmenuoptions";
import "../styling/mainmenu.css"
import {useNavigate} from "react-router-dom";
const MainMenu = () => {

    const navigate = useNavigate();

    return <div id='mainmenuformat'>
        <div className ='heading'>
            <div id='title'>
                <h2>Recipe Navigator</h2>
            </div>
            <div id='hbutton'>
                <button onClick={() => navigate('/')}/>
            </div>
        </div>
        <div id ='menuoptions'>
            <div id='recipeOptions'>
                <h3 id="recipeOptionsText">Recipe Options</h3>
            </div>
            <div id='createRecipe'>
                <MainMenuOption name='Create Recipes' path = '/createrecipes'/>
            </div>

            <div id='viewRecipes'>
                <MainMenuOption name='View Recipes' path = '/viewrecipes'/>
            </div>

        </div>

    </div>;
};
export default  MainMenu;