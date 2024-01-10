import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/home";
import AboutPage from "./views/aboutpage";
import React, {useState} from 'react';
import WelcomePage from "./views/welcome";
import AccountPage from "./views/accountpage";
import FeaturesPage from "./views/featurespage";
import Navbar from "./componenets/navbar";
import Menu from "./componenets/menu";
import ViewRecipes from "./views/viewrecipes";
import CreateRecipes from "./views/createrecipes";
import {useAuth0} from "@auth0/auth0-react";
import MenuLayout from "./views/menulayout";
import MenuRecipeEditor from "./views/menurecipeeditor";
import Settings from "./views/settings";


function App() {

    const {isAuthenticated} = useAuth0();
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    const clickMenuIcon= () =>{

        let val: boolean = !showDropDownMenu
        setShowDropDownMenu(val);

        const mIcon1 : HTMLElement|null = document.getElementById('menuIconColor1');
        const mIcon2 : HTMLElement|null = document.getElementById('menuIconColor2');
        const mIcon3 : HTMLElement|null = document.getElementById('menuIconColor3');
        const menu : HTMLElement|null = document.getElementById('appmenu');


        if(mIcon1 === null || mIcon2 === null || mIcon3 === null){
            console.log("element not found")
        }
        if(!showDropDownMenu) {
            console.log("attempting change")
            mIcon1?.setAttribute("d", "M21.9351 31.6815C20.5779 32.6318 18.7073 32.3020 17.757 30.9447L3.72073 10.8989C2.7704 9.5417 3.10024 7.67107 4.45746 6.72073V6.72073C5.81467 5.7704 7.68531 6.10024 8.63564 7.45746L22.6719 27.5033C23.6222 28.8605 23.2924 30.7311 21.9351 31.6815V31.6815Z");
            mIcon2?.setAttribute("d", "M18.534 31.6063C17.1768 30.656 16.8469 28.7853 17.7973 27.4281L31.7809 7.45746C32.7312 6.10024 34.6018 5.7704 35.9591 6.72073V6.72073C37.3163 7.67106 37.6461 9.5417 36.6958 10.8989L22.7122 30.8696C21.7618 32.2268 19.8912 32.5566 18.534 31.6063V31.6063Z");
            mIcon3?.setAttribute("d", "M3 9C3 7.34315 4.34315 6 6 6H34C35.6569 6 37 7.34315 37 9V9C37 10.6569 35.6569 12 34 12H6C4.34315 12 3 10.6569 3 9V9Z");
        } else {
            mIcon1?.setAttribute("d", "M3 6H37V12H3V6Z")
            mIcon2?.setAttribute("d", "M3 28H37V34H3V28Z")
            mIcon3?.setAttribute("d", "M3 17H37V23H3V17Z")
        }
    }

    return <div id='appformat'>
        <div id="applayout">
            <BrowserRouter>
                <div id="navbar">
                    <Navbar clickMenuIcon={clickMenuIcon}/>
                </div>
                <div id="appmain">
                    {showDropDownMenu && <div id="appmenu">
                        <Menu/>
                    </div>}
                    <div id="routes">
                        <Routes>
                            <Route path='/' element={<WelcomePage/>}/>
                            {isAuthenticated &&
                                <>
                            <Route path='/home' element={<HomePage/>}/>
                            <Route path='/features' element={<FeaturesPage/>}/>
                            <Route path='/about' element={<AboutPage/>}/>
                            <Route path='/profile' element={<AccountPage/>}/>
                            <Route path='/viewrecipes' element={<ViewRecipes/>}/>
                            <Route path='/createrecipes' element={<CreateRecipes/>}/>
                            <Route path='/menulayout' element={<MenuLayout/>}/>
                            <Route path='/menurecipeeditor' element={<MenuRecipeEditor/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                                </>}
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
  </div>;
}

export default App;
