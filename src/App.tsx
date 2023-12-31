import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/home";
import AboutPage from "./views/aboutpage";
import React from 'react';
import WelcomePage from "./views/welcome";
import AccountPage from "./views/accountpage";
import FeaturesPage from "./views/featurespage";
import Navbar from "./componenets/navbar";


function App() {
  return <div id='appformat'>
        <div id="applayout">
            <BrowserRouter>
            <div id="header">
                <h1 id="appTitle">Remedy Recipes</h1>
            </div>
            <div id="navbar">
                <Navbar/>
            </div>
            <div id="routes">
                <Routes>
                    <Route path='/' element={<WelcomePage/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/features' element={<FeaturesPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/profile' element={<AccountPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        </div>
  </div>;
}
export default App;
