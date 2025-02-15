import { IRecipe } from "../../models/IRecipe";
import "./Recipe.css";
import Link from "next/dist/client/app-dir/link";

type RecipeDetailComponentProps = {
    recipe: IRecipe;
};

const RecipeDetailComponent = ({ recipe }: RecipeDetailComponentProps) => {

    return (
        <div className="flex flex-col justify-center items-center border-t-2 border-red-950 w-full h-full bg-red-50 m-0 p-10">
            <h1 className="flex justify-center items-center shadow-md bg-red-900 rounded-3xl text-orange-50 py-5 text-5xl text-center uppercase font-semibold w-1/2">
                {recipe.name}
            </h1>
            <img className="w-72 rounded-2xl shadow-lg m-8" src={recipe.image} alt={recipe.name} />
            <div className="w-2/4 text-left mt-7 mb-12 ml-40 h-40 flex flex-col justify-evenly text-lg text-red-950 font-semibold">
                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
                <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing} kcal</p>
            </div>

            <div className="bg-red-200 shadow-md w-2/5 rounded-3xl flex flex-col justify-center text-red-950">
                <div className="flex gap-3 content-center ml-10 mt-8">
                    <img className="w-9" src="https://img.icons8.com/?size=100&id=12898&format=png&color=000000"
                         alt="Ingredients"/>
                    <h2 className="font-bold text-2xl underline decoration-dotted decoration-4">Ingredients</h2>
                </div>
                <ul className="ml-16 mt-4 mb-8 font-medium">
                    {recipe.ingredients.map((ingredient: string, index: number) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="w-2/5 font-medium text-lg text-red-950">
                <h3 className="font-bold text-2xl mt-7">Instructions</h3>
                <ol>
                    {recipe.instructions.map((instruction: string, index: number) => (
                        <li className="my-3 text-lg font-semibold" key={index}>{instruction}</li>
                    ))}
                </ol>
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
                <p className='p-3'><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
            </div>
        </div>
    );
};

export default RecipeDetailComponent;