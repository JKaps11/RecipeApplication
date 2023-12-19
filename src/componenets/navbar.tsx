import React from "react";
import {useNavigate} from "react-router-dom";
import "../styling/navabar.css";
import LogoutButton from "./logoutbutton";
import {useAuth0} from "@auth0/auth0-react";
const Navbar = () => {
    const navigate = useNavigate();
    const {user} = useAuth0();

    return <div id="navbarLayout">
        <button id="navbarButton" onClick={() => navigate("./")}>
            Home
        </button>
        <button id="navbarButton" onClick={() => navigate("/features")}>
            Features
        </button>
        <button id="navbarButton" onClick={() => navigate("/about")}>
            About
        </button>
        <button id="navbarButton" onClick={() => navigate("/home")}>
            MenuEditor
        </button>
        <LogoutButton/>
        <button id="profpic" style={{backgroundImage: user?.picture}} onClick={() => navigate("/profile")}>

        </button>
    </div>
}

export default Navbar;