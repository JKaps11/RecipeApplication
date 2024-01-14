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
                        We also offer a menu editing and creation feature. For more information please scroll down!
                    </p>
                </div>
                <div id="panelPictureDiv">
                    <img alt="ingredients" id="panelOnePicture" src={require("../assets/homepageone.jpg")}></img>
                </div>
            </div>

            <div id="panel2"></div>
            <div id="panel1">
                <div id="panelPictureDiv"></div>
                <div id="panelTitleDiv">
                    <h2 id="homeTitleTwo">Let's get Cooking!</h2>
                    <p id="homeText">
                        Get Started by pressing the three bars in the top right of your screen and selecting an option
                        from the Editor Menu. For more information, check out the features and about page in the top
                        right of the screen.
                    </p>
                </div>
            </div>
        </div>
    </>
};

export default HomePage;
