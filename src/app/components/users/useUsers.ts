'use client'

import { useState, useEffect } from "react";
import { getAllUsers } from "@/app/services/api.services";
import { IUser } from "@/app/models/IUser";
import { IUsersResponse } from "@/app/models/IUsersResponse";

export const useUsers = (skip: number) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersResponse: IUsersResponse = await getAllUsers(skip.toString());
            setUsers(usersResponse.users);
            setTotal(usersResponse.total);
        };

        fetchUsers();
    }, [skip]);

    return { users, total };
};
