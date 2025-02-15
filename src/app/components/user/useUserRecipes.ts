import { useState, useEffect } from "react";
import { IRecipe } from "../../models/IRecipe";
import {getAllUserRecipes} from "@/app/services/api.services";




export const useUserRecipes = (userId: number) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAllUserRecipes()
            .then((data) => {
                const userRecipes = data.filter((recipe) => recipe.userId === userId);
                setRecipes(userRecipes);
            })
            .catch((err) => {
                setError("Failed to load recipes.");
                console.error(err);
            });
    }, [userId]);

    return { recipes, error };
};