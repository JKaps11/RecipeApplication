import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/home";
import AboutPage from "./views/aboutpage";
import React, {useEffect, useState} from 'react';
import AccountPage from "./views/accountpage";
import FeaturesPage from "./views/featurespage";
import Navbar from "./componenets/navbar";
import Menu from "./componenets/menu";
import ViewRecipes from "./views/viewrecipes";
import CreateRecipes from "./views/createrecipes";
import GroceryLists from "./views/grocerylists";
import {useAuth0} from "@auth0/auth0-react";
import Settings from "./views/settings";


function App() {

    const {isAuthenticated} = useAuth0();
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    const [show, setShow] = useState<boolean>(false)
    const clickMenuIcon = () => {
        setShowDropDownMenu(prevState => !prevState);
    };

    return (
    <div id='appformat'>
        <BrowserRouter>
            <div id="navbar">
                <Navbar showDropDownMenu={showDropDownMenu} clickMenuIcon={clickMenuIcon}/>
            </div>
            <div id="appmain">
                {showDropDownMenu && <div id="appmenu"><Menu/></div>}

            <div id="routes">
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    {/*<Route path='/features' element={<FeaturesPage/>}/>*/}
                    <Route path='/about' element={<AboutPage/>}/>
                    {isAuthenticated &&
                        <>
                            <Route path='/profile' element={<AccountPage/>}/>
                            <Route path='/viewrecipes' element={<ViewRecipes/>}/>
                            <Route path='/createrecipes' element={<CreateRecipes/>}/>
                            {/*<Route path='/grocerylists' element = {<GroceryLists/>}/>*/}
                            {/* <Route path='/settings' element={<Settings/>}/>*/}
                        </>}
                </Routes>
            </div>
            </div>
        </BrowserRouter>
    </div>
);
}

export default App;
