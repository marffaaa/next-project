import {FC} from "react";

interface RecipeTagsProps {
    tag: string;
}

const RecipeTagsComponent: FC<RecipeTagsProps> = ({ tag }) => {
    return <h1 className="text-3xl font-bold text-red-900 mb-5">Recipes with tag: #{tag}</h1>;
};

export default RecipeTagsComponent;
