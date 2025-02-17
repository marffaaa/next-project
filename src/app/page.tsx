"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {
    const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-red-50 p-5">
            {user ? (
                <h1 className="text-3xl font-bold text-red-900">Welcome, {user.firstName} {user.lastName}!</h1>
            ) : (
                <div className="text-center">
                    <p className="text-4xl w-96 p-6 text-red-900 font-semibold mb-10">You need to authenticate to access the site.</p>
                    <Link href="/auth">
                        <button className="bg-red-800 w-52 h-42 text-white py-2 px-8 rounded-lg shadow-md hover:bg-red-900">
                            Go to Login
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HomePage;
