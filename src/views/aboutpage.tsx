import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const AboutPage= () => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <div>
            <p>This is the the About Page</p>
        </div> : <h2>
        You need to log in first
    </h2>;
};

export default  AboutPage;