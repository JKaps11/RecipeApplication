import React, {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import '../styling/menu.css';
import LogoutButton from "./logoutbutton";
import {useAuth0} from "@auth0/auth0-react";

type MenuOption = {
    name: string;
    path: string;
}

const Menu = () => {

    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const menuOptions: Array<MenuOption> = [
        {
            name:"View Recipes",
            path:"viewrecipes"
        },
        {
            name:"Create Recipes",
            path:"createrecipes"
        },
        {
            name:"Grocery Lists",
            path:"grocerylists"
        },
        {
            name:"Settings",
            path:"settings"
        }
    ];

    const displayMenuOptions = (mos: Array<MenuOption>) :ReactNode =>{
        return mos.map((mo: MenuOption) => {
            return isAuthenticated ? <button key={mo.name} id="menuOptionButton" onClick={() => navigate(mo.path)}>{mo.name}</button>:
                <button key={mo.name} id="menuOptionButton" onClick={() => loginWithRedirect()}>{mo.name}</button>;
                    });
    }

    return <div id="menuFormat">
        <div id="menuTitleDiv">
            <h2 id="menuTitle">Editor Menu</h2>
        </div>
        <div id="menuOptions">
            {displayMenuOptions(menuOptions)}
            <LogoutButton/>
        </div>
    </div>
}
export default Menu;
