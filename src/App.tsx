import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/home";
import AboutPage from "./views/aboutpage";
import MainMenu from "./componenets/mainmenu";

function App() {
  return <div id='appformat'>
      <BrowserRouter>
        <div id='mainmenu'>
          <MainMenu/>
        </div>
        <div id='router'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  </div>;
}
export default App;
