import React from "react";

interface ratingProps{
    rating:number;
}

const StarsRating = ({rating}:ratingProps) => {

    const displayStars =  (rating: number) => {
        if(rating === 0){

        }
        else if(rating <= 1){

        }
        else if(rating <= 2){

        }
        else if(rating <= 3){

        }
        else if(rating <= 4){

        }
        else if(rating <= 5){

        }
        else if(rating <= 6){

        }
        else if(rating <= 7){

        }
        else if(rating <= 8){

        }
        else if(rating <= 9){

        }
        else if(rating <= 10){

        }
        else{
            return <h2> No proper rating for this recipe was found</h2>
        }
    };

    return <>
        {displayStars(rating)}
    </>
}

export default StarsRating;