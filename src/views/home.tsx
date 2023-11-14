import React from  'react';
import TextBubble from '../componenets/textbubble'
import "../styling/home.css";
import Textbubble from "../componenets/textbubble";


export interface  HomePageProps{};

const HomePage: React.FunctionComponent<HomePageProps> = props => {
    let pageTitle = "Welcome to Remedy Recipes"
    return <div id='homepage'>
        <div className='header'>
            <div id='headerText'>
                <h2>{pageTitle}</h2>
            </div>
            <div id='loginButton'>
                <button className="authbutton">
                    <span className="homespan">Login</span>
                </button>
            </div>
            <div id='signOutButton'>
                <button className="authbutton">
                    <span className="homespan">Sign Out</span>
                </button>
            </div>
        </div>
        <div className='body'>
            <TextBubble>
                <p>Start Creating Recipes Now!</p>
            </TextBubble>
        </div>
    </div>;
};

export default  HomePage;