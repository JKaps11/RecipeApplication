import React from  'react';
import "../styling/home.css";


export interface  HomePageProps{};

const HomePage: React.FunctionComponent<HomePageProps> = props => {
    let pageTitle = "Welcome to Remedy Recipes"
    return <div id='homepage'>
        <div className='header'>
            <div id='headerText'>
                <h2>{pageTitle}</h2>
            </div>
            <div className='loginButton'>
                <button>Login</button>
            </div>
            <div className='signOutButton'>
                <button>Sign Out</button>
            </div>
        </div>
        <div id='body'>

        </div>
    </div>;
};

export default  HomePage;