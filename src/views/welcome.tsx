import React from 'react';
import '../styling/welcome.css';
import {useNavigate} from "react-router-dom";


const WelcomePage = () => {
    const navigate = useNavigate()

    return <div id="welcomelayout">
        <h1 id="welcometitle">Welcome to Remedy Recipes</h1>
        <button id="welcomebutton" onClick={() => navigate('/home')}>
            <span id="welcomespan">
                Login
            </span>
        </button>
    </div>
}
export default WelcomePage;