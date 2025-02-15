"use client";

import {FC, FormEvent, useState} from "react";
import {handleLogin} from "@/app/services/auth.services";


interface AuthComponentProps {
    onLoginSuccess: () => void;
}

const AuthComponent: FC<AuthComponentProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await handleLogin(username, password, onLoginSuccess, setErrorMessage, setSuccessMessage);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded mb-4"
                />
                <button type="submit" className="bg-red-500 text-white py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default AuthComponent;
