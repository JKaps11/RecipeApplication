import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate} from "react-router-dom";
import "../styling/loginbutton.css";
const LoginButton = (): JSX.Element | null => {
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return !isAuthenticated ? (
        <button id="loginbutton" onClick={() => loginWithRedirect()}>
            Login
        </button>) : <button id="loginbutton" onClick={() => navigate("/home")}>
        Continue
    </button>;
};

export default LoginButton;
