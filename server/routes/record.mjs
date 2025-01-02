import express from "express";
import db from "../db/conn.mjs";

const recipeDb = db.recipesDB
const usersDb = db.usersDB
const recipeImageBucket = db.recipeImageBucket

const router = express.Router();


router.get("/numRecipes", async (req, res) => {
    try {
        let num_recipes = await recipeDb.collection("RecipeCollection").countDocuments()

        if (num_recipes) {
            res.status(200).json(num_recipes)
        }
    }
    catch (err) {
        console.error("Error while getting number of recipes:", err);
        res.status(500).send("Failed to get number of recipes");
    }
})
// Adding user info to user table on user registration
router.post("/createUser", async (req, res) => {
  let newDocument = {
    Name: req.body.Name,
    Email: req.body.Email,
    User_Sub: req.body.Sub
  }

  let result = await usersDb.collection("UserID").insertOne(newDocument)
      .catch(err => {
        console.error('Insert failed:', err);
        res.send("Failed to insert rescipe").status(400)
      });
  if (result) {
    res.send(result).status(200)
  } else {
    console.log('Insert failed.');
    res.send(result).status(400)
  }
});

router.post("/recipe", async (req, res) => {
    console.log("server: " + req.body.UserId);

    try {
        // Convert Base64 image data to a buffer
        const buffer = Buffer.from(req.body.Image.split(",")[1], "base64");
        // Upload the image to GridFS and get the unique file ID
        const uploadStream = recipeImageBucket.openUploadStream(`recipe_image_${req.body.Name}`);

        uploadStream.end(buffer);

        // Set up event listeners for upload stream
        uploadStream.on("finish", async () => {
            console.log("file uploaded succesfully?", uploadStream.id)
            // Create a new recipe document with a refernce to the GridFS image ID
            const newDocument = {
                Name: req.body.Name,
                User_Sub: req.body.UserId,
                Culinary_Type: req.body.Culinary_Type,
                Description: req.body.Description,
                Rating: req.body.Rating,
                Ingredients: req.body.Ingredients,
                Instructions: req.body.Instructions,
                Image_GridFs_Id: uploadStream.id // Save the GridFS file ID here
            };

            // Insert the recipe document into RecipeCollection
            const result = await recipeDb.collection("RecipeCollection").insertOne(newDocument);
            res.status(200).send(result);
        });

        uploadStream.on("error", (err) => {
            console.error("Image upload failed:", err);
            res.status(500).send("Failed to upload image");
        });
    } catch (err) {
        console.error("Error while saving recipe:", err);
        res.status(500).send("Failed to save recipe");
    }
});

router.get("/getAllRecipes", async (req, res) => {
    try {
        // Fetch all recipes from the RecipeCollection
        const recipes = await recipeDb.collection("RecipeCollection").find().toArray();

        // Map through each recipe to fetch the image Data URL if an Image ID exists
        const recipesWithImages = await Promise.all(recipes.map(async (recipe) => {
            const imageUrl = await getImageDataUrl(recipe.Image_GridFs_Id);
            return {
                Name: recipe.Name,
                UserId: recipe.UserId,
                Culinary_Type: recipe.Culinary_Type,
                Description: recipe.Description,
                Rating: recipe.Rating,
                Ingredients: recipe.Ingredients,
                Instructions: recipe.Instructions,
                Image: imageUrl // Assign the Data URL or null
            };
        }));

        res.status(200).send(recipesWithImages);
    } catch (err) {
        console.error('Request Failed:', err);
        res.status(400).send("Failed to get all recipes");
    }
});

// Helper function to fetch image as a Base64 Data URL with filename from metadata
const getImageDataUrl = async (imageId) => {
    try {
        // Fetch metadata for the image
        const files = await recipeImageBucket.find({ _id: imageId }).toArray();

        // Check if any files were found
        if (!files.length) {
            console.log("No file found with this ID:", imageId);
            return null;
        }

        const fileName = files[0].filename;
        const chunks = [];
        const downloadStream = recipeImageBucket.openDownloadStream(imageId);

        downloadStream.on("data", (chunk) => chunks.push(chunk));
        downloadStream.on("error", (err) => {
            console.error("Error downloading image:", err);
            return null;
        });

        return new Promise((resolve) => {
            downloadStream.on("end", () => {
                const buffer = Buffer.concat(chunks);
                const dataUrl = `data:image/jpeg;filename=${fileName};base64,${buffer.toString("base64")}`;
                resolve(dataUrl);
            });
        });
    } catch (err) {
        console.error("Failed to get image Data URL:", err);
        return null;
    }
};


router.get("/getAllRecipesForUser", async (req, res) => {
  const result = await recipeDb.collection("RecipeCollection").find({["User_Sub"]: req.body.User_Sub}).toArray()
      .catch(err => {
        console.error('Request Failed:', err);
        res.send("Failed to get all recipes").status(400)
      });

  if (result) {
    res.send(result).status(200)
  } else {
    res.send(result).status(400)
  }
})



export default router;
