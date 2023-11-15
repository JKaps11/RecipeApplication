import MainMenuOption from "./mainmenuoptions";
import "../styling/mainmenu.css"
import {useNavigate} from "react-router-dom";

interface MainMenuProps{
    viewRecipeClick: () => void;
    createRecipeClick: () => void;
}
const MainMenu = ({viewRecipeClick, createRecipeClick}:MainMenuProps) => {

    const navigate = useNavigate();

    return <div id='mainmenuformat'>
        <div className ='heading'>
            <div id='title'>
                <h2>Recipe Navigator</h2>
            </div>
            <div id='hbutton'>
                <button onClick={() => navigate('/')}/>
            </div>
        </div>
        <div id ='menuoptions'>
            <div id='recipeOptions'>
                <h3 id="recipeOptionsText">Recipe Options</h3>
            </div>
            <div id='createRecipe'>
                <MainMenuOption name='Create Recipes' onButtonClick={createRecipeClick}/>
            </div>

            <div id='viewRecipes'>
                <MainMenuOption name='View Recipes' onButtonClick={viewRecipeClick}/>
            </div>
        </div>

    </div>;
};
export default  MainMenu;