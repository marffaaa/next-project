"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { IRecipe } from "@/app/models/IRecipe";
import {getRecipeById} from "@/app/services/api.services";


export const useRecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<IRecipe | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!id) return;

        const recipeId = parseInt(id as string);
        if (isNaN(recipeId)) {
            setError("Invalid recipe ID");
            setLoading(false);
            return;
        }

        getRecipeById(recipeId)
            .then((recipeData) => {
                setRecipe(recipeData);
                setError(null);
            })
            .catch(() => {
                setError("Recipe not found");
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { recipe, error, loading };
};
