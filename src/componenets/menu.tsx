import React, {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import '../styling/menu.css';
import LogoutButton from "./logoutbutton";
import {useAuth0} from "@auth0/auth0-react";
import { CiSettings, CiCircleList } from "react-icons/ci";
import { BiSolidFoodMenu, BiPencil } from "react-icons/bi";

type MenuOption = {
    name: string;
    path: string;
    icon: any;
}

const Menu = () => {

    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const menuOptions: Array<MenuOption> = [
        {
            name:"View Recipes",
            path:"viewrecipes",
            icon: <BiSolidFoodMenu/>
        },
        {
            name:"Create Recipes",
            path:"createrecipes",
            icon: <BiPencil/>
        },
        {
            name:"Grocery Lists",
            path:"grocerylists",
            icon: <CiCircleList/>
        },
        {
            name:"Settings",
            path:"settings",
            icon: <CiSettings />
        }
    ];

    const displayMenuOptions = (mos: Array<MenuOption>) :ReactNode =>{
        return mos.map((mo: MenuOption) => {
            return isAuthenticated ? <button key={mo.name} id="menuOptionButton" onClick={() => navigate(mo.path)}>{mo.icon} {mo.name}</button>:
                <button key={mo.name} id="menuOptionButton" onClick={() => loginWithRedirect()}>{mo.name}</button>;
                    });
    }

    return <div id="menuFormat">
        <div id="menuTitleDiv">
            <h2 id="menuTitle">Editor Menu</h2>
        </div>
        <div id="menuOptions">
            {displayMenuOptions(menuOptions)}
        </div>
    </div>
}
export default Menu;
