'use client'

import { useParams, useSearchParams } from "next/navigation";
import RecipeTagsComponent from "@/app/components/recipe/RecipeTagsComponent";
import PaginationComponent from "@/app/components/users/pagination/PaginationComponent";
import { useRecipesByTag } from "@/app/components/recipe/useRecipesByTag";
import RecipeListComponent from "@/app/components/recipes/RecipeListComponent";


const limit = 10;

const RecipeTagPage = () => {
    const { tag } = useParams<{ tag: string }>();
    const searchParam = useSearchParams();
    const skip = searchParam.get('skip') ? Number(searchParam.get('skip')) : 0;

    const { recipes, total, loading, error } = useRecipesByTag(tag, skip.toString());

    return (
        <div className="p-10 min-h-screen flex flex-col justify-between border-t-2 border-red-950 w-full h-full bg-red-50 m-0">
            <div>
                <RecipeTagsComponent tag={tag} />

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}

                {!loading && !error && recipes.length === 0 && (
                    <p className="text-gray-700">No recipes found for this tag.</p>
                )}

                {!loading && !error && recipes.length > 0 && (
                    <div className="mb-8">
                        <RecipeListComponent recipes={recipes} />
                    </div>
                )}
            </div>
            <div className="flex justify-center mt-auto">
                <PaginationComponent total={total} limit={limit} skip={skip}/>
            </div>
        </div>
    );
};

export default RecipeTagPage;
