import { IUser } from "@/app/models/IUser";
import { IUsersResponse } from "@/app/models/IUsersResponse";
import { IRecipeResponse } from "@/app/models/IRecipeResponse";
import { IRecipe } from "@/app/models/IRecipe";
import { createAuthAxiosInstance } from "./authAxiosInstance";

export const getAllUsers = async (skip: string): Promise<IUsersResponse> => {
        const axiosInstance = createAuthAxiosInstance();
        const response = await axiosInstance.get<IUsersResponse>(`/users?skip=${skip}`);
        return response.data;
};

export const getUserById = async (id: number): Promise<IUser> => {
    try {
        const axiosInstance = createAuthAxiosInstance();
        const response = await axiosInstance.get<IUser>(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("User not found");
    }
};

export const getAllUserRecipes = async (): Promise<IRecipe[]> => {
    try {
        const axiosInstance = createAuthAxiosInstance();
        const response = await axiosInstance.get<{ recipes: IRecipe[] }>("/recipes");
        return response.data.recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};

export const getAllRecipes = async (skip: string): Promise<IRecipeResponse> => {
    try {
        const axiosInstance = createAuthAxiosInstance();
        const response = await axiosInstance.get<IRecipeResponse>(`/recipes?skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};

export const getRecipeById = async (id: number): Promise<IRecipe> => {
    try {
        const axiosInstance = createAuthAxiosInstance();
        const response = await axiosInstance.get<IRecipe>(`/recipes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe:", error);
        throw error;
    }
};
