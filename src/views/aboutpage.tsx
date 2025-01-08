import React from 'react';
import "../styling/home.css"
const AboutPage= () => {
    return <>
        <div id={"homeLayout"}>
            <div id={"panel1"}>
                <div id={"panelTitleDiv"}>
                    <h1 id={"homeTitle"}>Our Mission</h1>
                    <p id={"homeText"}>
                        At Remedy Recipes, we aim to inspire creativity and connection through the joy of cooking.
                        Our mission is to empower food enthusiasts of all skill levels to discover, share, and create delicious recipes that bring people together.
                        Whether you're exploring new flavors or sharing cherished family traditions, we are here to make your culinary journey enjoyable, accessible, and rewarding.
                        Let's cook, create, and celebrate good food together!
                    </p>
                </div>
                <div id={"panelPictureDiv"}>
                    <img alt={"family cooking"} id={"panelOnePicture"} src={require("../assets/familycooking.jpg")}/>
                </div>
            </div>

        </div>
    </>
};

export default  AboutPage;