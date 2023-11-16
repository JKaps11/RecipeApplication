import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/home";
import AboutPage from "./views/aboutpage";
import React from 'react';
import WelcomePage from "./views/welcome";
import CulinarySelector from "./componenets/culinaryselector";


function App() {
  return <div id='appformat'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<WelcomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='about' element={<AboutPage/>}/>
          </Routes>
      </BrowserRouter>
  </div>;
}
export default App;
