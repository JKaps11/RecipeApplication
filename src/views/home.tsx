import React, {useState} from 'react';
import "../styling/home.css";
import MainMenu from "../componenets/mainmenu";
import HomeConditionalRender from "../componenets/homeconditionalrender";
import {useNavigate} from "react-router-dom";

const HomePage = () => {

    const homeButtonFunction = () => {
        navigate("/home");
        setShowComponent("");
    }

    const navigate = useNavigate();

    const viewRecipeClick = () => {

    };

    const menuRecipeClick =() => {

    };

    const menuLayoutClick =() => {

    };

    const createRecipeClick = () => {
        setShowComponent("CulinarySelector");
        setPageTitle("Select a Culinary Type")
    };
    const [showComponent, setShowComponent] = useState<string>('');
    const [pageTitle, setPageTitle] = useState<string>("Welcome to Menu Editor")
    return<div id="homeLayout">
        <div id="mainmenuLayout">
            <MainMenu
                createRecipeClick={createRecipeClick}
                viewRecipeClick={viewRecipeClick}
                menuRecipeClick={menuRecipeClick}
                menuLayoutClick={menuLayoutClick}
                homeButtonFunction={homeButtonFunction}
            />
        </div>
        <div id='homepage'>
        <div className='header'>
            <div id='headerText'>
                <h2>{pageTitle}</h2>
            </div>
            <div id='signOutButton'>
                <button className="authbutton" onClick={() => navigate("/")}>
                    <span className="homespan">Sign Out</span>
                </button>
            </div>
        </div>
        <div className='body'>
            <HomeConditionalRender option={showComponent}/>
        </div>

    </div>
    </div>;
};

export default  HomePage;