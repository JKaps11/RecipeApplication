import React from 'react';
import '../styling/welcome.css';
import LoginButton from "../componenets/loginbutton";
const WelcomePage = () => {
    return<div id="lpcontent">
            <h1 id="welcometitle">The worlds simplest menu and recipe editor</h1>
            <h1 id="welcometitletwo">Remedy Recipes</h1>
            <LoginButton/>
        </div>
}
export default WelcomePage;