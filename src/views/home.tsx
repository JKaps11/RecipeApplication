import React, { useRef} from 'react';
import "../styling/home.css";
import WelcomePage from "../componenets/welcome";

const HomePage = () => {
    const scrollRef = useRef<HTMLDivElement>(null);


    return<>
            <WelcomePage scrollRef={scrollRef}/>
        <div id="homeLayout" ref={scrollRef}>
            <div id="panel1">
                <div id="panelTitleDiv">
                    <h1 id="homeTitle">Welcome to Remedy Recipes</h1>
                    <p id="homeText">
                        We are a free and open source project catered to your recipe storing and creating needs.
                        We also offer a grocery list feature to help plan out your shopping trips! For more information please scroll down!
                    </p>
                </div>
                <div id="panelPictureDiv">
                    <img alt="ingredients" id="panelOnePicture" src={require("../assets/homepageone.jpg")}></img>
                </div>
            </div>

            <div id="panel2">
                <div id="panel2Div">
                    <span id="whiteCircle">
                        <img src={require("../assets/recipeList.png")} id="panel2Image" alt="menu"/>
                    </span>
                    <h2 id="homeTitle" style={{fontSize: "30px"}}>Create Recipes</h2>
                    <p id="homeText">
                        A helpful GUI that will guide the user through the stages of creating a recipe.
                        Contains information like rating, name, ingredients, instructions, and more!
                    </p>

                </div>
                <div id="panel2Div">
                    <span id="whiteCircle">
                        <img src={require("../assets/menu.png")} id="panel2Image" alt="menu"/>
                    </span>

                    <h2 id="homeTitle" style={{fontSize: "30px"}}>View Recipes</h2>
                    <p id="homeText">
                        Search and sort through all the recipes you have created! Manage your recipes by selecting one
                        of them,
                        and the clicking either delete, or update!
                    </p>

                </div>
                <div id="panel2Div">
                    <span id="whiteCircle">
                        <img src={require("../assets/groceryList.png")} id="panel2Image" alt="groceryList"/>
                    </span>
                    <h2 id="homeTitle" style={{fontSize: "30px"}}>Grocery List</h2>
                    <p id="homeText">
                        Add the recipes that you want to buy ingredients for and the grocery list will automatically
                        calculate the amount
                        of an ingredient you need accross all the recipes you input!
                    </p>
                </div>
            </div>
            <div id="panel1">
                <div style={{width:"70%"}} id="panelPictureDiv">
                    <img alt="ingredients" id="panelThreePicture" src={require("../assets/helpMenu.PNG")}></img>
                </div>
                <div id="panelTitleDiv">
                    <h2 id="homeTitleTwo">Let's get Cooking!</h2>
                    <p id="homeText">
                        Get Started by pressing the three bars in the top left of your screen and selecting an option
                        from the Editor Menu. For more information, check out the features and about page in the top
                        right of the screen.
                    </p>
                </div>
            </div>
        </div>
    </>
};

export default HomePage;
