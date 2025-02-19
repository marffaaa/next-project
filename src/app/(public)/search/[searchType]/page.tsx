'use client'

import { useSearchParams, useParams } from "next/navigation";
import { IUser } from "@/app/models/IUser";
import { IRecipe } from "@/app/models/IRecipe";
import UserComponent from "@/app/components/user/UserComponent";
import RecipeComponent from "@/app/components/recipe/RecipeComponent";
import { useSearchResults } from "@/app/components/search/useSearchResults";

const SearchPage = () => {
    const params = useParams();
    const searchParams = useSearchParams();
    const query: string = searchParams.get("q") || "";
    const id: string = searchParams.get("id") || "";
    const searchType: string = Array.isArray(params.searchType) ? params.searchType[0] : params.searchType || "";

    const { results, error, loading } = useSearchResults(searchType, query, id);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                Search Results:
            </h1>
            {error && <p className="text-red-500">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {results.length > 0 ? (
                        results.map((item) => (
                            <div key={item.id}>
                                {searchType === "users" ? (
                                    <UserComponent user={item as IUser} />
                                ) : (
                                    <RecipeComponent recipe={item as IRecipe} />
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
