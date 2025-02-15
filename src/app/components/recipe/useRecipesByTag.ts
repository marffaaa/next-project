'use client'

import { useState, useEffect } from "react";
import { IRecipe } from "../../models/IRecipe";
import { IRecipeResponse } from "../../models/IRecipeResponse";
import {getAllRecipes} from "@/app/services/api.services";


export const useRecipesByTag = (tag: string | undefined, skip: string) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!tag) return;

        setLoading(true);
        getAllRecipes(skip)
            .then((data: IRecipeResponse) => {
                const filteredRecipes = data.recipes.filter((recipe: IRecipe) =>
                    recipe.tags.includes(tag)
                );
                setRecipes(filteredRecipes);
                setTotal(data.total);
            })
            .catch(() => setError("Failed to load recipes"))
            .finally(() => setLoading(false));
    }, [tag, skip]);

    return { recipes, total, loading, error };
};