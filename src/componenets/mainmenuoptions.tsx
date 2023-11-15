import React from  'react';
import "../styling/mainmenuoptions.css";
interface MainMenuOptionProps{
    name: string;
    onButtonClick: () => void;
}

const MainMenuOption = ({name, onButtonClick}: MainMenuOptionProps) => {

    return <button id="mmobutton" onClick={onButtonClick}>
        <span id="mmospan"> {name}</span>
        </button>;
};
export default MainMenuOption;