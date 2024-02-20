import {Recipe} from "./customTypes";

export async function postRecipestoDB(recipe: Recipe) {
    try {
        const response = await fetch("http://localhost:5000/record/", {
            method: "POST",
            body: JSON.stringify({
                Name: recipe.Name,
                Culinary_Type: recipe.Culinary_Type,
                Description: recipe.Description,
                Rating: recipe.Description,
                Ingredients: recipe.Ingredients,
                Instructions: recipe.Instructions,
                Image: recipe.Image
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to Upload Recipe") ;
        }
        console.log(response.status);

    } catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        } else {
            message = String(error);
        }
        console.error(`Error with Posting Recipe: ${message}`);
    }
}