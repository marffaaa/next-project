import { IUser } from "@/app/models/IUser";
import { IRecipe } from "@/app/models/IRecipe";

export const fetchSearchResults = async (searchType: string, query: string, id?: string) => {
    let url: string = "";
    try {
        if (id) {
            const url = `https://dummyjson.com/${searchType}`;
            let results: IUser[] | IRecipe[] = [];
            let skip = 0;
            const limit = 30;

            while (true) {
                const res = await fetch(`${url}?limit=${limit}&skip=${skip}`);
                const data = await res.json();

                if (!data[searchType] || data[searchType].length === 0) break;

                results = [...results, ...data[searchType]];
                skip += limit;
            }

            if (searchType === "users") {
                const filteredResults = (results as IUser[]).filter((item) => item.id.toString() === id);
                return filteredResults;
            } else if (searchType === "recipes") {
                const filteredResults = (results as IRecipe[]).filter((item) => item.id.toString() === id);
                return filteredResults;
            }
        } else {
            url = `https://dummyjson.com/${searchType}/search?q=${query}`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("Data not found");

            const data = await res.json();
            if (data && typeof data === "object" && searchType in data) {
                return Array.isArray(data[searchType]) ? data[searchType] : [];
            } else {
                return [];
            }
        }
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An error occurred");
    }
};
