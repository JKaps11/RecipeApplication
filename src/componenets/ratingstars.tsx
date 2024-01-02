import React from "react";
import "../styling/ratingstars.css";
interface ratingProps{
    rating:number;
}

const StarsRating = ({rating}:ratingProps) => {

    const displayStars =  (rating: number) => {
        let starType = "";

        if(rating === 10){
            starType = "ten.jpg";
        }
        else if(rating >= 9){
            starType = "nine.jpg";
        }
        else if(rating >= 8){
            starType = "eight.jpg";
        }
        else if(rating >= 7){
            starType = "seven.jpg";
        }
        else if(rating >= 6){
            starType = "six.jpg";
        }
        else if(rating >= 5){
            starType = "five.jpg";
        }
        else if(rating >= 4){
            starType = "four.jpg";
        }
        else if(rating >= 3){
            starType = "three.jpg";
        }
        else if(rating >= 2){
            starType = "two.jpg";
        }
        else if(rating >= 1) {
            starType = "one.jpg";
        }
        else if(rating >= 0){
            starType = "zero.jpg";
        }
        else{
            return <h2> No proper rating for this recipe was found</h2>
        }

        const imgUrl = require(`../assets/starImages/${starType}`);

        return <img id="stars" src={imgUrl} alt={rating.toString()}></img>

    };

    return <>
        {displayStars(rating)}
    </>
}

export default StarsRating;