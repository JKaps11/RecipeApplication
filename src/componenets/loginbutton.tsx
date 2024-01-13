import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styling/loginbutton.css";

interface LoginPageProps {
    scrollRef: React.RefObject<HTMLDivElement>;
}
const LoginButton = ({scrollRef}:LoginPageProps)=> {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const scrollToBeginning = () => {

        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    };


    return !isAuthenticated ? (
        <button id="loginbutton" onClick={() => loginWithRedirect()}>
            Login
        </button>
    ) : (
        <button id="loginbutton" onClick={scrollToBeginning}>
            Get Started
        </button>
    );
};

export default LoginButton;
