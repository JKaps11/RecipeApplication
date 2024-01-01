import React from "react";
import TextBubble from "./textbubble";

const NameSelector = () => {
    return (
        <TextBubble>
            <div>
                <h1>Enter in the name of your recipe below!</h1>

                <form>
                    <div>
                        <label>Recipe Name</label>
                        <input type="text" required id="rname" name="rname"/>
                        <button>Submit</button>

                    </div>
                </form>
            </div>
        </TextBubble>
    )
}

export default NameSelector;