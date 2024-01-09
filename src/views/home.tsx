import React from 'react';
import "../styling/home.css";
import {useAuth0} from "@auth0/auth0-react";

const HomePage = () => {

    const { isAuthenticated} = useAuth0();

    return isAuthenticated ? (
        <div id="homeLayout">

        </div>):(<h2>
        You need to log in first
    </h2>);
};

export default  HomePage;