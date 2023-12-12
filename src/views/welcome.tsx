import React from 'react';
import '../styling/welcome.css';
import LoginButton from "../componenets/loginbutton";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";


const WelcomePage = () => {
    const  {isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    return isAuthenticated ? <div id="welcomelayout">
        <h1 id="welcometitle">Welcome to Remedy Recipes</h1>
        <button id ="welcomebutton" onClick={() => navigate("/home")}>
            <span id ="welcomespan">
                Continue
            </span>
        </button>
    </div> : <div id="welcomelayout">
        <h1 id="welcometitle">Welcome to Remedy Recipes</h1>
        <LoginButton/>
    </div>
}
export default WelcomePage;