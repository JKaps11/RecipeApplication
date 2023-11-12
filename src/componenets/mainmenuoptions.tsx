import React from  'react';
import {useNavigate} from "react-router-dom";
import "../styling/mainmenu.css";
interface MainMenuOptionProps{
    name: string;
    path: string;
};
const MainMenuOption = ({name, path}: MainMenuOptionProps) => {
    const navigate = useNavigate();

    return <button onClick={() => navigate(path)}>
            {name}
        </button>;
};
export default MainMenuOption;