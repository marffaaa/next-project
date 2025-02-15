'use client'

import { useState, useEffect } from "react";
import {IRecipe} from "@/app/models/IRecipe";
import {IRecipeResponse} from "@/app/models/IRecipeResponse";
import { getAllRecipes } from "@/app/services/api.services";

export const useRecipes = (skip: number) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const fetchRecipes = async () => {
            const recipesResponse: IRecipeResponse = await getAllRecipes(skip.toString());
            setRecipes(recipesResponse.recipes);
            setTotal(recipesResponse.total);
        };

        fetchRecipes();
    }, [skip]);

    return { recipes, total };
};
