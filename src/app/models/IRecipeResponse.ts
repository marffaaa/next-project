import { IRecipe } from "./IRecipe";

export interface  IRecipeResponse{
    recipes: IRecipe[];
    total: number;
    skip: number;
    limit: number;
}