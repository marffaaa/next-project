import { useState, useEffect } from "react";
import { fetchSearchResults } from "@/app/services/search.services";
import { IUser } from "@/app/models/IUser";
import { IRecipe } from "@/app/models/IRecipe";

type SearchResult = IUser | IRecipe;

export const useSearchResults = (searchType: string, query: string, id?: string) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!searchType || (!query && !id)) {
            setResults([]);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchSearchResults(searchType, query, id);
                if (data) {
                    setResults(data);
                } else {
                    setResults([]);
                }
            } catch (err) {
                console.log(err)
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchType, query, id]);

    return { results, error, loading };
};
