import React from 'react';
import '../styling/welcome.css';
import LoginButton from "../componenets/loginbutton";
const WelcomePage = () => {
    return<div id="landingpage">
        <div id="lpcontent">
            <h1 id="welcomeTitle">"The place where your dream recipes and menus come to fruition"</h1>
            <LoginButton/>
        </div>
    </div>
}
export default WelcomePage;