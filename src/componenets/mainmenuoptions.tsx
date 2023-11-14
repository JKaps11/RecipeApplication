import React from  'react';
import {useNavigate} from "react-router-dom";
import "../styling/mainmenuoptions.css";
interface MainMenuOptionProps{
    name: string;
    path: string;
};
const MainMenuOption = ({name, path}: MainMenuOptionProps) => {
    const navigate = useNavigate();

    return <button id="mmobutton" onClick={() => navigate(path)}>
        <span id="mmospan"> {name}</span>
        </button>;
};
export default MainMenuOption;