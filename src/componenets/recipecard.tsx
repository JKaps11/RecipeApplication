import React from "react";
import StarsRating from "./ratingstars";
interface recipeCardProps{
    name: string;
    rating: number;
}

const clickHandeler = () =>{

};
const RecipeCard = ({name, rating}:recipeCardProps) => {
    return<button>
        <div>
            <StarsRating rating={rating}/>
        </div>
        <div>
            <h2>{name}</h2>
        </div>
    </button>
}

export default RecipeCard;