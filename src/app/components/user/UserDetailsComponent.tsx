import { FC } from "react";
import { IUser } from "../../models/IUser";
import { IRecipe } from "../../models/IRecipe";
import { useUserRecipes } from "./useUserRecipes";
import Link from "next/dist/client/app-dir/link";

type PropsType = {
    user: IUser;
};

const UserDetailsComponent: FC<PropsType> = ({ user }) => {
    const { recipes, error } = useUserRecipes(user.id);

    return (
        <div className='flex flex-col justify-center items-center w-full h-full border-t-2 border-red-950 bg-red-50 m-0 pt-5'>
            <h2 className="flex justify-center items-center shadow-md bg-red-900 rounded-3xl text-orange-50 py-5 text-5xl text-center uppercase font-semibold w-1/2">{user.firstName} {user.lastName}</h2>
            <div className=" bg-red-200 p-10 my-8 shadow-md w-2/5 rounded-3xl flex flex-col justify-center text-lg text-red-950 font-semibold">
                <p>Gender: {user.gender}</p>
                <p>Age: {user.age}</p>
                <p>Birth date: {user.birthDate}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {user.address.country}, {user.address.city}</p>
                <p>University: {user.university}</p>
                <p>Blood group: {user.bloodGroup}</p>
                <p>Eye color: {user.eyeColor}</p>
                <p>Hair color: {user.hair.color}</p>
                <p>Height: {user.height}</p>
                <p>Weight: {user.weight}</p>
                <h3>Recipes:</h3>
                {error ? (
                    <p>{error}</p>
                ) : recipes.length === 0 ? (
                    <p>This user has no recipes.</p>
                ) : (
                    <ul>
                        {recipes.map((recipe: IRecipe) => (
                            <li key={recipe.id}>
                                <Link href={`/auth/recipes/${recipe.id}`}>{recipe.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>


        </div>
    );
};

export default UserDetailsComponent;