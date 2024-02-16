import React, {useState} from "react";
import {GroceryList} from "../customTypes";

const GroceryLists = () =< {
  
  const [groceryLists, setGorceryLists] = useState<Array<GroceryList>>();
  const displayGroceryLists = () => {
        
  }
  return <div id="groceryListLayout">
    <div id="groceryListTop">
      <div id="groceryListButtonDiv">
        <button id="groceryListAddButton"></button>
      </div>
      <div>
      </div>
    </div>
    <div id="groceryListBody">
      {displayGroceryLists()}
    </div>
  </div>
}

export default GroceryLists;

