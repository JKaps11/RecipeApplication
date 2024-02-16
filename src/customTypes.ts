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

export type Recipe = {
    Name: string;
    Culinary_Type: string;
    Description: string;
    Rating: number;
    Ingredients: Array<Ingredient>;
    Instructions: Array<string>;
}

export type GroceryList = {
  Name: string;
  Groceries: Array<Ingredient>;
}
