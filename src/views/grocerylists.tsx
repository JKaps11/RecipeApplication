import React, {useState} from "react";
import {GroceryList} from "../customTypes";
import "../styling/grocerylists.css";

interface GroceryListEntryProps {
  gList: GroceryList
}
const GroceryListEntry = ({gList}:GroceryListEntryProps) => {
  return <button id="gListEntryButton">
      <p>{gList?.Name}</p>
    </button>
}

const GroceryLists = () => {
  
  const [groceryLists, setGorceryLists] = useState<Array<GroceryList>>();
  const displayGroceryLists = () => {
    if(groceryLists?.length === 0){
      return <h2>Start by creating your first grocery list</h2>
    }
    else{
      return groceryLists?.map((glist) => {
        return <GroceryListEntry gList={glist}/>
      })
    }
  }
  return <div id="groceryListLayout">
    <div id="groceryListTop">
      <div id="groceryListButtonDiv">
        <button id="groceryListAddButton"></button>
      </div>
      <div id="groceryListTopRight">
      </div>
    </div>
    <div id="groceryListBody">
      {displayGroceryLists()}
    </div>
  </div>
}

export default GroceryLists;

