export enum Amount_Types{
    tbsp,
    tsp,
    cup,
    pinch
}

export type Ingredient = {
    Name: string;
    Amount_Num: number;
    Amount_Type: Amount_Types;
}

export type RecipeServer = {
    Name: string;
    UserId: string;
    Culinary_Type: string;
    Description: string;
    Rating: number;
    Ingredients: Array<Ingredient>;
    Instructions: Array<string>;
    Image: string;
}

export type Recipe = {
    Name: string;
    UserId: string;
    Culinary_Type: string;
    Description: string;
    Rating: number;
    Ingredients: Array<Ingredient>;
    Instructions: Array<string>;
    Image: File;
}

export type GroceryList = {
  Name: string;
  Groceries: Array<Ingredient>;
}

export type User = {
    Name: string;
    Email: string;
    Sub: string;
}