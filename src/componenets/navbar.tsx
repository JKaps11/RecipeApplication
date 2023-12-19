import React from "react";
import {useNavigate} from "react-router-dom";
import "../styling/navabar.css";
const Navbar = () => {
    const navigate = useNavigate();

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
    </div>
}

export default Navbar;