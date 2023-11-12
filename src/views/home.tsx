import React from  'react';
import "../styling/home.css";


export interface  HomePageProps{};

const HomePage: React.FunctionComponent<HomePageProps> = props => {
    return <div>
        <p>This is the Home Page</p>
    </div>;
};

export default  HomePage;