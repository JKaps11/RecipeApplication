import React from 'react';
import '../styling/welcome.css';
import LoginButton from "../componenets/loginbutton";
const WelcomePage = () => {
    return<div id="lpcontent">
            <h1 id="welcomeTitle">"The worlds simplest menu and recipe editor"</h1>
            <LoginButton/>
        </div>
}
export default WelcomePage;