import React from 'react';
import '../styling/welcome.css';
import LoginButton from "../componenets/loginbutton";
import Navbar from "../componenets/navbar";
const WelcomePage = () => {
    return <div id="welcomelayout">
        <div id="header">
            <h1 id="welcomeTitle">Remedy Recipes</h1>
        </div>
        <div id="navbar">
            <Navbar/>
        </div>
        <div id="lpcontent">
            <h1 id="welcometitle">The worlds simplest menu and recipe editor</h1>
            <h1 id="welcometitletwo">Remedy Recipes</h1>
            <LoginButton/>
        </div>

    </div>

}
export default WelcomePage;