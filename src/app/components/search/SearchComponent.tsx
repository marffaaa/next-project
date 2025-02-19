"use client";

import { FC} from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { SearchProps } from "@/app/models/ISearchProps";
import { ISearchInput } from "@/app/models/ISearchInput";

const SearchComponent: FC<SearchProps> = ({ searchType }) => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ISearchInput>({
        mode: "all",
    });

    const onSubmit = ({ query }: ISearchInput) => {
        if (!query.trim()) return;
        const formattedQuery = /^\d+$/.test(query) ? query : query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
        if (/^\d+$/.test(formattedQuery)) {
            router.push(`/search/${searchType}?id=${formattedQuery}`);
        } else {
            router.push(`/search/${searchType}?q=${formattedQuery}`);
        }

        reset();
    };

    return (
        <div className="w-full">
            <div className="bg-white flex justify-evenly p-4 shadow-md mb-6 flex gap-4 items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center content-center place-content-center items-center w-2/3  gap-12">
                    <div className="w-2/3">
                        <input
                            type="text"
                            placeholder={`Search ${searchType}...`}
                            {...register("query", {required: "Search field cannot be empty"})}
                            className="border p-2 rounded-xl mb-2 w-full"
                        />
                        {errors.query && <p className="text-red-500 text-sm">{errors.query.message}</p>}
                    </div>

                    <button type="submit" disabled={!isValid}
                            className="bg-red-800 text-white font-semibold py-2 px-6 rounded-xl">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchComponent;
