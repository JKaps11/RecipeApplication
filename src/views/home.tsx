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
            <div id='loginButton'>
                <button>
                    <h6>Login</h6>
                </button>
            </div>
            <div id='signOutButton'>
                <button>
                    <h6>Sign Out</h6>
                </button>
            </div>
        </div>
        <div id='body'>

        </div>
    </div>;
};

export default  HomePage;