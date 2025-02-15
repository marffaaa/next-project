import {Dispatch, SetStateAction} from "react";
import {IAuthResponse} from "@/app/models/IAuthResponse";

export const handleLogin = async (
    username: string,
    password: string,
    onLoginSuccess: (userData: IAuthResponse) => void,
    setErrorMessage: Dispatch<SetStateAction<string | null>>,
    setSuccessMessage:Dispatch<SetStateAction<string | null>>
) => {
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!username || !password) {
        setErrorMessage("Please enter both username and password.");
        return;
    }

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password,
                expiresInMins: 30,
            }),
            credentials: "include",
        });

        if (!response.ok) {
            const errorData = await response.json();
            setErrorMessage(errorData.message || "Login failed. Please try again.");
            return;
        }

        const userData:IAuthResponse = await response.json();

        document.cookie = `accessToken=${userData.accessToken}; path=/; max-age=${30 * 60}`;
        document.cookie = `userData=${JSON.stringify(userData)}; path=/; max-age=${30 * 60}`;

        onLoginSuccess(userData);
        setSuccessMessage(`Login successful! Welcome, ${userData.firstName} ${userData.lastName}`);

        return userData;

    } catch (err) {
        console.error(err);
        setErrorMessage("An error occurred during login.");
    }
};
