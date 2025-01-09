import {Recipe, RecipeServer, User} from "./customTypes";

const convertToBase64 = (file: File) => {
    return new Promise<string|ArrayBuffer|null>((resolve, reject) => {
      const fileReader : FileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


export async function postRecipe(recipe: Recipe, id:string): Promise<boolean> {
    try {
        const imgBinary = await convertToBase64(recipe.Image)

        const response = await fetch("http://localhost:5000/record/recipe", {
            method: "POST",
            body: JSON.stringify({
                Name: recipe.Name,
                UserId: id,
                Culinary_Type: recipe.Culinary_Type,
                Description: recipe.Description,
                Rating: recipe.Rating,
                Ingredients: recipe.Ingredients,
                Instructions: recipe.Instructions,
                Image: imgBinary
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        return response.ok;


    } catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        } else {
            message = String(error);
        }
        console.error(`Error with Posting Recipe: ${message}`);
        return false
    }
}

// API function to create new entry in user id table
export const createUser = async (user: User): Promise<void> => {
    try{
        let response: Response = await fetch("http://localhost:5000/record/createUser", {
            method: "POST",
            body: JSON.stringify({
                Name: user.Name,
                Email: user.Email,
                Sub: user.Sub
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        });

        if (!response.ok){
            console.log(response.status)
        }
    } catch (error) {
        let message: string;
        if (error instanceof Error) {
            message = error.message
        }
        else {
            message = String(error)
        }
        console.error(`Error with posting new user: ${message}`);
    }
}

export const getNumberofRecipes = async (): Promise<number> => {
    let num_recipes: number = 0
    try {
        let response: Response = await fetch("http://localhost:5000/record/numRecipes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            num_recipes = await response.json()
        }
    }
    catch (error: any) {
        console.error(`Error with getting number of recipes: ${error.message}`)
    }

    return num_recipes
}
export const getAllRecipes = async (): Promise<Array<RecipeServer>> => {
    let recipeList : Array<RecipeServer> = []
    try {
        let response: Response = await fetch("http://localhost:5000/record/getAllRecipes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            recipeList = await response.json()
        }
    }
    catch(error: any){
        console.error(`Error with Getting All Recipes: ${error.message}`)
    }

    return recipeList
}
export const getAllRecipesUser = async (user: User) : Promise<Array<Recipe>> => {
    let userSub = user.Sub
    let recipeList : Array<Recipe> = []
    try {
        let response: Response = await fetch("http://localhost:5000/record/getAllRecipesForUser", {
            method: "GET",
            body: JSON.stringify({
                User_Sub: userSub
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            recipeList = await response.json()
        }
    }
    catch(error: any){
        console.error(`Error with Getting All Recipes By User: ${error.message}`)
    }

    return recipeList
}
