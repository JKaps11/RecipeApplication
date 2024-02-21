import {Recipe} from "./customTypes";

const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

export async function postRecipestoDB(recipe: Recipe) {
    try {
        const imgBinary = convertToBase64(recipe.Image[0])  

        const response = await fetch("http://localhost:5000/record/", {
            method: "POST",
            body: JSON.stringify({
                Name: recipe.Name,
                Culinary_Type: recipe.Culinary_Type,
                Description: recipe.Description,
                Rating: recipe.Description,
                Ingredients: recipe.Ingredients,
                Instructions: recipe.Instructions,
                Image: imgBinary
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
