import { FC } from "react";
import { IRecipe } from "../../models/IRecipe";
import RecipeComponent from "../recipe/RecipeComponent";

type PropsType ={
    recipes: IRecipe[]
}

const RecipeListComponent:FC<PropsType> = ({recipes}) => {
    return (
        <div>
            {recipes.map(recipe => <RecipeComponent recipe ={recipe} key={recipe.id}/>)}
        </div>
    );
};

export default RecipeListComponent