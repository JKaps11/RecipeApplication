import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styling/loginbutton.css";
const LoginButton = (): JSX.Element | null => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return !isAuthenticated ? (
        <button id="loginbutton" onClick={() => loginWithRedirect()}>
            <span id="loginspan">
                Login
            </span>
        </button>
    ) : null;
};

export default LoginButton;
