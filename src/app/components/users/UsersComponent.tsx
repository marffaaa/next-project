'use client'

import { useSearchParams } from "next/navigation";
import UserComponent from "../user/UserComponent";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";
import { useUsers } from "@/app/components/users/useUsers";

const UsersComponent = () => {
    const searchParams = useSearchParams();
    const skip = Number(searchParams.get("skip") || 0);
    const limit = 30;

    const { users, total } = useUsers(skip);

    return (
        <div className="w-full h-full bg-red-50 m-0">
            {users.map(user => (<UserComponent key={user.id} user={user} />))}
            <PaginationComponent total={total} limit={limit} skip={skip} />
        </div>
    );
};

export default UsersComponent;
