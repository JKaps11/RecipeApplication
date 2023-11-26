import MainMenuOption from "./mainmenuoptions";
import CollapsedMenu from "./collapsedmenu";
import "../styling/mainmenu.css"
import {useState} from "react";
import collapsedmenu from "./collapsedmenu";

interface MainMenuProps{
    viewRecipeClick: () => void;
    createRecipeClick: () => void;
    homeButtonFunction: () => void;
    menuRecipeClick: () => void;
    menuLayoutClick: () => void;
}
const MainMenu = ({viewRecipeClick, createRecipeClick, menuRecipeClick, menuLayoutClick, homeButtonFunction}:MainMenuProps) => {

    const [showMenu, setShowMenu] = useState<boolean>(true);
    const menuCollapser = () =>{
        setShowMenu(!showMenu);
    }

    if(showMenu) {
        return <div id='mainmenuformat'>
            <div className='heading'>
                <div id='title'>
                    <h2>Editor Menu</h2>
                </div>
                <div id='hbutton'>
                    <button onClick={homeButtonFunction}/>
                </div>
            </div>
            <div id='menuoptions'>
                <div id='recipeOptions'>
                    <h3 id="recipeOptionsText">Recipe Options</h3>
                </div>
                <div id='createRecipe'>
                    <MainMenuOption name='Create Recipes' onButtonClick={createRecipeClick}/>
                </div>
                <div id='viewRecipes'>
                    <MainMenuOption name='View Recipes' onButtonClick={viewRecipeClick}/>
                </div>
                <div id='recipeOptions'>
                    <h3 id="recipeOptionsText">Menu Options</h3>
                </div>
                <div id='manageMenu'>
                    <MainMenuOption name='Recipe Manager' onButtonClick={menuRecipeClick}/>
                </div>
                <div id='manageMenuLayout'>
                    <MainMenuOption name='Layout Manager' onButtonClick={menuLayoutClick}/>
                </div>
                <div id="collapsemenu">
                    <MainMenuOption name={'Collapse Menu'} onButtonClick={menuCollapser}/>
                </div>
            </div>

        </div>;
    }
    else{
        return<CollapsedMenu
            createRecipeClick={createRecipeClick}
            viewRecipeClick={viewRecipeClick}
            menuRecipeClick={menuRecipeClick}
            menuLayoutClick={menuLayoutClick}
            homeButtonFunction={homeButtonFunction}
            collapseMenu={menuCollapser}
        />
    }
};
export default  MainMenu;