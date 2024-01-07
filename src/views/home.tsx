import React, {useState} from 'react';
import "../styling/home.css";
import MainMenu from "../componenets/mainmenu";
import HomeConditionalRender from "../componenets/homeconditionalrender";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const HomePage = () => {

    const { isAuthenticated} = useAuth0();
    const homeButtonFunction = () => {
        navigate("/home");
        setShowComponent("");
    }

    const navigate = useNavigate();

    const viewRecipeClick = () => {
        setShowComponent("ViewRecipes");
        setPageTitle("View Recipes")
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
    const [pageTitle, setPageTitle] = useState<string>("Welcome to the Menu Editor")

    return isAuthenticated ? (
        <div id="homeLayout">
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
            <h2>{pageTitle}</h2>
        </div>
        <div className='body'>
            <HomeConditionalRender option={showComponent}/>
        </div>

    </div>
    </div>):(<h2>
        You need to log in first
    </h2>);
};

export default  HomePage;