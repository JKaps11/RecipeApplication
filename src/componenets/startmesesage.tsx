import TextBubble from "./textbubble";
import React from "react";

const StartMessage = () => {
    return <TextBubble>
        <h4>Start Creating Recipes Now!</h4>
        <p>
            Get started by pressing the "create recipes" button in the the recipe navigation menu.
        </p>
        <p>
            Press the Home button in the top left to reset
        </p>
    </TextBubble>
}

export default StartMessage;