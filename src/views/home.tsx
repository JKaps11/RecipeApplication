import React from 'react';
import "../styling/home.css";
import {useAuth0} from "@auth0/auth0-react";

const HomePage = () => {

    const { isAuthenticated} = useAuth0();

    return isAuthenticated ? (
        <div id="homeLayout">
            <div id="panel1">
                <div id="panelTitleDiv">
                    <h1 id="homeTitle">Welcome to Remedy Recipes</h1>
                </div>
                <div id="panelTextDiv">
                    <p id="homeText">
                        Get Started by pressing the 3 bars in the top right of you're screen and selection an option
                        from the Editor Menu
                    </p>
                </div>

            </div>
            <div id="panel2">

            </div>
            <div id="panel3">

            </div>
        </div>) : (<h2>
        You need to log in first
    </h2>);
};

export default HomePage;