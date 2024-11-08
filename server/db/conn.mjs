import { MongoClient, GridFSBucket } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  console.log("Connecting to MongoDB Atlas...");
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

const recipesDB = conn.db("Recipes");
const usersDB = conn.db("Users");
const recipeImageBucket = new GridFSBucket(recipesDB, {bucketName: "recipeImages"})
export default {recipesDB, usersDB, recipeImageBucket};