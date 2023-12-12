import React from "react";
import "../styling/logoutbutton.css"
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (): JSX.Element | null => {
    const { logout, isAuthenticated } = useAuth0();

    return !isAuthenticated ? (
        <button id ="logoutbutton" onClick={() => logout()}>
            <span id="logoutspan">
                Sign Out
            </span>
        </button>
    ) : null;
}

export default LogoutButton;
