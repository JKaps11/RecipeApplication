import React from  'react';
import MainMenuOption from "./mainmenuoptions";
import "../styling/mainmenu.css"
import {useNavigate} from "react-router-dom";
const MainMenu = () => {

    const navigate = useNavigate();

    return <div id='mainmenuformat'>
        <div className ='heading'>
            <div id='title'>
                <h2>Welcome to Remedy Recipes</h2>
            </div>
            <div id='hbutton'>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
        <div id ='menuoptions'>
            <MainMenuOption name='Recipes' path = '/recipes'/>
        </div>

    </div>;
};
export default  MainMenu;