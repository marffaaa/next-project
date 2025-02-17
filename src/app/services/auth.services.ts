import { IAuthResponse } from "../models/IAuthResponse";
import {Dispatch, SetStateAction} from "react";
import axiosInstance from "@/app/services/axiosInstance";

export const handleLogin = async (
    username: string,
    password: string,
    onLoginSuccess: (userData: IAuthResponse) => void,
    setErrorMessage: Dispatch<SetStateAction<string | null>>,
    setSuccessMessage: Dispatch<SetStateAction<string | null>>
) => {
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
        // Виконуємо запит на логін за допомогою axios
        const { data: userWithTokens } = await axiosInstance.post<IAuthResponse>("/login", {
            username,
            password,
            expiresInMins: 30,
        });

        // Зберігаємо accessToken в localStorage
        localStorage.setItem("accessToken", userWithTokens.accessToken);

        // Отримуємо дані про користувача
        const { data: userInfo } = await axiosInstance.get<IAuthResponse>("/me", {
            headers: {
                Authorization: `Bearer ${userWithTokens.accessToken}`,
            },
        });

        // Зберігаємо інформацію про користувача в localStorage
        localStorage.setItem("userData", JSON.stringify(userInfo));

        // Викликаємо функцію onLoginSuccess для обробки успішного логіну
        onLoginSuccess(userInfo);

        setSuccessMessage(`Login successful! Welcome, ${userInfo.firstName} ${userInfo.lastName}`);
        return userInfo;

    } catch (err) {
        console.error(err);
        setErrorMessage("An error occurred during login.");
    }
};
