import React from "react";
import "../styling/collapsedmenu.css"
interface CollapsedMenuProps{
    viewRecipeClick: () => void;
    createRecipeClick: () => void;
    homeButtonFunction: () => void;
    menuRecipeClick: () => void;
    menuLayoutClick: () => void;
    collapseMenu: () => void;
}

const CollapsedMenu = ({viewRecipeClick, createRecipeClick, menuRecipeClick, menuLayoutClick, homeButtonFunction, collapseMenu}:CollapsedMenuProps) => {
    return <div id={"cmenulayout"}>
        <button id="homeButton" title="Home Page" onClick={homeButtonFunction}/>
        <button id="crecipeButton" onClick={createRecipeClick}/>
        <button id="vrecipeButton" onClick={viewRecipeClick}/>
        <button id="mrecipeButton" onClick={menuRecipeClick}/>
        <button id="mlayoutButton" onClick={menuLayoutClick}/>
        <button id="collapseButton" onClick={collapseMenu}/>
    </div>
}

export default CollapsedMenu;