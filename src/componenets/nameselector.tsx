import React from "react";

const NameSelector = () => {
    return (
        <>
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
        </>
    )
}

export default NameSelector;