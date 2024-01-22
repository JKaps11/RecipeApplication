export type Ingredient = {
    Name: string;
    Amount: string;
}

export type Recipe = {
    Name: string;
    Culinary_Type: string;
    Description: string;
    Rating: number;
    Ingredients: Array<Ingredient>;
    Instructions: Array<string>;
}