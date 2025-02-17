"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { handleLogin } from "@/app/services/auth.services";

interface AuthComponentProps {
    onLoginSuccess: () => void;
}

interface IFormInputs {
    username: string;
    password: string;
}

const AuthComponent: FC<AuthComponentProps> = ({ onLoginSuccess }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    // Ініціалізація useForm
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
        mode: "all"
    });

    const onSubmit = async (formData: IFormInputs) => {
        await handleLogin(formData.username, formData.password, onLoginSuccess, setErrorMessage, setSuccessMessage);
        reset();
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("username", { required: "Username is required" })}
                        className="border p-2 rounded mb-4"
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                        className="border p-2 rounded mb-4"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-red-500 text-white py-2 rounded"
                    disabled={!isValid}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AuthComponent;
