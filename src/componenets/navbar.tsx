import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styling/navabar.css";
import {useAuth0} from "@auth0/auth0-react";

interface navbarProps{
    clickMenuIcon: () => void;
}
const Navbar = ({clickMenuIcon}:navbarProps) => {
    const navigate = useNavigate();
    const {user, isAuthenticated} = useAuth0();


    const menuImgUrl:string = require("../assets/menuIcon.png")

    return <div id ="navbarLayout">
        <div id="menuIcon">
            <button id="menuIconButton" onClick={clickMenuIcon}>
                <img id="menuIconImage" src={menuImgUrl} alt="menuIcon"></img>
            </button>
        </div>
    <div id="titlediv">
        <h1 id="title">Remedy Recipes</h1>
    </div>
    <div id="navbarButtonsLayout">
        <button id="navbarButton" onClick={() => navigate("./")}>
            Welcome
        </button>
        <button id="navbarButton" onClick={() => navigate("/features")}>
            Features
        </button>
        <button id="navbarButton" onClick={() => navigate("/about")}>
            About
        </button>
        <button id="navbarButton" onClick={() => navigate("/home")}>
            Home
        </button>

        {isAuthenticated && <button id="profpic" style={{backgroundImage: user?.picture}} onClick={() => navigate("/profile")}>

        </button>}
    </div>
    </div>
}

export default Navbar;