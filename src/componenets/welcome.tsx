import React from 'react';
import '../styling/welcome.css';
import LoginButton from "./loginbutton";

interface WelcomePageProps {
    scrollRef:React.RefObject<HTMLDivElement>;
}

const WelcomePage = ({ scrollRef }: WelcomePageProps) => {
    return (
        <div id="landingpage">
            <div id="lpcontent">
                <h1 id="welcomeTitle">"The place where your dream recipes come to fruition"</h1>
                <LoginButton scrollRef={scrollRef} />
            </div>
        </div>
    );
};

export default WelcomePage;
