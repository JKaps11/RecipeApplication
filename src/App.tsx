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
    const clickMenuIcon = () => {
        setShowDropDownMenu(prevState => !prevState);
    };

    return <div id='appformat'>
        <BrowserRouter>
            <div id="navbar">
                <Navbar showDropDownMenu={showDropDownMenu} clickMenuIcon={clickMenuIcon}/>
            </div>
            <div id="appmenu">
                {showDropDownMenu && <Menu/>}
            </div>
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
        </BrowserRouter>
    </div>;
}

export default App;
