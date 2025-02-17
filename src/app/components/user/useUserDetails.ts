"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { IUser } from "@/app/models/IUser";
import {getUserById} from "@/app/services/api.services";


export const useUserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState<IUser | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!id) return;

        const userId = parseInt(id as string);
        if (isNaN(userId)) {
            setError("Invalid user ID");
            setLoading(false);
            return;
        }

        getUserById(userId)
            .then((userData) => {
                setUser(userData);
                setError(null);
            })
            .catch(() => {
                setError("User not found");
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { user, error, loading };
};
