"use client";


import RecipeDetailComponent from "@/app/components/recipe/RecipeDetailsComponent";
import {useRecipeDetails} from "@/app/components/recipe/useRecipeDetails";

const RecipeDetailsPage = () => {
    const { recipe, error, loading } = useRecipeDetails();
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return <RecipeDetailComponent recipe={recipe!} />;
};

export default RecipeDetailsPage;
