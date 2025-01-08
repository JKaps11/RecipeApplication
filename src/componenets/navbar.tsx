import React from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import "../styling/navabar.css";
import {useAuth0} from "@auth0/auth0-react";

interface navbarProps{
    showDropDownMenu: boolean
    clickMenuIcon: () => void;
}
const Navbar = ({showDropDownMenu, clickMenuIcon}:navbarProps) => {
    const navigate : NavigateFunction = useNavigate();
    const {user, isAuthenticated} = useAuth0();

    return <div id ="navbarLayout">
        <div id="menuIcon">
            <button id="menuIconButton" onClick={clickMenuIcon}>
                <svg id="morph_svg" width="40" height="40" viewBox="0 0 40 40" fill="none" >
                    <rect width="40" height="40" fill="#none"/>
                    <path id="menuIconColor1" className={showDropDownMenu ? "morphing" : "reverse"} d="M3 6H37V12H3V6Z"/>
                    <path id="menuIconColor2" className={showDropDownMenu ? "morphing" : "reverse"} d="M3 17H37V23H3V17Z"/>
                    <path id="menuIconColor3" className={showDropDownMenu ? "morphing" : "reverse"} d="M3 28H37V34H3V28Z"/>
                </svg>
                <p id="menuIconLabel">Menu</p>

            </button>
        </div>
        <div id="titlediv">
            <h1 id="title">Remedy Recipes</h1>
        </div>
        <div id="navbarButtonsLayout">
            <button id="navbarButton" onClick={() => navigate("./")}>
                Home
            </button>
            {/*<button id="navbarButton" onClick={() => navigate("/features")}>Features</button>*/}
        <button id="navbarButton" onClick={() => navigate("/about")}>
            About
        </button>

            {isAuthenticated && (
                <button
                    id="profpic"
                    style={{ backgroundImage: `url(${user?.picture})` }}
                    onClick={() => navigate("/profile")}
                >
                </button>
            )}


        </div>
    </div>
}

export default Navbar;