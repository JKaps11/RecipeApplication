import React from "react";
import "../styling/menu.css"
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (): JSX.Element | null => {
    const { logout, isAuthenticated } = useAuth0();

    return isAuthenticated ? (
        <button id ="menuOptionButton" onClick={() => logout()}>
            Sign Out
        </button>
    ) : null;
}

export default LogoutButton;
