import { FC } from "react";
import { IRecipe } from "../../models/IRecipe";
import Link from "next/dist/client/app-dir/link";


type PropsType = {
    recipe: IRecipe;
}

const RecipeComponent: FC<PropsType> = ({ recipe }) => {

    return (
        <div className='flex justify-center w-full h-full'>
            <div
                className='bg-red-200 shadow-md w-2/6 rounded-3xl flex flex-col justify-center text-red-950 p-5 pl-12 my-6'>
                <h2 className='text-xl text-red-950 font-semibold'>
                    <Link href={`/auth/recipes/${recipe.id}`}>{recipe.id}. {recipe.name}</Link>
                </h2>
                <p className='p-3'><strong>Tags:</strong>
                    {recipe.tags.map((tag, index) => (
                        <Link
                            href={'/auth/recipes/tag/' + tag}
                            key={index}
                            className="cursor-pointer text-red-700 font-bold ml-2 hover:underline"

                        >
                            #{tag}
                        </Link>
                    ))}
                </p>
            </div>
        </div>

    );
};

export default RecipeComponent;