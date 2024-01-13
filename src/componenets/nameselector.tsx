import React from "react";
import "../styling/nameselector.css"
const NameSelector = () =>{
    return <div id="nameSelectorLayout">
        <div id="nameSelectorTitleDiv">
            <h2 id="nameSelectorTitle">Enter in the name of your recipe below!</h2>
        </div>
            <form id="nameSelectorForm">
                <div id="inputFieldDiv">
                    <input type="text" required id="nameSelectorInput" name="rname"/>
                    <button id="nameSelectorButton">Submit</button>
                </div>
            </form>

    </div>
}

export default NameSelector;