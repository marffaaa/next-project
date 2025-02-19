import RecipesComponent from "@/app/components/recipes/RecipesComponent";
import SearchComponent from "@/app/components/search/SearchComponent";

const RecipesPage = () => {
    return (
        <div>
            <SearchComponent searchType="recipes" />
            <RecipesComponent/>
        </div>
    );
};

export default RecipesPage;
