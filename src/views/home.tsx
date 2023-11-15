import React, {useState} from 'react';
import TextBubble from '../componenets/textbubble'
import "../styling/home.css";
import CulinarySelector from "../componenets/culinaryselector";
import MainMenu from "../componenets/mainmenu";

const HomePage = () => {

    const viewRecipeClick = () => {

    };

    const createRecipeClick = () => {
        setShowComponent(true);
    };
    const [showComponent, setShowComponent] = useState<boolean>(false);

    let pageTitle = "Welcome to Remedy Recipes"
    return<div id="homeLayout">
        <div id="mainmenuLayout">
            <MainMenu createRecipeClick={createRecipeClick} viewRecipeClick={viewRecipeClick}/>
        </div>
        <div id='homepage'>
        <div className='header'>
            <div id='headerText'>
                <h2>{pageTitle}</h2>
            </div>
            <div id='loginButton'>
                <button className="authbutton">
                    <span className="homespan">Login</span>
                </button>
            </div>
            <div id='signOutButton'>
                <button className="authbutton">
                    <span className="homespan">Sign Out</span>
                </button>
            </div>
        </div>
        <div className='body'>
            <TextBubble>
                <h4>Start Creating Recipes Now!</h4>
                <p>
                    Get started by pressing the "create recipes" button in the the recipe navigation menu.
                </p>
            </TextBubble>
        </div>
            {showComponent && <CulinarySelector/>}
    </div>
    </div>;
};

export default  HomePage;