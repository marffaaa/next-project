"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { handleLogin } from "@/app/services/auth.services";
import { IFormInputs } from "@/app/models/IFormInputs";

interface AuthComponentProps {
    onLoginSuccess: () => void;
}


const AuthComponent: FC<AuthComponentProps> = ({ onLoginSuccess }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
        mode: "all"
    });

    const onSubmit = async (formData: IFormInputs) => {
        await handleLogin(formData.username, formData.password, onLoginSuccess, setErrorMessage, setSuccessMessage);
        reset();
    };

    return (
        <div className="bg-white p-4 rounded-2xl shadow-md h-3/6 w-4/12  mb-12 flex flex-col justify-center place-items-center   ">
            <h1 className="text-4xl font-semibold text-center mb-6 mt-6">Login</h1>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-56 text place-items-center">
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("username", { required: "Username is required" })}
                        className="border p-2 rounded-xl mb-4 w-64"
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                        className="border p-2 rounded-xl mb-4 w-64"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <button type="submit" disabled={!isValid} className="bg-red-800 text-white font-semibold py-3 rounded-xl mt-3 mb-6 w-52">
                    Login
                </button>
            </form>
        </div>
    );
};

export default AuthComponent;
