import { IAuthResponse } from "../models/IAuthResponse";
import { Dispatch, SetStateAction } from "react";
import axiosInstance from "@/app/services/axiosInstance";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleLogin = async (
    username: string,
    password: string,
    onLoginSuccess: (userData: IAuthResponse) => void,
    setErrorMessage: Dispatch<SetStateAction<string | null>>,
    setSuccessMessage: Dispatch<SetStateAction<string | null>>,
    router: AppRouterInstance
) => {
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
        const { data: userWithTokens } = await axiosInstance.post<IAuthResponse>("/login", {
            username,
            password,
            expiresInMins: 30,
        });

        localStorage.setItem("accessToken", userWithTokens.accessToken);

        const { data: userInfo } = await axiosInstance.get<IAuthResponse>("/me", {
            headers: {
                Authorization: `Bearer ${userWithTokens.accessToken}`,
            },
        });

        localStorage.setItem("userData", JSON.stringify(userInfo));
        onLoginSuccess(userInfo);
        setSuccessMessage(`Login successful! Welcome, ${userInfo.firstName} ${userInfo.lastName}`);
        router.replace("/");

        return userInfo;
    } catch (err) {
        console.error(err);
        setErrorMessage("An error occurred during login.");
    }
};
