'use client'

import {useSearchParams} from "next/navigation";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";
import RecipeComponent from "../recipe/RecipeComponent";
import { useRecipes } from "../recipe/useRecipes";
import {limit} from "@/app/const/constants";


const RecipesComponent = () => {
    const searchParam = useSearchParams();
    const skip: number = searchParam.get('skip') ? Number(searchParam.get('skip')) : 0;
    const { recipes, total } = useRecipes(skip);

    return (
        <div className="w-full h-full bg-red-50 m-0">{recipes.map(recipe => (<RecipeComponent key={recipe.id} recipe={recipe} />))}
            <PaginationComponent total={total} limit={limit} skip={skip} />
        </div>
    );
};

export default RecipesComponent;
