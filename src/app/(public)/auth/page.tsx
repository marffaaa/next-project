"use client";

import { useState } from "react";
import AuthComponent from "@/app/components/auth/AuthComponent";


const AuthPage = () => {
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

    return (
        <div className="auth-page flex justify-center items-center h-screen bg-red-50 p-10 border-t-2 border-red-950">
            {isLoginSuccessful ? (
                <p className="text-green-500 text-center text-2xl">You have successfully logged in!</p>
            ) : (
                <AuthComponent onLoginSuccess={() => setIsLoginSuccessful(true)} />
            )}
        </div>
    );
};

export default AuthPage;
